<template>
  <el-menu
    :default-active="`/${activePath}`"
    class="el-menu-vertical-demo"
    background-color="#222D32"
    text-color="#fff"
    active-text-color="#409eff"
    unique-opened
    router
    :collapse="iscollapse"
    :collapse-transition="false"
  >
    <el-submenu
      v-for="(item, index) in menuList"
      :key="index"
      :index="item.path"
    >
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span>{{ item.authName }}</span>
      </template>

      <div class="sub-item" v-if="item.children">
        <el-menu-item
          v-for="(subItem, indey) in item.children"
          :key="indey"
          :index="`/${subItem.path}`"
          @click="
            setActivePath({
              path: subItem.path,
              title: item.authName,
              subTitle: subItem.authName
            })
          "
        >
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title" class="sub-item-title">{{
              subItem.authName
            }}</span>
          </template>
        </el-menu-item>
      </div>
    </el-submenu>
  </el-menu>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "HomeAside",
  components: {},
  props: {
    iscollapse: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      menuList: [
        {
          authName: "用户管理",
          path: "users",
          icon: "user-solid",
          children: [
            {
              authName: "个人中心",
              path: "users",
              children: []
            }
          ]
        },
        {
          authName: "化学图表",
          path: "tables",
          icon: "tickets",
          children: [
            {
              authName: "化学知识表格",
              path: "table",
              children: []
            },
            {
              authName: "化学知识体系树状图",
              path: "tree",
              children: []
            },
            {
              authName: "化学知识图谱全貌",
              path: "quanmao",
              children: []
            }
          ]
        },
        {
          authName: "化学知识图谱查询",
          path: "search",
          icon: "aim",
          children: [
            {
              authName: "化学式知识实体构成",
              path: "goucheng",
              children: []
            },
            {
              authName: "查询某一类知识实体",
              path: "category",
              children: []
            },
            {
              authName: "查询化学方程知识实体",
              path: "fanying",
              children: []
            },
            {
              authName: "与待查询物质相关知识实体",
              path: "onetoall",
              children: []
            },
            {
              authName: "查询化学物质三角转换",
              path: "sanjiao",
              children: []
            },
            {
              authName: "物质综合推断题",
              path: "tuiduan",
              children: []
            }
          ]
        }
      ]
    };
  },
  methods: {
    // *******************************网络请求*******************************
    // *******************************逻辑处理*******************************
    // @click="setActivePath({ path: subItem.path ,title:item.authName,subTitle: subItem.authName})"
    ...mapMutations({
      setActivePath: "setActivePath"
    })
  },
  computed: {
    ...mapState({
      activePath: "activePath"
    })
  },
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
.el-menu {
  height: 100%;
  border-right: 0;
  .sub-item-title {
    font-size: 12px;
  }
}
</style>
