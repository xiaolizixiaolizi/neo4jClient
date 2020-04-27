<template>
  <el-dialog
    title="分配角色"
    :visible.sync="setUserdialogVisible"
    width="40%"
    :before-close="handleClose"
  >
    <el-form
      v-if="Object.keys(currentuser).length !== 0"
      ref="form"
      :model="currentuser"
      label-width="80px"
    >
      <el-form-item label="当前用户">
        <el-input v-model="currentuser.username"></el-input>
      </el-form-item>
      <el-form-item label="当前角色">
        <el-input v-model="currentuser.role_name"></el-input>
      </el-form-item>
    </el-form>
    <el-select
      v-model="selectValue"
      placeholder="请重新分配该用户角色"
    >
      <el-option
        v-for="item in UserData"
        :key="item.id"
        :label="item.roleName"
        :value="item.id"
      >
      </el-option>
    </el-select>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleCancel">取 消</el-button>
      <el-button type="primary" @click="handleSave">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: "UserSetRole",
  props: {
    setvisible: { type: Boolean, default: false },
    currentuser: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {},
  data() {
    return {
      setUserdialogVisible: false,
      UserData: [],
      selectValue: ""
    };
  },
  methods: {
    // *******************************网络请求*******************************
    // 获取所有角色列表
    async fetchData() {
      const { data, meta } = await this.$http.get("roles");
      if (meta.status !== 200) return this.$message.error(meta.msg);
      this.UserData = data;
    },
    // *******************************逻辑处理*******************************
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          console.log(this.currentuser);
          this.$emit("changetRoleVisable");
          done();
        })
        .catch(_ => {});
    },
    // 处理下拉框选择事件
    handleCancel() {
      this.$emit("changetRoleVisable");
    },
    async handleSave() {
      if (!this.selectValue) return this.$message.warning("请选择要分配的角色");
      const { data, meta } = await this.$http.put(
        `users/${this.currentuser.id}/role`,
        {
          rid: this.selectValue
        }
      );
      if (meta.status !== 200) return this.$message.error("更新用户角色失败");
      // 成功 弹框 刷新列表 清空下拉框的值 关闭对话框
      this.$message.success("更新用户角色成功");
      this.selectValue = "";
      this.$emit("refresh");
      this.$emit("changetRoleVisable");
    }
  },
  computed: {},
  watch: {
    setvisible(newVal) {
      this.setUserdialogVisible = newVal;
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.fetchData();
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  updated() {}, //生命周期 - 更新之后
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less" scoped>
.el-select {
  margin-left: 80px;
}
</style>
