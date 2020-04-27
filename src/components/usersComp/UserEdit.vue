<template>
  <el-dialog
    v-if="Object.keys(currentuser).length !== 0"
    title="编辑用户"
    :visible.sync="editVisiableStatus"
    width="50%"
    :before-close="handleClose"
    @close="resetForm('editForm')"
  >
    <!--内容主体区域 -->
    <el-form :model="editForm" :rules="rules" ref="editForm" label-width="80px">
      <el-form-item
        v-for="(item, index) in editLabel"
        :key="index"
        :label="item"
        :prop="index"
      >
        <el-input
          v-model="editForm[index]"
          :disabled="index == 'username'"
        ></el-input>
      </el-form-item>
    </el-form>
    <!-- 底部按钮区域 -->
    <span slot="footer" class="dialog-footer">
      <el-button @click="resetForm('editForm')">重置</el-button>
      <el-button type="primary" @click="submitForm('editForm')"
        >确 定</el-button
      >
    </span>
  </el-dialog>
</template>

<script>
import validate from "common/validate";
export default {
  name: "UserEdit",
  props: {
    editvisible: {
      type: Boolean
    },
    currentuser: {
      type: Object,
      default() {
        return {
          test: "test"
        };
      }
    }
  },
  components: {},
  data() {
    const { checkEmail, checkPhone } = validate;
    return {
      editVisiableStatus: false,
      editForm: {
        id: "",
        username: "",
        email: "",
        mobile: ""
      },
      editLabel: {
        username: "用户名",
        email: "邮箱",
        mobile: "手机号码"
      },
      rules: {
        email: [
          { required: true, trigger: "blur", message: "邮箱不能为空" },
          { validator: checkEmail, trigger: "blur" }
        ],
        mobile: [
          { required: true, trigger: "blur", message: "手机号码不能为空" },
          { validator: checkPhone, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    // *******************************网络请求*******************************
    // *******************************逻辑处理*******************************
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          this.$emit("changeEditVisable", false);
          done();
        })
        .catch(_ => {});
    },
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          const { data, meta } = await this.$http.put(
            `users/${this.editForm.id}`,
            this.editForm
          );
          if (meta.status !== 200)
            return this.$message.error("更新用户数据失败");
          this.$emit("changeEditVisable", false); //关闭对话框
          this.$message.success(meta.msg);
          this.$emit("fetchData"); //刷新数据列表
        } else {
          // 前端验证不通过直接点击提交按钮触发此逻辑
          this.$message.error("验证提交失败");
          return false;
        }
      });
    },
    resetForm(formName) {
      console.log("reset");
      this.$refs[formName].resetFields();
    }
  },
  computed: {},
  watch: {
    editvisible(newVal, old) {
      this.editVisiableStatus = newVal;
    },
    currentuser(newVal, old) {
      this.editForm = newVal;
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
