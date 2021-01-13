<template>
    <div class="test-wrap">
        <full-loading :show="loading" :text="loadingText"/>
        <a-card class="card">
            <line-chart></line-chart>
            <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
        </a-card>
    </div>
</template>

<script lang="ts">
    import {Options, Vue, setup} from 'vue-class-component'; // @ is an alias to /src
    import {defineComponent} from 'vue'
    import HelloWorld from "@/components/HelloWorld.vue";
    import LineChart from './dashboard/LineChart.vue'

    const Home = defineComponent({
        components: {
            HelloWorld,
            LineChart
        },
        created() {
            console.log('routerList', this.$route)
            console.log(this)
        },
        methods: {
            hello() {
                console.log('hahha')
                return 'nihao'
            }
        }
    })

    export default Home
</script>

<style lang="less" scoped>
    .icons-list ::v-deep(.anticon) {
        margin-right: 6px;
        font-size: 40px;
        position: relative;
        z-index: 999;
        color: #f00;
    }

    .card {
        margin-top: 30px;
        position: relative;
    }

    .icons-list ::v-deep(.anticon) {
        margin-right: 6px;
        font-size: 40px;
        position: relative;
        z-index: 999;
        color: #f00;
    }

    .row {
        min-height: 60px;
    }

    .test {
        color: @primary;
    }

    .card {
        margin-top: 30px;
        position: relative;
        padding: 20px;
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

    @media (max-width: 580px) {
        .chart-wrapper {
            padding: 8px;
        }
    }
</style>

