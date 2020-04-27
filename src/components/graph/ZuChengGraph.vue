<template>
  <div class="draw-graph" v-if="Object.keys(graphData).length !== 0">
    <div id="myChart" class="my-chart" style="height:400px;"></div>
  </div>
</template>

<script>
export default {
  props: {
    graphData: {
      type: Object,
      default() {
        return {};
      }
    },
    graphProps: {
      type: Object
    }
  },
  name: "ZuChengGraph",
  components: {},
  data() {
    return {
      mychart: false,
      flag: false
    };
  },
  methods: {
    draw(newVal) {
      this.mychart = this.$echarts.init(document.getElementById("myChart"));

      let option = {
        legend: {
          data: ["化学式", "离子", "原子"]
        },
        tooltip: {
          formatter(x) {
            // 鼠标放上去显示关系信息
            if (x.dataType === "edge") {
      
             if(x.data.type=='化学式的构成成分')return parseInt(x.data['化学式的构成成分个数'])
             if(x.data.type='原子得失电子') return parseInt(x.data['原子得失电子个数'])
            }
            // 鼠标放上去显示节点信息
            if (x.dataType === "node") {
              if (x.data.label == "化学式") {
                // console.log('x.data: ', x.data);
                let { 化学式 = "", 水溶液状态 = "", 颜色 = "" } = x.data;
                return `${化学式} ${颜色} ${水溶液状态}`;
              }
              if (x.data.label == "离子") {
                // console.log('x.data: ', x.data);
                let { name = "", 颜色 = "" } = x.data;
                return `${name} ${颜色}`;
              }
              if (x.data.label == "元素") {
                // console.log('x.data: ', x.data);
                let { name = "", 元素符号 = "", 相对原子质量 = "" } = x.data;
                return `${元素符号}原子 ${相对原子质量}`;
              }
            }
          }
        },
        toolbox: {
          // 显示工具箱
          show: true,
          feature: {
            mark: {
              show: true
            },
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
            symbolSize: this.graphProps.symbolSize, // 调整节点的大小
            animation: false,
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
            // focusNodeAdjacency:true,
            data: newVal.nodes,
            categories: newVal.categories,
            edgeSymbol: ["circle", "arrow"],
            edgeSymbolSize: [2, 10],
            force: this.graphProps.force,
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
    }
  },

  computed: {},
  watch: {
    graphData(newVal) {
      setTimeout(() => {
        this.draw(newVal);
      }, 1000);
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
  margin-top: 20px;
}
</style>
