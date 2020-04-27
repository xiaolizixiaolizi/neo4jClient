<template>
  <el-card class="table-card" v-if="tableData.length !== 0">
    <el-row :gutter="20">
      <el-col :span="4"
        ><span class="info">反应类型: </span><el-tag>{{ type }}</el-tag></el-col
      >
      <el-col :span="4"
        ><span class="info">反应条件: </span
        ><el-tag>{{ conditon }}</el-tag></el-col
      >
    </el-row>

    <el-table
      :data="tableData"
      style="width: 100%;margin-top:20px"
      border
      stripe
    >
      <el-table-column type="index" width="50" align="center" label="#">
      </el-table-column>
      <el-table-column
        v-for="(item, index) in tableLabel"
        :key="index"
        :prop="index"
        :label="item"
        align="center"
      >
      </el-table-column>
    </el-table>
    <el-button type="primary" @click="handle">添加化学方程实体</el-button
    >
  </el-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Matral1Links",
  props: {},
  data() {
    return {
      type: "",
      conditon: "",
      tableData: [],
      tableLabel: {
        hxs: "化学式",
        id: "新增化学方程ID",
        relation: "关系",
        value: "关系值"
      }
    };
  },

  methods: {
    // *******************************网络请求*******************************
    // 根据id获取数据
    async fetchData() {
      const { type, conditon, value } = await this.$http.get(
        `/neo4j/fangcheng/${this.fangchengId}`
      );
      this.type = type;
      this.conditon = conditon;
      this.tableData = value;
    },
    // *******************************逻辑处理*******************************
    handle(){
      this.$message.success('添加化学方程实体成功')
      this.$router.push({name:'quanmao'})
    }
  },
  computed: {
    ...mapState({
      fangchengId: "fangchengId"
    })
  },
  watch: {
    fangchengId(val) {
      console.log("watch ", val);
      this.fetchData();
    }
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
.table-card {
  .info {
    font-size: 12px;
    color: #909399;
  }
}
</style>
