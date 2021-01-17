<template>
    <!--    <div class="test-wrap">-->
    <!--        <full-loading :show="loading" :text="loadingText" />-->
    <!--        <a-card class="card">-->
    <div class="dashboard-container">
        <div class="dashboard-editor-container">
            <panel-group @handleSetLineChartData="handleSetLineChartData"/>
            <a-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
                <line-chart :chart-data="lineChartData"/>
            </a-row>
            <a-col :xs="24" :sm="24" :lg="8">
                <div class="chart-wrapper">
                    <radar-chart />
                </div>
            </a-col>
            <a-col :xs="24" :sm="24" :lg="8">
                <div class="chart-wrapper">
                    <pie-chart />
                </div>
            </a-col>
            <a-col :xs="24" :sm="24" :lg="8">
                <div class="chart-wrapper">
                    <bar-chart />
                </div>
            </a-col>
        </div>
    </div>
<!--    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
    <!--        </a-card>-->
    <!--    </div>-->
</template>

<script lang="ts">
    import {defineComponent, reactive, toRefs} from 'vue'
    // import HelloWorld from "@/components/HelloWorld.vue"
    import LineChart from './dashboard/LineChart.vue'
    import PanelGroup from './dashboard/PanelGroup.vue'
    import RadarChart from '@/components/Echarts/RadarChart.vue'
    import PieChart from '@/components/Echarts/PieChart.vue'
    import BarChart from '@/components/Echarts/BarChart.vue'

    const lineChartData = new Map()
    lineChartData
        .set(
            'newVisitis', {
                expectedData: [100, 120, 161, 134, 105, 160, 165],
                actualData: [120, 82, 91, 154, 162, 140, 145]
            })
        .set(
            'messages', {
                expectedData: [200, 192, 120, 144, 160, 130, 140],
                actualData: [180, 160, 151, 106, 145, 150, 130]
            })
        .set('purchases', {
            expectedData: [80, 100, 121, 104, 105, 90, 100],
            actualData: [120, 90, 100, 138, 142, 130, 130]
        })
        .set('shoppings', {
            expectedData: [130, 140, 141, 142, 145, 150, 160],
            actualData: [120, 82, 91, 154, 162, 140, 130]
        })
    // {
    //     newVisitis: {
    //         expectedData: [100, 120, 161, 134, 105, 160, 165],
    //         actualData: [120, 82, 91, 154, 162, 140, 145]
    //     },
    //     messages: {
    //         expectedData: [200, 192, 120, 144, 160, 130, 140],
    //         actualData: [180, 160, 151, 106, 145, 150, 130]
    //     },
    //     purchases: {
    //         expectedData: [80, 100, 121, 104, 105, 90, 100],
    //         actualData: [120, 90, 100, 138, 142, 130, 130]
    //     },
    //     shoppings: {
    //         expectedData: [130, 140, 141, 142, 145, 150, 160],
    //         actualData: [120, 82, 91, 154, 162, 140, 130]
    //     }
    // })

    const Home = defineComponent({
        name: 'Dashboard',
        components: {
            // HelloWorld,
            LineChart,
            PanelGroup,
            RadarChart,
            PieChart,
            BarChart
        },
        setup() {
            const data = reactive({
                lineChartData: lineChartData.get('newVisitis')
            })
            const handleSetLineChartData = (type: string) => {
                data.lineChartData = lineChartData.get(type)
            }
            return {
                handleSetLineChartData,
                ...toRefs(data)
            }
        },
        /*data() {
            return {
                lineChartData: lineChartData.get('newVisitis')
            }
        },
        methods: {
            handleSetLineChartData(type: string) {
                this.lineChartData = lineChartData.get(type)
            }
        }*/
    })

    export default Home
</script>

<style rel="stylesheet/less" lang="less" scoped>
    .dashboard-editor-container {
        padding: 32px;
        background-color: rgb(240, 242, 245);
        position: relative;

        .github-corner {
            position: absolute;
            top: 0;
            border: 0;
            right: 0;
        }

        .chart-wrapper {
            background: #fff;
            padding: 16px 16px 0;
            margin-bottom: 32px;
        }
    }

    .test-wrap {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        margin: 20px;
        border: 1px solid #eee;
        box-shadow: 1px 1px 10px #eee;
        padding: 30px 10px;
    }

    @media (max-width: 1024px) {
        .chart-wrapper {
            padding: 8px;
        }
    }
</style>

