<template>
  <div class="draw-graph" v-if="Object.keys(graphData).length !== 0">
    <div
      id="myChart"
      class="my-chart"
      style="height:600px; border: 1px solid #C0C4CC;"
    ></div>
  </div>
</template>

<script>
import wuzhi from "common/wuzhi";
const wuzhiList = wuzhi.map(e => {
  return { label: e.label, describe: e.describe };
});


export default {
  name: "All100",
  props: {
    graphData: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      mychart: false
    };
  },
  methods: {
    draw(newVal) {
      let _this = this;
      this.mychart = this.$echarts.init(document.getElementById("myChart"));
      let option = {
        legend: {
          show: true,
          top: "20px",
          selectedMode: true,
          data: ["单质实例", "氧化物实例", "酸实例", "碱实例", "盐实例"]
        },
        tooltip: {
          formatter(x) {
            // 鼠标放上去显示关系信息
            if (x.dataType === "edge") {
              return x.data.message;
            }
            // 鼠标放上去显示节点信息
            if (x.dataType === "node") {
              if (x.data.label == "化学式") {
                // console.log('x.data: ', x.data);
                let { 名称 = "", 水溶液状态 = "", 颜色 = "" } = x.data;
                return `${名称} ${颜色} ${水溶液状态}`;
              } else if (x.data.label == "物质类型") {
                return wuzhiList.find(e=>e.label==x.data.name).describe
              }
            }
          }
        },
        toolbox: {
          // 显示工具箱
          show: true,
          feature: {
            // 还原
            restore: {
              show: true
            },
            // 保存为图片
            saveAsImage: {
              show: true
            }
          }
        },
        series: [
          {
            type: "graph",
            layout: "force",
            symbolSize: 30, // 调整节点的大小
            animation: true,
            label: {
              normal: {
                show: true,
                position: "right",
                textStyle: {
                  color: "black;", //字体颜色
                  fontStyle: "normal", //文字字体的风格 'normal'标准 'italic'斜体 'oblique' 倾斜
                  fontWeight: "normal", //'normal'标准'bold'粗的'bolder'更粗的'lighter'更细的或100 | 200 | 300 | 400...
                  fontFamily: "sans-serif", //文字的字体系列
                  fontSize: 13 //字体大小
                }
              }
            },
            draggable: true,
            focusNodeAdjacency: false, //是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点。
            roam: true, //是否开启鼠标缩放和平移漫游 'scale' 或者 'move'
            // nodeScaleRatio: 0.6,
            data: newVal.nodes,
            categories: newVal.categories,
            edgeSymbol: ["circle", "arrow"],
            edgeSymbolSize: [2, 10],
            force: {
              edgeLength: 100, //边的两个节点之间的距离
              repulsion: 100, //值越大则斥力越大
              gravity: 0.06 //该值越大节点越往中心点靠拢。
            },
            edges: newVal.links,
            edgeLabel: {
              normal: {
                show: true,
                formatter: function(x) {
                  return x.data.type;
                }
              }
            },

            lineStyle: {
              //==========关系边的公用线条样式。
              normal: {
                color: "target",
                width: "1",
                type: "solid", //线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
                curveness: 0.05, //线条的曲线程度，从0到1
                opacity: 0.8
                // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
              },
              emphasis: {
                //高亮状态
                //高亮状态
                width: "2",
                color: "#333",
                type: "solid", //线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
                curveness: 0.05, //线条的曲线程度，从0到1
                opacity: 1
              }
            }
          }
        ]
      };
      this.mychart.setOption(option);
      // this.handleClick();
    },
    //处理图表点击事件

    handleClick(param) {
      this.mychart.on("click", async params => {
        if (params.dataType == "node") {
          let idList = await this.$http.get(
            `/neo4j/fangchengid/${params.data["化学式"]}`
          );
          idList.length !== 0 && this.$emit("handleNodeClick", idList);
        } else if (params.dataType == "edge") {
        }
      });
    }
  },

  computed: {},
  watch: {
    graphData(newVal) {
      setTimeout(() => {
        this.draw(newVal);
      }, 2000);
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {}
};
</script>
<style lang="less" scoped>
.draw-graph {
}
</style>
