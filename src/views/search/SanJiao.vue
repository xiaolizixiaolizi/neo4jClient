<template>
  <el-card class="sanjiao-card">
    <el-row>
      <el-col :span="6">
        <el-select v-model="searchWord" placeholder="请选择化学式知识实体">
          <el-option-group
            v-for="group in options"
            :key="group.label"
            :label="group.label"
          >
            <el-option
              v-for="item in group.options"
              :key="item"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-option-group>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-button icon="el-icon-search" type="primary" @click="handle"
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
      <el-col :span="7" style="margin-right:20px;line-height:30px">
        <fang-cheng ref="fangCheng" :graph-data="graphData" style="margin-top:30px"></fang-cheng>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import wuzhi from "common/wuzhi";
import ForceGraph from "components/graph/ForceGraph";
import FangCheng from "components/graph/FangCheng";
export default {
  name: "SanJiao",
  components: { ForceGraph, FangCheng },
  data() {
    return {
      graphData: {},
      graphProps: {
        symbolSize: 40,
        force: {
          edgeLength: 150,
          repulsion: 200,
          gravity: 0.04
        },
        focusNodeAdjacency: true
      },
      options: wuzhi,
      searchWord: "NaOH"
    };
  },
  methods: {
    // *******************************网络请求*******************************

    // *******************************逻辑处*******************************
    async handle() {
      if (this.searchWord == "") return this.$message.info("请先选择化学式知识实体");
      const data= await this.$http.get(
        `/neo4j/sanjiao/${this.searchWord}`
      );
      if(data.nodes.length==0) return this.$message.info(`${this.searchWord} 够不成化学物质三角转换关系`)
      // console.log(this.graphData );
      this.graphData=data
      
    },
     //监听ForceGraph的图表子传父事件
    handleNodeClick(idList) {
      //调用子组件FangCheng的实例方法
      this.$refs.fangCheng.activeAction(idList);
    }
  },
  computed: {},
  watch: {
    // searchWord(val){
    //   // 下拉框数据改变
    //   this.graphData={}
    // }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  updated() {}, //生命周期 - 更新之后
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less" scoped>
.sanjiao-card {
  margin-top: 20px;
}
</style>
