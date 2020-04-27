<template>
  <el-dialog
    title="选择化学实体类型"
    :visible.sync="matrialDialog.dialogVisible"
    width="50%"
  >
    <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
   
    <span slot="footer" class="dialog-footer">
      <el-button @click="matrialDialog.dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="handleClick"
        >确 定</el-button
      >
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: "MatrialDialog",
  props: {
    matrialDialog: {}
  },
  data() {
    return {
      options: [
        {
          value: "0",
          label: "化学式知识实体"
        },
        {
          value: "1",
          label: "化学方程知识实体"
        }
      ],
      value:''
    };
  },
  methods: {
    // *******************************网络请求*******************************
    // *******************************逻辑处理*******************************
    handleClick(){
      if(this.value=='')return this.$message.info('你没有选择任何一种类型')
      this.matrialDialog.dialogVisible = false;
      if(this.value=='0')return this.$router.push({name:'newMatrial0'})// 加化学式
      if(this.value=='1') return this.$router.push({name:'newMatrial1'}) // 加化学方程
      
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
<style lang="less" scoped></style>
