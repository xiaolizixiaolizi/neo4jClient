<template>
  <el-dialog
    title="提示"
    :visible.sync="deleteDialogStatus"
    width="30%"
    :before-close="handleClose"
  >
    <span>此操作会永久删除该用户，是否继续?</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancelDelete">取 消</el-button>
      <el-button type="primary" @click="deleteUser">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: "UserDelete",
  props: {
    deletevisible: { type: Boolean, default: false },
    currentuser: { type: Object }
  },
  components: {},
  data() {
    return {
      deleteDialogStatus: false
    };
  },
  methods: {
    // *******************************网络请求*******************************
    // *******************************逻辑处理*******************************
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          this.$emit("changeDeleteStatus", false);
          done();
        })
        .catch(_ => {});
    },
    cancelDelete() {
      this.$message.info("取消删除用户操作");
      this.$emit("changeDeleteStatus", false);
    },
    async deleteUser() {
      const { data, meta } = await this.$http.delete(
        `users/${this.currentuser.id}`
      );
      if (meta.status !== 200) return this.$message.error(meta.msg);
      this.$message.success(meta.msg);
      this.$emit("changeDeleteStatus", false); //关闭对话框
      this.$emit("fetchData"); //刷新数据
    }
  },
  computed: {},
  watch: {
    deletevisible(newVal) {
      this.deleteDialogStatus = newVal;
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
<style lang="less" scoped></style>
