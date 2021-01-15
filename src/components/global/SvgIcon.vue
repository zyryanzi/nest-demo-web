<template>
    <div v-if="isExternal" :style="styleExternalIcon" class="svg-external-icon svg-icon" v-bind="$attrs"/>
    <svg v-else :class="svgClass" aria-hidden="true" v-bind="$attrs">
        <use :href="iconName"/>
    </svg>
</template>

<script>
    // doc: https://panjiachen.github.io/vue-element-admin-site/feature/component/svg-icon.html#usage
    import {isExternal} from '@/utils/validate'
    import {defineComponent, reactive, computed, ref} from 'vue'

    const SvgIcon = defineComponent({
        /*props: {
            iconClass: {
                type: String,
                required: true
            },
            className: {
                type: String,
                default: ''
            }
        },*/
        /*setup(props, context) {
            /!*const iconClass = reactive({
                type: String,
                required: true
            })
            const className = reactive({
                type: String,
                default: ''
            })*!/
            const iconClass = {
                type: String,
                required: true
            }
            const className = {
                type: String,
                default: ''
            }
            const isExternal = computed(() => {
                return isExternal(iconClass)
            })
            const iconName = computed(() => {
                return `#icon-${iconClass}`
            })
            const svgClass = computed(() => {
                if (className) {
                    return 'svg-icon ' + className
                } else {
                    return 'svg-icon'
                }
            })
            const styleExternalIcon = computed(() => {
                return {
                    mask: `url(${iconClass}) no-repeat 50% 50%`,
                    '-webkit-mask': `url(${iconClass}) no-repeat 50% 50%`
                }
            })
        },*/
        props: {
            iconClass: {
                type: String,
                required: true
            },
            className: {
                type: String,
                default: ''
            }
        },
        computed: {
            isExternal() {
                return isExternal(this.iconClass)
            },
            iconName() {
                return `#icon-${this.iconClass}`
            },
            svgClass() {
                if (this.className) {
                    return 'svg-icon ' + this.className
                } else {
                    return 'svg-icon'
                }
            },
            styleExternalIcon() {
                return {
                    mask: `url(${this.iconClass}) no-repeat 50% 50%`,
                    '-webkit-mask': `url(${this.iconClass}) no-repeat 50% 50%`
                }
            }
        }
    })

    export default SvgIcon
</script>

<style scoped>
    .svg-icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }

    .svg-external-icon {
        background-color: currentColor;
        mask-size: cover !important;
        display: inline-block;
    }
</style>
