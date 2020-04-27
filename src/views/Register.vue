<template>
  <el-row type="flex" justify="center">
    <el-col :span="8">
      <el-form
        :model="registerUser"
        status-icon
        :rules="rules"
        ref="registerUser"
        label-width="80px"
        class="registerUser"
      >
        <el-form-item label="学号" prop="stu_id">
          <el-input
            v-model="registerUser.stu_id"
            maxlength="6"
            show-word-limit
            placeholder="请输入6位学号"
          ></el-input>
        </el-form-item>

        <el-form-item label="姓名" prop="name">
          <el-input
            v-model="registerUser.name"
            placeholder="请输入姓名"
          ></el-input>
        </el-form-item>

        <el-form-item label="性别">
          <el-radio-group v-model="registerUser.gender">
            <el-radio label="male">男</el-radio>
            <el-radio label="female">女</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input
            v-model="registerUser.password"
            placeholder="请输入密码"
            type="password"
          ></el-input>
        </el-form-item>

        <el-form-item label="确认密码" prop="password2">
          <el-input
            v-model="registerUser.password2"
            placeholder="请确认密码"
            type="password"
          ></el-input>
        </el-form-item>

        <el-form-item class="el-form-item-button">
          <el-button type="primary" @click="submitForm('registerUser')"
            >注册</el-button
          >
          <el-button @click="resetForm('registerUser')">重置</el-button>
        </el-form-item>
        <div class="tiparea">
          <p>
            已有账号？现在
            <a href="javascript:;" @click.prevent="goLogin">登录</a>
          </p>
        </div>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import validate from "common/validate.js";
const { checkPassword, checkStuId } = validate;
export default {
  name: "Login",
  components: {},
  data() {
    let validatepassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.loginForm.checkpassword !== "") {
          this.$refs.loginForm.validateField("checkpassword");
        }
        callback();
      }
    };
    let validatePass2 = (rule, value, callback) => {
      if (value !== this.registerUser.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    let validateStuId = checkStuId; //验证学号
    let validatePassword = checkPassword; //验证第一次输入密码
    return {
      registerUser: {
        stu_id: "",
        name: "",
        gender: "male",
        password: "",
        password2: ""
      },
      rules: {
        stu_id: [
          { required: true, message: "学号不能为空", trigger: "blur" },
          { validator: validateStuId, trigger: "blur" }
        ],
        name: [
          { required: true, message: "姓名不能为空", trigger: "blur" },
          { min: 2, max: 20, message: "长度在 2 到 20 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { validator: validatePassword, trigger: "blur" }
        ],
        password2: [
          { required: true, message: "确认密码不能为空", trigger: "blur" },
          { validator: validatePass2, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    // *******************************网络请求*******************************
    // *******************************逻辑处理*******************************
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        //
        if (!valid) return this.$message.error("验证不通过，提交失败");
        // 发送后台请求
        try {
          let res = await this.$http.post("users", this.registerUser);
          this.$message.success("注册成功");
          this.goLogin(); //注册就要登录， 不登陆哪来的token.
        } catch (error) {
          this.$message.error(error.message);
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    goLogin() {
      this.$router.push({ name: "login" });
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
.el-row {
  height: 100%;
  background: url("~assets/images/backgic1.png");
  background-size: 100%;
  align-items: center;
  .el-col {
    border-radius: 7px;
    background: #fff;
    box-shadow: 0 3px 9px rgba(0, 0, 0, 0.6);
    .el-form {
      margin: 30px 50px 0 0;
      .el-form-item-button {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-end;
      }
      .tiparea {
        margin-bottom: 30px;
        p {
          text-align: right;
          font-size: 12px;
          a {
            color: #409eff;
          }
        }
      }
    }
  }
}
</style>
