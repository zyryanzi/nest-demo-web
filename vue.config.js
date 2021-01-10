const IS_DEV = process.env.NODE_ENV !== 'production'

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
    publicPath: IS_DEV ? '/' : 'nest-demo-web',
    css: {
        loaderOptions: {
            less: {
                sourceMap: IS_DEV,
                lessOptions: {
                    javascriptEnabled: true,
                    globalVars: {}
                }
            }
        }
    },
    devServer: {
        proxy: 'http://localhost:8002'
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: ['./src/styles/index.less']
        }
    },
    // 去掉 console
    configureWebpack: config => {
        if (!IS_DEV) {
            config.optimization.minimizer[0].options.terserOptions.compress.dropConsole = true
            config.optimization.minimizer[0].options.terserOptions.sourceMap = false
        }
    },
    chainWebpack: config => {
        IS_DEV ? DEVELOPMENT(config) : PRODUCTION(config)
    },
    productionSourceMap: false,
    lintOnSave: true
}
