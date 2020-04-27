<template>
  <el-row type="flex" justify="center">
    <el-col :span="8">
      <el-form
        :model="loginForm"
        status-icon
        :rules="rules"
        ref="loginForm"
        label-width="80px"
        class="loginForm"
      >
        <el-form-item label="学号" prop="stu_id">
          <el-input
            prefix-icon="el-icon-user"
            v-model="loginForm.stu_id"
            maxlength="6"
            show-word-limit
            placeholder="请输入6位学号"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            prefix-icon="el-icon-lock"
            v-model="loginForm.password"
            placeholder="请输入密码"
            type="password"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')"
            >登录</el-button
          >
          <el-button @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
      <div class="tiparea">
        <p>
          还没有账号？现在
          <a href="javascript:;" @click.prevent="goReg">注册</a>
        </p>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import validate from "common/validate.js"
const { checkPassword, checkStuId } = validate
import jwt_decode from "jwt-decode"
import { mapMutations } from "vuex"
export default {
  name: "Login",
  components: {},
  data() {
    let validatepassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"))
      } else {
        if (this.loginForm.checkpassword !== "") {
          this.$refs.loginForm.validateField("checkpassword")
        }
        callback()
      }
    }
    let validateStuId = checkStuId //验证学号
    return {
      loginForm: {
        stu_id: "170324",
        password: "170324"
      },
      rules: {
        stu_id: [
          { required: true, message: "学号不能为空", trigger: "blur" },
          { require: true, validator: validateStuId, trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { require: true, validator: validatepassword, trigger: "blur" }
        ]
      }
    }
  },
  methods: {
    // *******************************网络请求*******************************
    // *******************************逻辑处理*******************************
    ...mapMutations({
      saveUser: "saveUser"
    }),
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        //
        if (!valid) return this.$message.error("验证不通过，提交失败")
        try {
          // 发送后台请求
          let { token } = await this.$http.post("/users/login", this.loginForm)
          console.log("res: ", token)
          //1弹窗 2保存token 3解析token存入store 4跳转页面home
          this.$message.success("用户登录成功")
          localStorage.setItem("token", token)
          const user = jwt_decode(token)
          this.saveUser({ user: user })
          this.$router.push({ name: "home" })
        } catch (error) {
          this.$message.error(error.message)
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    goReg() {
      this.$router.push({ name: "register" })
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
}
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
      margin: 50px 50px 0 0;
      .el-form-item {
        &:last-child {
          display: flex;
          flex-flow: row nowrap;
          justify-content: flex-end;
        }
      }
    }
    .tiparea {
      margin: 0 50px 30px 0;
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
</style>
