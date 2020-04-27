<template>
  <el-container>
    <el-header>
      <img src="~assets/images/huodong_active.png" />
      <h2 class="title">初中化学知识图谱在线查询系统</h2>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          {{ user.name }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="userInfo">
            <i class="el-icon-user-solid"></i>个人信息
          </el-dropdown-item>
          <el-dropdown-item divided command="logout">
            <i class="el-icon-switch-button"></i>退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-container>
      <el-aside :width="asideWidth" ref="homeAside">
        <el-button @click="toggleClick">
          <i :class="[isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold']"></i>
        </el-button>
        <home-aside :iscollapse="isCollapse"></home-aside>
      </el-aside>
      <!-- 嵌套路由 -->
      <el-main :class="[isShowPadding ? 'active-padding' : '']">
        <bread-crumb v-if="isShowBreadCrumb"></bread-crumb>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import HomeAside from "components/homeComp/HomeAside";
import BreadCrumb from "components/homeComp/Breadcrumb";
import { mapState, mapMutations } from "vuex";
export default {
  name: "Home",
  components: {
    HomeAside,
    BreadCrumb
  },
  data() {
    return {
      isCollapse: false,
      asideWidth: "220px"
    };
  },
  methods: {
    // *******************************网络请求*******************************

    // *******************************逻辑处理*******************************
    ...mapMutations({
      saveUser: "saveUser"
    }),
    handleCommand(command) {
      if (command == "userInfo") return this.goUserInfo();
      if (command == "logout") return this.logout();
    },
    goUserInfo() {
      this.$router.push({ name: "users" });
    },

    logout() {
      this.$confirm("您确定要退出吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message.success("退出成功");
          localStorage.removeItem("token"); //清除用户token
          this.saveUser({ user: {} });// //清除vuex用户信息
          this.$router.push({ name: "login" });
        })
        .catch(() => {
          this.$message.info("已取消退出操作");
        });
    },
    toggleClick() {
      this.isCollapse = !this.isCollapse;
      this.asideWidth = this.isCollapse === true ? "70px" : "220px";
    }
  },
  computed: {
    ...mapState({
      user: "user"
    }),
    isShowBreadCrumb() {
      return this.$route.path !== "/welcome" ? true : false;
    },
    isShowPadding() {
      return this.$route.path == "/welcome" ? true : false;
    }
  },

  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  updated() {}, //生命周期 - 更新之后
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less" scoped>
.el-container {
  height: 100%;
  .el-header {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    background-color: #222d32;
    padding: 0;
    img {
      width: 30px;
      height: 30px;
      margin-left: 20px;
    }
    .title {
      flex: 1;
      font-size: 18px;
      color: #fff;
      margin-left: 30px;
      letter-spacing: 1px;
    }
    .el-dropdown {
      margin-right: 30px;
    }
    .el-dropdown-link {
      cursor: pointer;
      color: #409eff;
    }
    .el-icon-arrow-down {
      font-size: 12px;
    }
  }
  .el-aside {
    background: #333744;
    .el-button {
      width: 100%;
      border: 0;
      border-radius: 0;
      color: #fff;
      background: #4a5064;
      letter-spacing: 1px;
      &:hover {
        color: #409eff;
      }
      i {
        font-size: 18px;
      }
    }
  }
  .el-main {
    // background: #dcdfe2;
  }
  .active-padding {
    padding: 0;
  }
}
</style>
