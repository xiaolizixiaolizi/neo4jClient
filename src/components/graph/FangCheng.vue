<template>
  <el-card class="fangcheng-card">
    <div slot="header" class="clearfix">
      <span class="title">化学方程式</span>
    </div>
    <ul>
      <li
        v-for="(item, index) in compoutedNode"
        :key="index"
        style="margin-bottom:5px;border-bottom:1px solid #ccc;"
        :class="['common', { active: item.isActive }]"
      >
        {{ item | fangchengFormat }}
      </li>
    </ul>
  </el-card>
</template>

<script>
export default {
  name: "FangCheng",
  components: {},
  props: {
    graphData: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    // *******************************网络请求*******************************
    // *******************************逻辑处*******************************
    // 传入化学方程节点的idLIST
    activeAction(idList) {
      this.graphData.nodes.forEach(obj => {
        //再次点击之前，要把上一次的激活类取消。
        obj.isActive=false;
        if(idList.includes(obj.id)){
          obj.isActive=true
          // console.log(obj);
          
        }
      });
    }
  },
  computed: {
    compoutedNode() {
      if (this.graphData && this.graphData.nodes) {
        let data= this.graphData.nodes.filter(e => e.label == "化学方程")     
        // console.log(data);
        return data
      }
    }
  },
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）

  filters: {
    fangchengFormat(value) {
      // console.log("value: ", value);
      let conditon = value["反应条件"] == "无" ? "" : `(${value["反应条件"]})`;
      let str0 = value["反应物1个数"] == "1" ? "" : "" + value["反应物1个数"];
      let str00 = value["生成物1个数"] == "1" ? "" : "" + value["生成物1个数"];

      let str = value["反应物2个数"] == "无" ? "" : "+" + value["反应物2个数"];
      if (str == "+1") str = "+";
      let strValue = value["反应物2"] == "无" ? "" : value["反应物2"];

      let str1 = value["生成物2个数"] == "无" ? "" : "+" + value["生成物2个数"];
      if (str1 == "+1") str1 = "+";
      let strValue1 = value["生成物2"] == "无" ? "" : value["生成物2"];

      let str2 = value["生成物3个数"] == "无" ? "" : "+" + value["生成物3个数"];
      if (str2 == "+1") str2 = "+";
      let strValue2 = value["生成物3"] == "无" ? "" : value["生成物3"];

      return `${str0}${value["反应物1"]} ${str}${strValue} ——>${conditon}   ${str00}${value["生成物1"]} ${str1}${strValue1} ${str2}${strValue2}`;
    }
  }
};
</script>
<style lang="less" scoped>
.fangcheng-card {
  .title {
    font-size: 15px;
    font-weight: 700;
  }
  .common {
    font-size: 13px;
  }
  .active {
    color: #F56C6C;
    // font-weight: 700;
    // font-size: 16px;
  }
}
</style>
