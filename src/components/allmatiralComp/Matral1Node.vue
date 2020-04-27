<template>
  <el-card class="marral-node-card">
    <el-form
      :model="dynamicValidateForm"
      ref="dynamicValidateForm"
      label-width="180px"
      class="demo-dynamic"
      label-position="left"
    >
      <el-form-item
        prop="leixing"
        label="反应类型"
        :rules="[
          { required: true, message: '请输入反应类型', trigger: 'blur' }
        ]"
      >
        <el-select
          v-model="dynamicValidateForm.leixing"
          placeholder="请选择反应类型"
        >
          <el-option label="化合反应" value="化合反应"></el-option>
          <el-option label="分解反应" value="分解反应"></el-option>
          <el-option label="中和反应" value="中和反应"></el-option>
          <el-option label="置换反应" value="置换反应"></el-option>
          <el-option label="复分解反应" value="复分解反应"></el-option>
          <el-option label="其他反应" value="其他反应"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item
        label="反应条件"
      >
        <el-input v-model="dynamicValidateForm.condition"></el-input>
      </el-form-item>
      <!-- 反应物 -->
      <el-form-item
        v-for="(left, index) in dynamicValidateForm.lefts"
        :label="'反应物' + (index + 1) + '化学式及个数'"
        :key="left.key"
        :prop="'lefts.' + index + '.value'"
        :rules="{
          required: true,
          message: `反应物${index + 1}或个数不能为空，空格分割`,
          trigger: 'blur'
        }"
      >
        <el-input
          v-model="left.value"
          style="display:inline-block;width:60%;margin-right: 20px;"
        ></el-input
        ><el-button @click.prevent="remove(left, left.sign)" type="danger" plain
          >删除</el-button
        >
      </el-form-item>
      <!-- 生成物 -->
      <el-form-item
        v-for="(right, index) in dynamicValidateForm.rights"
        :label="'生成物' + (index + 1) + '化学式及个数'"
        :key="right.key"
        :prop="'rights.' + index + '.value'"
        :rules="{
          required: true,
          message: `生成物${index + 1}或个数不能为空，英文空格分割`,
          trigger: 'blur'
        }"
      >
        <el-input
          v-model="right.value"
          style="display:inline-block;width:60%;margin-right: 20px;"
        ></el-input
        ><el-button
          type="danger"
          plain
          @click.prevent="remove(right, right.sign)"
          >删除</el-button
        >
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('dynamicValidateForm')"
          >添加化学方程节点</el-button
        >
        <el-button type="primary" plain @click="add('lefts')"
          >新增反应物</el-button
        >
        <el-button type="primary" plain @click="add('rights')"
          >新增生成物</el-button
        >
        <el-button
          type="primary"
          plain
          @click="resetForm('dynamicValidateForm')"
          >重置</el-button
        >
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Matral1Node",
  props: {},
  data() {
    return {
      dynamicValidateForm: {
        lefts: [
          {
            value: "",
            sign: "lefts"
          }
        ],
        rights: [
          {
            value: "",
            sign: "rights"
          }
        ],
        leixing: "",
        condition: ""
      },
      isFull: false
    };
  },
  methods: {
    // *******************************网络请求*******************************
    // *******************************逻辑处理*******************************
    ...mapMutations({
      saveFangChengId: "saveFangChengId"
    }),
    //
    checkIsFull() {
      this.$refs["dynamicValidateForm"].validate(valid => {
        if (valid) {
          this.isFull = true;
        }
      });
      return this.isFull;
    },
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          // 发送网络请求
          const data = await this.$http.post(
            "/neo4j/create/fcs",
            this.dynamicValidateForm
          );
          this.saveFangChengId({ fangchengId: data.id });
          // 改变值
          this.$emit("changeValue", "1");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    remove(item, sign) {
      var index = this.dynamicValidateForm[sign].indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm[sign].splice(index, 1);
      }
    },
    add(sign) {
      // console.log(this.dynamicValidateForm[sign]);
      if (sign == "lefts" && this.dynamicValidateForm[sign].length >= 2)
        return this.$message.warning("反应物种类最多只有2个");
      if (sign == "rights" && this.dynamicValidateForm[sign].length >= 3)
        return this.$message.warning("生成物种类最多只有3个");
      this.dynamicValidateForm[sign].push({
        value: "",
        key: Date.now(),
        sign: sign
      });
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
.marral-node-card {
  // margin-top: 20px;
  width: 80%;
}
</style>
