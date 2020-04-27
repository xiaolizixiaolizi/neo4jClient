<template>
  <el-card class="tree-card">
    <el-container style="height: 500px;">
      <el-aside width="200px" class="aside-tree">
        <el-tree
          :data="dataTree"
          node-key="id"
          ref="tree"
          accordion
          highlight-current
          :props="defaultProps"
          @current-change="handleChange"
          :default-expanded-keys="[100, 101,102]"
          
        >
          <span class="custom-tree-node" slot-scope="{ node }">
            <el-badge :value="node.label | textFormat" class="item">
              <span style="font-size:14px">{{ node.label | valueFormat }}</span>
            </el-badge>
          </span>
        </el-tree>
      </el-aside>

      <el-main>
        <el-form
          v-if="type == '元素'"
          :model="currenrData"
          label-width="100px"
          style="width:350px;"
          
        >
          <el-form-item label="元素名称" >
            <el-input v-model="currenrData['name']"></el-input>
          </el-form-item>
          <el-form-item label="元素符号" >
            <el-input v-model="currenrData['元素符号']"></el-input>
          </el-form-item>
          <el-form-item label="原子序数" >
            <el-input v-model="currenrData['原子序数']"></el-input>
          </el-form-item>
          <el-form-item label="相对原子质量" >
            <el-input v-model="currenrData['相对原子质量']"></el-input>
          </el-form-item>
        </el-form>
        <el-form
          v-if="type == '离子'"
          :model="currenrData"
          label-width="100px"
          style="width:350px;"
          
        >
          <el-form-item label="离子名称" >
            <el-input v-model="currenrData['name']"></el-input>
          </el-form-item>
          <el-form-item label="离子符号" >
            <el-input v-model="currenrData['离子符号']"></el-input>
          </el-form-item>
          <el-form-item label="颜色" >
            <el-input v-model="currenrData['颜色']"></el-input>
          </el-form-item>
          <el-form-item label="类型" >
            <el-input v-model="currenrData['type']"></el-input>
          </el-form-item>
        </el-form>
        <el-form
          v-if="type == '化学式'"
          :model="currenrData"
          label-width="100px"
          style="width:350px;"
        >
          <el-form-item label="中文名" >
            <el-input v-model="currenrData['name']"></el-input>
          </el-form-item>
          <el-form-item label="化学式" >
            <el-input v-model="currenrData['化学式']"></el-input>
          </el-form-item>
          <el-form-item label="颜色" >
            <el-input v-model="currenrData['颜色']"></el-input>
          </el-form-item>
          <el-form-item label="物质类型" >
            <el-input v-model="currenrData['物质类型']"></el-input>
          </el-form-item>
          <el-form-item label="水溶液状态" >
            <el-input v-model="currenrData['水溶液状态']"></el-input>
          </el-form-item>
          <el-form-item label="用途">
            <el-input
              v-model="currenrData['hxUsed']"
              type="textarea"
              :rows="4"
            ></el-input>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </el-card>
</template>

<script>
import treeData from "common/treeData.js";
export default {
  name: "Tree",
  components: {},
  data() {
    return {
      dataTree: treeData,
      defaultProps: {
        children: "children",
        label: "label"
      },
      type: "",
      currenrData: {}
    };
  },
  methods: {
    // *******************************网络请求*******************************
    async fetchTreeData() {
      const res = await this.$http.get("/neo4j/tree");
      console.log("res: ", res);
      this.dataTree = res;
    },
    // *******************************逻辑处*******************************
    handleChange(data, node) {
      // console.log('data: ', data);
      
      if (
        node &&
        node.parent &&
        node.parent.parent &&
        node.parent.parent.data
      ) {
        this.type = node.parent.parent.data.label;
      }
      // console.log("data", data);

      if (!data.children) {
        this.currenrData = data;
      }
    }
  },
  computed: {},
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    // this.fetchTreeData();
  },
  filters: {
    // 控制上标
    textFormat(value) {
      if (!value.includes("_")) return "";
      let list = value.split("_");
      return value.split("_")[1].replace("1", "");
    },
    //控制文本
    valueFormat(value) {
      if (!value.includes("_")) return value;
      return value.split("_")[0];
    }
  }
};
</script>

<style>
.el-badge__content {
  background-color: #fff;
  color: #606266;
}
.el-badge__content.is-fixed {
  right: 0px;
}
</style>
<style lang="less" scoped>
.tree-card {
  margin-top: 20px;
  .aside-tree {
    box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.15);
  }
}
</style>
