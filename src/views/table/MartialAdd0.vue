<template>
  <el-card class="martrail0-add-card">
    <el-alert title="添加化学式知识实体" type="info" show-icon center>
    </el-alert>
    <el-card style="width:500px;margin:20px auto">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        label-position="left"
      >
        <el-form-item label="化学式" prop="huaxueshi">
          <el-input
            v-model="ruleForm.huaxueshi"
            placeholder="形如Ca(OH)2格式"
          ></el-input>
        </el-form-item>
        <el-form-item label="中文名字" prop="zhongwenming">
          <el-input
            v-model.lazy="ruleForm.zhongwenming"
            @change="handleChange"
          ></el-input>
        </el-form-item>
        <el-form-item label="物质类型" prop="type">
          <el-select v-model="ruleForm.type" placeholder="请选择物质类型">
            <el-option label="单质" value="单质"></el-option>
            <el-option label="氧化物" value="氧化物"></el-option>
            <el-option label="酸" value="酸"></el-option>
            <el-option label="碱" value="碱"></el-option>
            <el-option label="盐" value="盐"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="颜色" prop="color">
          <el-input
            v-model="ruleForm.color"
            placeholder="若为无色,请输入无"
          ></el-input>
        </el-form-item>
        <el-form-item label="水溶液状态" prop="status">
          <el-radio-group v-model="ruleForm.status">
            <el-radio label="气体"></el-radio>
            <el-radio label="液体"></el-radio>
            <el-radio label="固体"></el-radio>
            <el-radio label="沉淀"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="生活用途">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >添加化学式实体</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </el-card>
</template>

<script>
import validate from "common/validate.js";
const { checkHXS, checkZWM } = validate;
export default {
  name: "MartialAdd0",
  inject: ["reload"],
  components: {},
  data() {
    let validateHXS = checkHXS; //大坑 绝对不能同名  let checkHXS = checkHXS
    let validateZWM = checkZWM;
    return {
      ruleForm: {
        huaxueshi: "",
        zhongwenming: "",
        type: "",
        color: "",
        status: "",
        desc: ""
      },
      rules: {
        huaxueshi: [
          { required: true, message: "请输入化学式", trigger: "blur" },
          { validator: validateHXS, trigger: "blur" }
        ],
        zhongwenming: [
          { required: true, message: "请输入中文名", trigger: "blur" },
          { validator: validateZWM, trigger: "blur" }
        ],
        color: [{ required: true, message: "请输入颜色", trigger: "blur" }],
        status: [
          { required: true, message: "请输入水溶液状态", trigger: "change" }
        ],
        type: [{ required: true, message: "请选择物质类型", trigger: "change" }]
      },
      data: []
    };
  },
  methods: {
    // *******************************网络请求*******************************
    // *******************************逻辑处理*******************************
    // 中文名改变change事件仅在输入框失去焦点或用户按下回车时触发
    async handleChange(val) {
      const reg = /^[\u4e00-\u9fa5]+$/; //匹配中文
      if (!reg.test(val)) return;
      this.data = await this.$http.get("/neo4j/findall/name");
      if (this.data.includes(val))
        return this.$message({
          type: "error",
          message: `${val}在知识图谱中已经存在，请重新填写`,
          duration: 4000,
          onClose: () => {
            // 重置表单强制刷新当前页面
           this.reflesh();
          }
        });
    },
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          // 一个添加节点的网络请求，
          const data = await this.$http.post("/neo4j", this.ruleForm);
          this.$message.success("添加化学式知识实体成功");
          // 用vue-router重新路由到当前页面，页面是不进行刷新的加一个参数
           this.$router.push({name:'quanmao'})
        } else {
          this.$message.warning("请先完善表单信息");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.ruleForm.desc = "";
    },
    reflesh() {
      this.reload();
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
.martrail0-add-card {
  margin-top: 20px;
}
</style>
