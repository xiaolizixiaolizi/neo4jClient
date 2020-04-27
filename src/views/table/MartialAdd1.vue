<template>
  <el-card class="martrail-add-card">
    <el-alert title="添加化学方程知识实体" type="info" show-icon center>
    </el-alert>

    <el-steps :active="parseInt(active)" align-center style="margin:20px 0" >
      <el-step title="添加化学方程节点" icon="el-icon-s-opportunity"></el-step>
      <el-step title="添加关系" icon="el-icon-connection"></el-step>
      <el-step title="完成" icon="el-icon-check"></el-step>
    </el-steps>

    <el-tabs
      tab-position="left"
      v-model="active"
      :before-leave="beforeChangeTab"
    >
      <el-tab-pane label="添加化学方程节点" name="0">
        <matral1-node ref="matral1Node" @changeValue='changeValue'></matral1-node>
      </el-tab-pane>
      <el-tab-pane label="添加关系" name="1">
        <matral1-links></matral1-links>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import Matral1Node from "components/allmatiralComp/Matral1Node";
import Matral1Links from "components/allmatiralComp/Matral1Links";
export default {
  name: "MartialAdd1",
  components: { Matral1Node, Matral1Links },
  data() {
    return {
      active: "0"
    };
  },
  methods: {
    // *******************************网络请求*******************************
    // *******************************逻辑处理*******************************
    beforeChangeTab(activeIndex) {
      if (activeIndex == 1) {
        let flag= this.$refs.matral1Node.checkIsFull();
        if (!flag) return false;
        return true
      }
    },
    changeValue(val){
      // console.log('val: ', val);
      this.active=val

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
.martrail-add-card {
  margin-top: 20px;
}
</style>
