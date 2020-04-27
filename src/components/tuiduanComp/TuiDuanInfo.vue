<template>

    <el-row :gutter="20" style="margin-bottom:10px">
      <el-col :span="3">
        <el-input :placeholder="label" :disabled="true"> </el-input>
      </el-col>
      <el-col :span="5">
        <el-select v-model="wuzhiValue" multiple  placeholder="化学式知识实体(可选)">
          <el-option-group
            v-for="group in wuzhi"
            :key="group.label"
            :label="group.label"
          >
            <el-option
              v-for="item in group.options"
              :key="item.value"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-option-group>
        </el-select>
        
      </el-col>

      <el-col :span="5">
        <el-select v-model="colorValue" placeholder="颜色(可选)">
          <el-option
            v-for="item in colorOptions"
            :key="item"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="5">
        <el-select v-model="statusValue" placeholder="状态(可选)">
          <el-option
            v-for="item in status"
            :key="item"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="5">
        <el-select v-model="yuansuValue" placeholder="包含何种元素(可选)">
          <el-option
            v-for="item in yuansuOptions"
            :key="item"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </el-col>
    </el-row>

</template>

<script>
import wuzhi from "common/wuzhi.js";
export default {
  props: {
    label: {
      type: String
    }
  },
  name: "TuiDuanInfo",
  components: {},
  data() {
    return {
      wuzhi: wuzhi,
      wuzhiValue: [],//多选默认是空数组
      colorOptions: [
        "白色",
        "黑色",
        "黄绿色",
        "红色",
        "无色",
        "蓝色",
        "黄色",
        "绿色",
        "紫色"
      ],
      colorValue: "",
      status: ["气体", "液体", "固体", "沉淀"],
      statusValue: "",
      yuansuOptions: [
        "H",
        "C",
        "N",
        "O",
        "Na",
        "Mg",
        "Al",
        "P",
        "S",
        "Cl",
        "K",
        "Ca",
        "Fe",
        "Cu",
        "Zn",
        "Ag",
        "Hg",
        "Ba"
      ],
      yuansuValue: "",
     
    };
  },
  methods: {
    // *******************************网络请求*******************************
    // *******************************逻辑处理*******************************
  },
  computed: {
    currentInfo() {
       return  {
        label: this.label,
        wuzhi: this.wuzhiValue,
        color: this.colorValue,
        status:this.statusValue,
        yuansu: this.yuansuValue
      };

    }
  },
  watch: {
   currentInfo:{
     handler(val){
       this.$emit('sendMessage',val)
     }
   },
  
  
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
