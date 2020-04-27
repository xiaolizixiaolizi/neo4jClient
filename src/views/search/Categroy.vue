<template>
  <el-card class="category-card">
    <el-row :gutter="10">
      <el-col :span="6">
        <el-select
          v-model="category_value"
          placeholder="请选择物质类知识实体"
          :disabled="wuzhiFlag"
          @change="handleSelectChange"
        >
          <el-option
            v-for="item in options"
            :key="item"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="6">
        <el-select
          v-model="category_value1"
          placeholder="请选择离子类知识实体"
          :disabled="liziFlag"
          @change="handleSelectChange"
        >
          <el-option
            v-for="item in options1"
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
    <category-graph
      :graph-data="graphData"
      :graph-props="graphProps"
    ></category-graph>
  </el-card>
</template>

<script>
import CategoryGraph from "components/graph/CategoryGraph";
export default {
  name: "Categroy",
  components: { CategoryGraph },
  data() {
    return {
      graphData: {},
      graphProps: {
        symbolSize: 45,
        force: {
          edgeLength: 150,
          repulsion: 200,
          gravity: 0.04
        },
        focusNodeAdjacency: true
      },
      options: ["单质", "氧化物", "酸", "碱", "盐"],
      category_value: "",
      wuzhiFlag: false,
      options1: ["阴离子", "阳离子", "所有离子"],
      category_value1: "",
      liziFlag: false,
      handler: 0 //默认处理物质下拉框
    };
  },
  methods: {
    // *******************************网络请求*******************************
    // *******************************逻辑处*******************************
    // 处理点击事件
    async handle() {
      if (this.category_value == "" && this.category_value1 == "")
        return this.$message.info("请先选择化学知识实体");
      let value =
        this.handler == 0 ? this.category_value : this.category_value1;
        // console.log(value,typeof value);
        
      const res = await this.$http.get(
        `/neo4j/category/${value}/${this.handler}`
      );
      this.graphData=res
      //清空选择框
      this.category_value = "";
      this.category_value1 = "";
      // 全部可以选择
      this.liziFlag = false;
      this.wuzhiFlag = false;
    },
    // 处理下拉框事件
    handleSelectChange() {
      if (this.options.includes(this.category_value)) {
        this.liziFlag = true;
        this.handler=0
      } else {
        this.wuzhiFlag = true;
        this.handler = 1; //1表示操作离子下拉框
      }
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
.category-card {
  margin-top: 20px;
}
</style>
