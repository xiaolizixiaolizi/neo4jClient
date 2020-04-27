<template>
  <el-card class="allmatiral-card">
    <el-alert
      title="建议多使用鼠标缩放、平移、拖拽功能以方便查看化学知识图谱"
      type="warning"
      show-icon
    >
    </el-alert>
    <el-row style="margin:20px 0">
      <el-col :span="6">
        <el-select v-model="numValue" placeholder="请选择化学知识实体数量">
          <el-option
            v-for="item in numlist"
            :key="item"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="3">
        <el-button type="primary" icon="el-icon-search" @click="handle"
          >查询</el-button
        >
      </el-col>
      <el-col :span="3">
        <el-button
          type="primary"
          icon="el-icon-circle-plus-outline"
          @click="handleAdd"
          >添加新知识</el-button
        >
      </el-col>
    </el-row>
    <!-- 图谱展示 -->
    <all-one v-if="numValue == 100" :graph-data="graphData"></all-one>
    <all-two v-else-if="numValue == 200" :graph-data="graphData"></all-two>
    <all-three v-else-if="numValue == 300" :graph-data="graphData"></all-three>
    <all-five v-else-if="numValue == 500" :graph-data="graphData"></all-five>
    <!-- 对话框展示 -->
    <matrial-dialog :matrial-dialog="matrialDialog"></matrial-dialog>
  </el-card>
</template>

<script>
import AllOne from "components/allmatiralComp/All100";
import AllTwo from "components/allmatiralComp/All200";
import AllThree from "components/allmatiralComp/All300";
import AllFive from "components/allmatiralComp/All500";
import MatrialDialog from "components/allmatiralComp/MatrialDialog";

export default {
  name: "AllMatiral",
  components: { AllOne, AllTwo, AllThree, AllFive, MatrialDialog },
  data() {
    return {
      graphData: {},
      numlist: [100, 200, 300, 500],
      numValue: "",
      matrialDialog:{ 
        dialogVisible:false
      }
    };
  },
  methods: {
    // *******************************网络请求*******************************
    // *******************************逻辑处理*******************************
    async handle() {
      if (this.numValue == "")
        return this.$message.info("请先选择化学知识实体数量");
      const data = await this.$http.get(`/neo4j/findAll/${this.numValue}`);
      console.log("data: ", data);
      this.graphData = data;
    },
    handleAdd() {
      this.matrialDialog.dialogVisible=true
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
.allmatiral-card {
  margin-top: 20px;
}
</style>
