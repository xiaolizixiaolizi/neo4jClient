<template>
  <div>
    <el-button type="primary" @click="dialogvisible = true">添加用户</el-button>
    <el-dialog
      title="添加用户"
      :visible.sync="dialogvisible"
      width="50%"
      :before-close="handleClose"
      @close="resetForm('registerForm')"
    >
      <!--内容主体区域 -->
      <el-form
        :model="registerForm"
        :rules="rules"
        ref="registerForm"
        label-width="80px"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="registerForm.username"></el-input>
        </el-form-item>

        <el-form-item
          :label="item"
          :prop="index"
          v-for="(item, index) in registerLabel"
          :key="index"
        >
          <el-input
            v-model="registerForm[index]"
            :show-password="index == 'password'"
          ></el-input>
        </el-form-item>
      </el-form>
      <!-- 底部按钮区域 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="resetForm('registerForm')">重置</el-button>
        <el-button type="primary" @click="submitForm('registerForm')"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import validate from "common/validate";
export default {
  name:'UserAdd',
  components: {},
  data() {
    const { checkEmail, checkPassword, checkPhone } = validate;
    return {
      dialogvisible: false,
      registerForm: {
        username: "",
        password: "",
        email: "",
        mobile: ""
      },
      registerLabel: {
        // username: "用户名",
        password: "密码",
        email: "邮箱",
        mobile: "手机"
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, max: 10, message: "长度在 2 到 10 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, trigger: "blur", message: "密码不能为空" },
          { validator: checkPassword, trigger: "blur" }
        ],
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
    // 添加用户弹出框
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          const { data, meta } = await this.$http.post(
            "users",
            this.registerForm
          );
          if (meta.status !== 201) return this.$message.error(meta.msg);
          this.$message.success(meta.msg);
          this.dialogvisible = false; //关闭对话框 在数据获取完之后关闭
          this.$emit("addUser"); //通知父组件重新刷新获取数据
        } else {
          // 前端验证不通过直接点击提交按钮触发此逻辑
          this.$message.error("验证提交失败");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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
