<template>
  <el-card>
    <el-row :gutter="80">
      <el-col :span="8">
        <el-input
          placeholder="请输入搜索内容"
          v-model="searchInput"
          clearable
          @clear="fetchUsers"
        >
          <el-button
            slot="append"
            icon="el-icon-search"
            @click="filterUser"
          ></el-button>
        </el-input>
      </el-col>
      <el-col :span="6">
        <user-add @addUser="fetchUsers"></user-add>
      </el-col>
    </el-row>
    <!-- table区域 -->
    <el-table
      v-if="usersList.length !== 0"
      :data="usersList"
      style="width: 100%;margin-top:20px;"
      stripe
      border
      height="250px"
    >
      <el-table-column type="index" width="50" align="center" label="#">
      </el-table-column>
      <el-table-column
        v-for="(item, index) in tableLabel"
        :key="index"
        :prop="index"
        :label="item"
        align="center"
        width="150px"
      >
      </el-table-column>
      <el-table-column prop="mg_state" label="状态" align="center">
        <template slot-scope="scope">
          <el-switch
            style="display:block"
            v-model="scope.row.mg_state"
            active-text="true"
            inactive-text="false"
            @change="handleSwitchChange(scope.row)"
          >
          </el-switch>
        </template>
      </el-table-column>

      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button-group>
            <el-tooltip
              v-for="(item, index) in buttonLabel"
              :key="index"
              class="item"
              effect="dark"
              :content="item.content"
              placement="top"
              :enterable="false"
            >
              <el-button
                :type="item.type"
                :icon="`el-icon-${item.icon}`"
                size="small"
                @click="handleClick(scope.row, item.fn)"
              ></el-button>
            </el-tooltip>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination background layout="prev, pager, next" :total="50">
    </el-pagination>
    <!-- 对话框 -->
    <!-- <user-add :dialogvisible="dialogVisible"></user-add> -->
    <!-- 编辑对话框 -->
    <user-edit
      :currentuser="currentuser"
      :editvisible="editDialogVisible"
      @changeEditVisable="changeEditVisable"
      @fetchData="fetchUsers"
    ></user-edit>
    <!-- 设置user角色 -->
    <set-role
      :currentuser="currentuser"
      :setvisible="setDialogVisible"
      @changetRoleVisable="changetRoleVisable"
      @refresh="fetchUsers"
    ></set-role>
  </el-card>
</template>

<script>
import UserAdd from "./UserAdd";
import UserEdit from "./UserEdit";
import SetRole from "./UserSetRole";
import validate from "common/validate";

export default {
  name: "UsersTable",
  components: {
    UserAdd,
    UserEdit,
    SetRole
  },
  data() {
    const { checkEmail, checkPhone } = validate;
    return {
      searchInput: "",
      dialogVisible: false, //隐藏看不见
      queryInfo: {
        pagenum: 1,
        pagesize: 50
      },
      usersList: [],
      tableLabel: {
        username: "姓名",
        mobile: "电话",
        email: "邮箱",
        role_name: "角色"
      },
      buttonLabel: [
        { type: "primary", icon: "edit", fn: "handleEdit", content: "编辑" },
        { type: "danger", icon: "delete", fn: "handleDelete", content: "删除" },
        {
          type: "warning",
          icon: "setting",
          fn: "handleSetRole",
          content: "分配角色"
        }
      ],
      currentuser: {},
      editDialogVisible: false,
      deleteDialogVisible: false,
      setDialogVisible: false
    };
  },
  methods: {
    // *******************************网络请求*******************************
    async fetchUsers(pagenum, pagesize) {
      const { data, meta } = await this.$http.get("users", {
        params: {
          pagenum: this.queryInfo.pagenum,
          pagesize: this.queryInfo.pagesize
        }
      });
      if (meta.status !== 200) return this.$message.error(meta.msg);
      this.usersList = data.users;
    },
    // *******************************逻辑处理*******************************
    async handleSwitchChange(user) {
      // users/:uId/state/:type修改用户状态 把状态同步到数据库中
      const { data, meta } = await this.$http.put(
        `users/${user.id}/state/${user.mg_state}`
      );
      if (meta.status !== 200) {
        // 页面更新状态成功，后台数据库更新状态失败
        user.mg_state = !user.mg_state;
        return this.$message.error("状态修改失败");
      }
      this.$message.success("状态修改成功");
    },
    // 搜索功能
    filterUser() {
      if (this.searchInput == "") return this.fetchUsers();
      this.usersList = this.usersList.filter(e =>
        e.username.includes(this.searchInput)
      );
    },

    handleClick(rowData, callback) {
      this[callback](rowData);
    },
    // 修改邮箱或者手机号 用户名只读
    async handleEdit(rowData) {
      // 根据id获取当前用户
      const { data, meta } = await this.$http.get(`users/${rowData.id}`);
      if (meta.status !== 200) return this.$message.error(meta.msg);
      // 这里有个大坑，不要this.editForm =rowData。重新发起一次新的请求
      this.currentuser = data;
      this.editDialogVisible = true;
    },
    // 删除用户
    async handleDelete(rowData) {
      let res = await this.$confirm(
        "此操作将永久删除该文件, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }
      ).catch(err => err);
      if (res == "cancel") return this.$message.info("取消删除用户操作");
      // 删除操作 删除有可能成功有可能失败
      const { data, meta } = await this.$http.delete(`users/${rowData.id}`);
      if (meta.status !== 200) return this.$message.error(meta.msg);
      this.$message.success("删除用户操作成功");
      this.fetchUsers(); //强制刷新
    },
    // handleSetRole没有重新发起请求的原因是this.$http.get(`users/${rowData.id}`)返回字段没有role_name
    async handleSetRole(rowData) {
      this.currentuser = rowData;
      this.setDialogVisible = true;
    },
    changeEditVisable(flag) {
      this.editDialogVisible = flag;
    },
    changetRoleVisable() {
      this.setDialogVisible = false;
    }
  },
  computed: {},
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.fetchUsers();
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  updated() {}, //生命周期 - 更新之后
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less" scoped>
.el-card {
  margin-top: 20px;

  .el-table {
    margin-bottom: 20px;
    button {
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
