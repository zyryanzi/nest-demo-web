<template>
  <div class="dashboard-container">
    <div class="dashboard-editor-container">
      <a-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
        <heat-map />
      </a-row>
      <a-row :gutter="32">
        <a-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <radar-chart />
          </div>
        </a-col>
        <a-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <sunburst />
          </div>
        </a-col>
        <a-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <gauge />
          </div>
        </a-col>
      </a-row>
      <a-row :gutter="12">
        <a-col :span="12">
          <div class="chart-wrapper">
            <rich />
          </div>
        </a-col>
        <a-col :span="12">
          <div class="chart-wrapper">
            <theme-river />
          </div>
        </a-col>
      </a-row>
      <a-row :gutter="32">
        <a-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <graph />
          </div>
        </a-col>
        <a-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <sankey />
          </div>
        </a-col>
        <a-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <line3-d />
          </div>
        </a-col>
      </a-row>
      <a-row :gutter="12">
        <a-col :span="12">
          <div class="chart-wrapper">
            <scatter />
          </div>
        </a-col>
        <a-col :span="12">
          <div class="chart-wrapper">
            <point />
          </div>
        </a-col>
      </a-row>
      <a-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
        <div class="chart-wrapper">
          <word-cloud />
        </div>
      </a-row>
      <a-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
        <div class="chart-wrapper">
          <category />
        </div>
      </a-row>
    </div>
  </div>
</template>

<script>
import RadarChart from '@/components/Echarts/RadarChart.vue'
import HeatMap from '@/components/Echarts/HeatMap.vue'
import Gauge from '@/components/Echarts/Gauge.vue'
import Rich from '@/components/Echarts/Rich.vue'
import ThemeRiver from '@/components/Echarts/ThemeRiver.vue'
import Sunburst from '@/components/Echarts/Sunburst.vue'
import Graph from '@/components/Echarts/Graph.vue'
import Sankey from '@/components/Echarts/Sankey.vue'
import Scatter from '@/components/Echarts/Scatter.vue'
import Line3D from '@/components/Echarts/Line3D.vue'
import Category from '@/components/Echarts/Category.vue'
import Point from '@/components/Echarts/Point.vue'
import WordCloud from '@/components/Echarts/WordCloud.vue'

export default {
  name: 'Echarts',
  components: {
    Point,
    Category,
    Graph,
    HeatMap,
    RadarChart,
    Sunburst,
    Gauge,
    Rich,
    ThemeRiver,
    Sankey,
    Line3D,
    Scatter,
    WordCloud
  }
}
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .dashboard-editor-container {
    padding: 18px 22px 22px 22px;
    background-color: rgb(240, 242, 245);
    .chart-wrapper {
      background: #fff;
      padding: 16px 16px 0;
      margin-bottom: 32px;
    }
  }
</style>
