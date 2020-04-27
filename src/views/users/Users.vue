<template>
  <el-card class="profile-card">
    <div class="profile-container">
      <h3>个人信息</h3>
      <ul>
        <li v-for="(item, index) in computedUser" :key="index">
          <span class="icon">
            <i :class="item.icon"></i>
          </span>
          <span class="label">{{ item.label }}</span>
          <span class="value">{{ item.value }}</span>
        </li>
      </ul>
    </div>
  </el-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Profile",
  components: {},
  data() {
    return {
      currentUser:{}
     
    };
  },
  methods: {
    // *******************************网络请求*******************************
    async getCurrentUser(){
      const res=await this.$http.get(`users/${this.user._id}`)
      this.currentUser=res
    },
    // *******************************逻辑处理*******************************
  },
  computed: {
    ...mapState({
      user: "user"
    }),
    computedUser() {
      return [
        {  label: "学号", value: this.currentUser.stu_id },
        {
          
          label: "姓名",
          value: this.currentUser.name
        },
        { label: "性别", value: this.currentUser.gender },
      ];
    }
  },
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getCurrentUser()
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  updated() {}, //生命周期 - 更新之后
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less" scoped>
.profile-card {
  margin-top: 20px;
  width: 500px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15), 0 0 6px rgba(0, 0, 0, 0.2);
  .profile-container {
    color: #606266;
    h3 {
      line-height: 30px;
      border-bottom: 1px solid #e7eaec;
    }
    .el-avatar {
      width: 80px;
      height: 80px;
      background: #c0c4cc;
      text-align: center;
      margin: 20px 90px;
    }
    ul {
      li {
        display: flex;
        flex-flow: row nowrap;
        line-height: 40px;
        border-bottom: 1px solid #e7eaec;
        &:first-child {
          border-top: 1px solid #e7eaec;
        }
        &:last-child{
            margin-bottom: 30px;
        }
        .icon {
          margin-right: 5px;
        }
        .label {
          flex: 1;
        }
        .value{margin-right: 20px;}
      }
    }
  }
}
</style>
