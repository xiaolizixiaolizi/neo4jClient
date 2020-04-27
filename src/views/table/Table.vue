<template>
  <el-card class="table-card">
    <el-row>
      <el-col :span="8">
        <el-input
          placeholder="请输入化学式忽略大小写"
          v-model="searchKeyWord"
          class="input-with-select"
          clearable
          @clear="handleClear"
          @input="handleInput"
        >
          <el-button
            slot="append"
            icon="el-icon-search"
            @click="handleSearch"
          ></el-button>
        </el-input>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      border
      stripe
      height="300"
      class="hx-table"
      style="width:100%"
      :default-sort="{ prop: 'hxShi', order: 'descending' }"
    >
      <el-table-column type="index" label="#"></el-table-column>
      <el-table-column
        prop="hxShi"
        label="化学式"
        sortable
        align="center"
      ></el-table-column>
      <el-table-column
        prop="hxName"
        label="中文名"
        sortable
        align="center"
      ></el-table-column>
      <el-table-column
        prop="hxSucheng"
        sortable
        label="俗称"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="hxLook"
        sortable
        label="外观和状态"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="hxShui"
        sortable
        label="水溶性"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="hxUsed"
        sortable
        label="用途"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="hxTag"
        label="标签"
        width="80"
        :filters="tags"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag :type="scope.row.hxTag | formatType">{{
            scope.row.hxTag
          }}</el-tag>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="100">
    </el-pagination>
  </el-card>
</template>

<script>
export default {
  name: "Table",
  components: {},
  data() {
    return {
      tableData: [],
      tempTableData: [],
      searchKeyWord: "",
      tags: [
        { text: "单质", value: "单质" },
        { text: "氧化物", value: "氧化物" },
        { text: "酸", value: "酸" },
        { text: "碱", value: "碱" },
        { text: "盐", value: "盐" }
      ]
    };
  },
  methods: {
    // *******************************网络请求*******************************
    async fetchData() {
      const res = await this.$http.get("/neo4j/hxTable");
      this.tableData = res;
      this.tempTableData = res;
      // console.log("res: ", this.tableData);
    },
    // *******************************逻辑处*******************************
    filterTag(value, row) {
      return row.hxTag === value;
    },
    handleSearch() {
      if (this.searchKeyWord == "")
        return this.$message.info("搜索内容不能为空");
      this.tableData = this.tempTableData;
      this.tableData = this.tableData.filter(e =>
        e.hxShi.toLowerCase().includes(this.searchKeyWord.toLowerCase())
      );
    },
    handleClear() {
      this.tableData = this.tempTableData;
    },
    handleInput() {
      if (this.searchKeyWord == "") {
        this.tableData = this.tempTableData;
      }
    }
  },
  computed: {},
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.fetchData();
  },
  filters: {
    formatType(value) {
      const tags = [
        { text: "单质", type: "" },
        { text: "氧化物", type: "success" },
        { text: "酸", type: "info" },
        { text: "碱", type: "warning" },
        { text: "盐", type: "danger" }
      ];
      return tags.find(e => e.text == value).type;
    }
  }
};
</script>
<style lang="less" scoped>
.table-card {
  margin-top: 20px;
  .hx-table {
    margin: 20px 0;
  }
}
</style>
