const IS_DEV = process.env.NODE_ENV !== 'production'

const path = require('path')
const defaultSettings = require('./src/settings.ts')

function resolve (dir) {
    return path.join(__dirname, dir)
}

const name = defaultSettings.title // 网址标题
const port = 50505 // 前端端口

/**
 * 开发环境
 * @param {} webpackConfig
 */
const DEVELOPMENT = webpackConfig => {
    /**
     * 启用 eval-source-map 更好的测试
     * 每个模块使用 eval() 执行，并且 source map 转换为 DataUrl 后添加到 eval()。
     * 初始化 source map 时比较慢，但是会在重新构建时提供比较快的速度，并且生成实际的文件。
     * 行数能够正确映射，因为会映射到原始代码中。它会生成用于开发环境的最佳品质的 source map。
     */
    webpackConfig.store.set('devtool', 'eval-source-map')
    webpackConfig.plugin('html').tap(([options]) => [
        Object.assign(options, {
            minify: false,
            chunksSortMode: 'none'
        })
    ])
    return webpackConfig
}

/**
 * 生产环境
 * 每个 loader/plugin 都有启动时间。尽量少使用不同的工具
 * @param {*} webpackConfig
 */
const PRODUCTION = webpackConfig => {
    // 不需要启用 source-map
    webpackConfig.store.set('devtool', '')
    webpackConfig.plugin('html').tap(([options]) => [
        Object.assign(options, {
            minify: {
                removeComments: true,
                removeCommentsFromCDATA: true,
                collapseWhitespace: true,
                conservativeCollapse: false,
                collapseBooleanAttributes: true,
                removeRedundantAttributes: true,
                removeAttributeQuotes: false,
                removeEmptyAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
                minifyJS: true,
                minifyCSS: true
            },
            cache: true, // 仅在文件更改时发出文件
            hash: true, // 将唯一的webpack编译哈希值附加到所有包含的脚本和CSS文件中,这对于清除缓存很有用
            scriptLoading: 'defer', // 浏览器支持非阻塞javascript加载（'defer'）,以提高页面启动性能
            inject: true, // 所有javascript资源都将放置在body元素的底部
            chunksSortMode: 'none'
        })
    ])
    return webpackConfig
}

module.exports = {
    publicPath: IS_DEV ? '/' : '/nest-demo-web/',
    outputDir: 'dist',
    assetsDir: 'static',
    // indexPath: '', // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
    integrity: true,
    css: {
        loaderOptions: {
            less: {
                sourceMap: IS_DEV,
                lessOptions: {
                    modifyVars: {
                        'primary-color': '#1DA57A',
                        'link-color': '#1DA57A',
                        'border-radius-base': '2px',
                    },
                    javascriptEnabled: true,
                    globalVars: {}
                }
            }
        }
    },
    devServer: {
        host: '127.0.0.1',
        port: port
        // proxy: 'http://localhost:50504'
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: ['./src/styles/index.less']
        }
    },
    /**
     configureWebpack是调整webpack配置最简单的一种方式，可以新增也可以覆盖cli中的配置。
     可以是一个对象：被 webpack-merge 合并到 webpack 的设置中去
     也可以是一个函数：如果你需要基于环境有条件地配置行为，就可以进行一些逻辑处理，可以直接修改或
     新增配置，(该函数会在环境变量被设置之后懒执行)。该方法的第一个参数会收到已经解析好的配置。
     在函数内，你可以直接修改配置，或者返回一个将会被合并的对象。
     */
    configureWebpack: config => {
        config.name = name
        config.resolve.alias['@'] = resolve('src')
        if (!IS_DEV) {
            // 去掉 console
            config.optimization.minimizer[0].options.terserOptions.compress.dropConsole = true
            config.optimization.minimizer[0].options.terserOptions.sourceMap = false
        }
    },
    chainWebpack: config => {
        IS_DEV ? DEVELOPMENT(config) : PRODUCTION(config)

        // set svg-sprite-loader
        const svgRule = config.module.rule('svg');
        // 清除已有的所有 loader。
        // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
        svgRule.uses.clear();
        svgRule
            .test(/\.svg$/)
            .include.add(resolve('./src/icons/svg'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            });
        const fileRule = config.module.rule('file');
        fileRule.uses.clear();
        fileRule
            .test(/\.svg$/)
            .exclude.add(resolve('./src/icons/svg'))
            .end()
            .use('file-loader')
            .loader('file-loader');
    },
    productionSourceMap: false,
    lintOnSave: true
}
