<template>
    <div ref="el" :class="className" :style="{height:height,width:width}" />
</template>

<script lang="ts">
// 装饰器 据说风格有些怪异，不过对于一个后端开发来讲，和注解类似的写法，还是比较感兴趣
// import { Vue, Component, Provide } from 'vue-property-decorator'
// import { Options } from 'vue-class-component'

import {
    defineComponent,
    ref,
    toRefs,
    onMounted,
    onBeforeUnmount,
    nextTick
} from 'vue'
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

interface LineChartData {
    expectedData?: number[]
    actualData?: number[]
}

const LineChart = defineComponent({
    mixins: [resize],
    props: {
        className: {
            type: String,
            default: 'chart'
        },
        width: {
            type: String,
            default: '100%'
        },
        height: {
            type: String,
            default: '350px'
        },
        autoResize: {
            type: Boolean,
            default: true
        },
        chartData: {
            type: Object,
            required: true
        }
    },

    watch: {
        chartData: {
            deep: true,
            handler(val) {
                console.log('--- watch-handler val: ', val)
                this.setOptions(val)
            }
        }
    },

    setup: (props, context) => {
        const el = ref('el')
        let chart = echarts
        const setOptions = ({ expectedData, actualData }: any = {}) => {
            chart.setOption({
                xAxis: {
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    boundaryGap: false,
                    axisTick: {
                        show: false
                    }
                },
                grid: {
                    left: 10,
                    right: 10,
                    bottom: 20,
                    top: 30,
                    containLabel: true
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross'
                    },
                    padding: [5, 10]
                },
                yAxis: {
                    axisTick: {
                        show: false
                    }
                },
                legend: {
                    data: ['expected', 'actual']
                },
                series: [
                    {
                        name: 'expected',
                        itemStyle: {
                            normal: {
                                color: '#FF005A',
                                lineStyle: {
                                    color: '#FF005A',
                                    width: 2
                                }
                            }
                        },
                        smooth: true,
                        type: 'line',
                        data: expectedData,
                        animationDuration: 2800,
                        animationEasing: 'cubicInOut'
                    },
                    {
                        name: 'actual',
                        smooth: true,
                        type: 'line',
                        itemStyle: {
                            normal: {
                                color: '#3888fa',
                                lineStyle: {
                                    color: '#3888fa',
                                    width: 2
                                },
                                areaStyle: {
                                    color: '#f3f8ff'
                                }
                            }
                        },
                        data: actualData,
                        animationDuration: 2800,
                        animationEasing: 'quadraticOut'
                    }
                ]
            })
        }
        const { chartData } = toRefs(props)
        // const {chartData} = ref(props.chartData)

        const initChart = () => {
            const $el = el.value // 同 vue2 this.$el
            chart = echarts.init($el, 'macarons')
            setOptions(chartData.value)
        }

        onMounted(() => {
            nextTick(() => {
                initChart()
            })
        })

        onBeforeUnmount(() => {
            if (!chart.value) {
                return
            }
            chart.value.dispose()
            chart.value = null
        })

        return {
            setOptions,
            el
        }
    }
})

export default LineChart
</script>
