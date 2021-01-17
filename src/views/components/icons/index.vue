<template>
    <div class="icons-container">
        <aside>
            <a href="https://panjiachen.github.io/vue-element-admin-site/guide/advanced/icon.html" target="_blank">Add and use
            </a>
        </aside>
        <a-tabs type="card">
            <a-tab-pane tab="Icons">
                <div class="grid">
                    <div v-for="item of svgIcons" :key="item" @click="handleClipboard(generateIconCode(item),$event)">
                        <a-tooltip placement="top">
                            <template v-slot:="content">
                                {{ generateIconCode(item) }}
                            </template>
                            <div class="icon-item">
                                <svg-icon :icon-class="item" class-name="disabled"/>
                                <span>{{ item }}</span>
                            </div>
                        </a-tooltip>
                    </div>
                </div>
            </a-tab-pane>
            <a-tab-pane tab="Antd-UI Icons">
                <div class="grid">
                    <div v-for="item of antdIcons" :key="item"
                         @click="handleClipboard(generateElementIconCode(item),$event)">
                        <a-tooltip placement="top">
                            <template v-slot:="content">
                                {{ generateElementIconCode(item) }}
                            </template>
                            <div class="icon-item">
                                <i :class="'a-icon-' + item"/>
                                <span>{{ item }}</span>
                            </div>
                        </a-tooltip>
                    </div>
                </div>
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script>
    import clipboard from '@/utils/clipboard'
    import svgIcons from './svg-icons'
    import antdIcons from './antd-icons'

    export default {
        name: 'Icons',
        data() {
            return {
                svgIcons,
                antdIcons
            }
        },
        methods: {
            generateIconCode(symbol) {
                return `<svg-icon icon-class="${symbol}" />`
            },
            generateElementIconCode(symbol) {
                return `<i class="el-icon-${symbol}" />`
            },
            handleClipboard(text, event) {
                clipboard(text, event)
            }
        }
    }
</script>

<style lang="less" scoped>
    .icons-container {
        margin: 10px 20px 0;
        overflow: hidden;

        .grid {
            position: relative;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        }

        .icon-item {
            margin: 20px;
            height: 85px;
            text-align: center;
            width: 100px;
            float: left;
            font-size: 30px;
            color: #24292e;
            cursor: pointer;
        }

        span {
            display: block;
            font-size: 16px;
            margin-top: 10px;
        }

        .disabled {
            pointer-events: none;
        }
    }
</style>
