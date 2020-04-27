<template>
  <el-row class="home-welcome">
    <el-col :span="24" class="home-container">
      <h2 class="title">该图谱具有欢迎各位师生们使用初中化学知识图谱在线查询系统的功能</h2>
      <p class="lead">
        该图谱具有<span style="color:#409eff">明晰化学实体概念、图示实体关系结构和搜索知识信息</span>的功能
      </p>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "HomeWelcome",
  components: {},
  data() {
    return {};
  },
  methods: {
    // *******************************网络请求*******************************
    // *******************************逻辑处理*******************************
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
.home-welcome {
  height: 95vh;
  background: url("~assets/images/home/home1.jpg") no-repeat;
  background-size: 100% 100%;
  .home-container {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-top: 100px;
    background-color: rgba(0, 0, 0, 0.7);
    text-align: center;
    color: white;
  }
  .title {
    font-size: 30px;
  }
  .lead {
    margin-top: 50px;
    font-size: 22px;
  }
}
</style>
