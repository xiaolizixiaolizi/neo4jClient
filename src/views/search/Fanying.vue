<template>
  <el-card class="fanying-card">
    <el-row :gutter="20">
      <el-col :span="4">
        <el-select v-model="fanying_value" placeholder="请选择反应类型">
          <el-option
            v-for="item in options"
            :key="item"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" icon="el-icon-search" @click="handle"
          >查询</el-button
        ></el-col
      >
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
      <el-col :span="6" style="margin-right:20px;line-height:30px">
        <fang-cheng ref="fangCheng" :graph-data="graphData"  style="margin-top:30px"></fang-cheng>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import ForceGraph from "components/graph/ForceGraph";
import FangCheng from "components/graph/FangCheng";
export default {
  name: "Fanying",
  components: {
    ForceGraph,
    FangCheng
  },
  data() {
    return {
      graphData: {},
      graphProps: {
        symbolSize: 30,
        force: {
          edgeLength: 100,
          repulsion: 200,
          gravity: 0.04
        },
        focusNodeAdjacency:true,
      },
      options: [
        "化合反应",
        "分解反应",
        "置换反应",
        "复分解反应",
        "氧化还原反应",
        "其他反应"
      ],
      fanying_value: ""
    };
  },
  methods: {
    // *******************************网络请求*******************************
    // *******************************逻辑处*******************************
    async handle() {
      if (this.fanying_value == "")
        return this.$message.info("请先选择反应类型");
      this.graphData = await this.$http.get(
        `/neo4j/type/${this.fanying_value}`
      );

      //清空选择框
    },
    //监听ForceGraph的图表子传父事件
    handleNodeClick(idList) {
      //调用子组件FangCheng的实例方法
      this.$refs.fangCheng.activeAction(idList);
    }
  },
  computed: {},
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
.fanying-card {
  margin-top: 20px;
}
</style>
