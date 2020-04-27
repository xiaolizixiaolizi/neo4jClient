<template>
  <el-card class="goucheng-card">
    <el-row :gutter="20">
      <el-col :span="5">
        <el-select
          v-model="searchWord"
          placeholder="请选择化学式知识实体"
          style="width:100%"
        >
          <el-option-group
            v-for="group in options"
            :key="group.label"
            :label="group.label"
          >
            <el-option
              v-for="item in group.options"
              :key="item"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-option-group>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-button icon="el-icon-search" type="primary" @click="handle"
          >查询</el-button
        ></el-col>

    </el-row>
   

    <zu-cheng-graph
      :graph-data="graphData"
      :graph-props="graphProps"
    ></zu-cheng-graph>
  </el-card>
</template>

<script>
import wuzhi from "common/wuzhi";
import ZuChengGraph from "components/graph/ZuChengGraph";
export default {
  name: "GouCheng",
  components: { ZuChengGraph },
  data() {
    return {
      graphData: {},
      graphProps: {
        symbolSize: 40,
        force: {
          edgeLength: 150,
          repulsion: 200,
          gravity: 0.04
        }
      },
      options: wuzhi,
      searchWord: ""
    };
  },
  methods: {
    // *******************************网络请求*******************************
    // *******************************逻辑处*******************************
    async handle() {
      if (this.searchWord == "") return this.$message.info("请先选择物质");
      let data = await this.$http.get(`/neo4j/goucheng/${this.searchWord}`);
      // console.log(data);

      //处理单质
      if (
        [1, 2].includes(this.searchWord.trim().length) ||
        this.searchWord.trim() == "Cl2"
      )
        return this.handleDanZhi(data);
      //处理离子团
      let liziTuan = ["CO3", "SO4", "OH", "NO3", "ClO3", "MnO4", "SO3", "HCO3"];
      if (liziTuan.some(e => this.searchWord.includes(e)))
        return this.handleLiZiTuan(data);

      //默认处理后台返回的数据
      this.graphData = data;
    },
    //处理单质数据
    handleDanZhi(data) {
      var reg = /(\d+)$/g;
      let value = reg.test(this.searchWord.trim())
        ? this.searchWord.slice(0, 1)
        : this.searchWord;
      // 求组成个数
      let count = !isNaN(this.searchWord.slice(-1))
        ? this.searchWord.slice(-1)
        : 1;
      if (this.searchWord.trim() == "Cl2") {
        value = "Cl";
        count = 2;
      }

      data.nodes[0] = {
        //化学式
        id: "100",
        label: "化学式",
        name: this.searchWord,
        名称: this.searchWord,
        物质类型: "单质",
        化学式: this.searchWord
      };
      data.nodes[1] = {
        //原子
        id: "200",
        label: "元素",
        元素名称: value,
        name: value,
        元素符号: value,
        category: 2
      };
      data.links[0] = {
        source: "200",
        target: "100",
        type: "化学式的构成成分",
        id: 300,
        化学式的构成成分个数: count
      };
      this.graphData = data;
    },

    //处理离子团
    handleLiZiTuan(data) {
      console.log('data: ', data);
      const id = data.nodes.find(e => e.label == "化学式").id;

      let liziInfo = [
        { fuhao: "CO3", name: "碳酸根离子" },
        { fuhao: "SO4", name: "硫酸酸根离子" },
        { fuhao: "OH", name: "氢氧根离子" },
        { fuhao: "NO3", name: "硝酸根离子" },
        { fuhao: "ClO3", name: "氯酸跟根离子" },
        { fuhao: "MnO4", name: "高锰酸根离子" },
        { fuhao: "SO3", name: "亚硫酸根离子" },
        { fuhao: "HCO3", name: "碳酸氢根离子" }
      ];
      let obj = liziInfo.find(e => this.searchWord.includes(e.fuhao));
      let lizituan = {
        id: "-1",
        label: "离子",
        name: obj.name,
        离子名称: obj.name,
        category: 1
      };
      // 特殊处理碳酸氢根离子 因为碳酸氢根离子与碳酸根离子冲突
      if(this.searchWord.includes('HCO3')){
        lizituan.name="碳酸氢根离子"
        lizituan['离子名称']='碳酸氢根离子'
      }
      data.nodes.push(lizituan);
      // 拼关系
      // 找出当前data中的化学式id
      // 找离子团个数
      let count = this.searchWord.includes("(") ? this.searchWord.slice(-1) : 1;
      let link = {
        source: lizituan.id,
        target: id,
        type: "化学式的构成成分",
        化学式的构成成分个数: count
      };
      data.links.push(link)
      this.graphData = data;
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
.goucheng-card {
  margin-top: 20px;
}
</style>
