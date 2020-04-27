<template>
  <el-card class="tuiduan-card">
    <el-alert title="每次新查询之前先刷新此页面" type="warning" show-icon style="margin-bottom:20px"> </el-alert>
    <el-row>
      <el-col :span="24" v-for="(item, index) in wuzhiLabels" :key="index">
        <tui-duan-info
          :label="item"
          @sendMessage="sendMessage"
          ref="tuiDuan"
        ></tui-duan-info>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-button
          type="primary"
          icon="el-icon-search"
          @click="handle"
          :disabled="isDiaable"
          >查询</el-button
        >
      </el-col>
    </el-row>

    <!-- 左图右文 -->
    <el-row type="flex" justify="space-between" style="margin-top:20px">
      <el-col :span="15">
        <force-graph
          :graph-data="graphData"
          :graph-props="graphProps"
          @handleNodeClick="handleNodeClick"
        ></force-graph>
      </el-col>
      <el-col :span="7" style="margin-right:20px;line-height:30px">
        <fang-cheng
          ref="fangCheng"
          :graph-data="graphData"
          style="margin-top:30px"
        ></fang-cheng>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import TuiDuanInfo from "components/tuiduanComp/TuiDuanInfo";
import ForceGraph from "components/graph/ForceGraph";
import FangCheng from "components/graph/FangCheng";
export default {
  name: "TuiDuan",
  components: { TuiDuanInfo, ForceGraph, FangCheng },
  data() {
    return {
      wuzhiLabels: ["反应物", "中间产物", "生成物"],
      totalValue: { firstObj: {}, secondObj: {}, thirdObj: {} },
      //修改firstObj的值还是响应式，但是增加totalValue属性就不是响应式
      graphData: {},
      graphProps: {
        symbolSize: 40,
        force: {
          edgeLength: 150,
          repulsion: 200,
          gravity: 0.04
        },
        focusNodeAdjacency: true
      }
    };
  },
  methods: {
    // *******************************网络请求*******************************
    // *******************************逻辑处*******************************
    sendMessage(val) {
      if (val.label == "反应物") return (this.totalValue.firstObj = val);
      if (val.label == "中间产物") return (this.totalValue.secondObj = val);
      if (val.label == "生成物") return (this.totalValue.thirdObj = val);
    },
    async handle() {
      this.graphData = await this.$http.post(
        `/neo4j/tuiduan/three`,
        this.totalValue
      );
      // 清除上面下拉框的值 功能已经实践
      // this.$refs.tuiDuan.forEach(e => {
      //   e.yuansuValue = "";
      //   e.statusValue = "";
      //   e.wuzhiValue = "";
      //   e.colorValue = "";
      // });
    },
    //监听ForceGraph的图表子传父事件
    handleNodeClick(idList) {
      //调用子组件FangCheng的实例方法
      this.$refs.fangCheng.activeAction(idList);
    }
  },

  computed: {
    isDiaable() {
      let flag = true;
      if (
        Object.keys(this.totalValue.firstObj).length != 0 ||
        Object.keys(this.totalValue.secondObj).length != 0 ||
        Object.keys(this.totalValue.thirdObj).length != 0
      ) {
        flag = false;
      }
      return flag;
    }
  },
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  updated() {}, //生命周期 - 更新之后
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less" scoped>
.tuiduan-card {
  margin-top: 20px;
}
</style>
