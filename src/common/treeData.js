const data = [
  {
    id: 100,
    label: "元素",
    children: [
      {
        id: 30,
        label: "非金属",
        children: [
          {
            元素名称: "氢",
            元素类别: "非金属",
            name: "氢",
            元素符号: "H",
            原子序数: "1",
            相对原子质量: "1.008",
            id: 2000,
            label: "H"
          },
          {
            元素名称: "碳",
            元素类别: "非金属",
            name: "碳",
            元素符号: "C",
            原子序数: "6",
            相对原子质量: "12.01",
            id: 2001,
            label: "C"
          },
          {
            元素名称: "氮",
            元素类别: "非金属",
            name: "氮",
            元素符号: "N",
            原子序数: "7",
            相对原子质量: "14.01",
            id: 2002,
            label: "N"
          },
          {
            元素名称: "氧",
            元素类别: "非金属",
            name: "氧",
            元素符号: "O",
            原子序数: "8",
            相对原子质量: "16.0",
            id: 2003,
            label: "O"
          },
          {
            元素名称: "磷",
            元素类别: "非金属",

            name: "磷",
            元素符号: "P",
            原子序数: "15",
            相对原子质量: "30.97",
            id: 2007,
            label: "P"
          },
          {
            元素名称: "硫",
            元素类别: "非金属",
            name: "硫",
            hxUsed: "农业,医药,橡胶,建材,火药,火柴,酿酒,制糖等领域",

            元素符号: "S",
            原子序数: "16",
            相对原子质量: "32.06",
            id: 2008,
            label: "S"
          },
          {
            元素名称: "氯",
            元素类别: "非金属",
            name: "氯",
            元素符号: "Cl",
            原子序数: "17",
            相对原子质量: "35.45",
            id: 2009,
            label: "Cl"
          }
        ]
      },
      {
        id: 31,
        label: "过渡元素",
        children: [
          {
            元素名称: "铁",
            元素类别: "过渡元素",
            name: "铁",
            元素符号: "Fe",
            原子序数: "26",
            相对原子质量: "55.85",
            id: 2012,
            label: "Fe"
          },
          {
            元素名称: "铜",
            元素类别: "过渡元素",
            name: "铜",
            元素符号: "Cu",
            原子序数: "29",
            相对原子质量: "63.55",
            id: 2013,
            label: "Cu"
          },
          {
            元素名称: "锌",
            元素类别: "过渡元素",
            name: "锌",
            元素符号: "Zn",
            原子序数: "30",
            相对原子质量: "65.41",
            id: 2014,
            label: "Zn"
          },
          {
            元素名称: "银",
            元素类别: "过渡元素",

            name: "银",
            元素符号: "Ag",
            原子序数: "47",
            相对原子质量: "107.9",
            id: 2015,
            label: "Ag"
          },
          {
            元素名称: "汞",
            元素类别: "过渡元素",
            name: "汞",
            元素符号: "Hg",
            原子序数: "80",
            相对原子质量: "200.6",
            id: 2016,
            label: "Hg"
          }
        ]
      },
      {
        id: 32,
        label: "金属",
        children: [
          {
            元素名称: "钠",
            元素类别: "金属",
            name: "钠",
            元素符号: "Na",
            原子序数: "11",
            相对原子质量: "22.99",
            id: 2004,
            label: "Na"
          },
          {
            元素名称: "镁",
            元素类别: "金属",
            name: "镁",
            元素符号: "Mg",
            原子序数: "12",
            相对原子质量: "24.31",
            id: 2005,
            label: "Mg"
          },
          {
            元素名称: "铝",
            元素类别: "金属",
            name: "铝",
            元素符号: "Al",
            原子序数: "13",
            相对原子质量: "26.98",
            id: 2006,
            label: "Al"
          },
          {
            元素名称: "钾",
            元素类别: "金属",
            name: "钾",
            元素符号: "K",
            原子序数: "19",
            相对原子质量: "39.1",
            id: 2010,
            label: "K"
          },
          {
            元素名称: "钙",
            元素类别: "金属",
            name: "钙",
            元素符号: "Ca",
            原子序数: "20",
            相对原子质量: "40.08",
            id: 2011,
            label: "Ca"
          }
        ]
      }
    ]
  },
  {
    id: 101,
    label: "离子",
    children: [
      {
        id: 40,
        label: "阳离子",
        children: [
          {
            name: "亚铁离子",
            颜色: "浅绿色",
            离子符号: "Fe_2+",
            离子名称: "亚铁离子",
            id: 3000,
            label: "Fe_2+",
            type: "阳离子"
          },
          {
            name: "铁离子",
            颜色: "黄色",
            离子符号: "Fe_3+",
            离子名称: "铁离子",
            id: 3001,
            label: "Fe_3+",
            type: "阳离子"
          },
          {
            name: "银离子",
            颜色: "无",
            离子符号: "Ag_1+",
            离子名称: "银离子",
            id: 3002,
            label: "Ag_1+",
            type: "阳离子"
          },
          {
            name: "钡离子",
            颜色: "无",
            离子符号: "Ba_2+",
            离子名称: "钡离子",
            id: 3003,
            label: "Ba_2+",
            type: "阳离子"
          },
          {
            name: "铝离子",
            颜色: "无",
            离子符号: "Al_3+",
            离子名称: "铝离子",
            id: 3004,
            label: "Al_3+",
            type: "阳离子"
          },
          {
            name: "钙离子",
            颜色: "无",
            离子符号: "Ca_2+",
            离子名称: "钙离子",
            id: 3005,
            label: "Ca_2+",
            type: "阳离子"
          },
          {
            name: "铜离子",
            颜色: "蓝色",
            离子符号: "Cu_2+",
            离子名称: "铜离子",
            id: 3006,
            label: "Cu_2+",
            type: "阳离子"
          },
          {
            name: "氢离子",
            颜色: "无",
            离子符号: "H_1+",
            离子名称: "氢离子",
            id: 3007,
            label: "H_1+",
            type: "阳离子"
          },
          {
            name: "钾离子",
            颜色: "无",
            离子符号: "K_1+",
            离子名称: "钾离子",
            id: 3008,
            label: "K_1+",
            type: "阳离子"
          },
          {
            name: "镁离子",
            颜色: "无",
            离子符号: "Mg_2+",
            离子名称: "镁离子",
            id: 3009,
            label: "Mg_2+",
            type: "阳离子"
          },
          {
            name: "钠离子",
            颜色: "无",
            离子符号: "Na_1+",
            离子名称: "钠离子",
            id: 3010,
            label: "Na_1+",
            type: "阳离子"
          },
          {
            name: "锰离子",
            颜色: "无",
            离子符号: "Mn_4+",
            离子名称: "锰离子",
            id: 3011,
            label: "Mn_4+",
            type: "阳离子"
          },
          {
            name: "汞离子",
            颜色: "无",
            离子符号: "Hg_2+",
            离子名称: "汞离子",
            id: 3012,
            label: "Hg_2+",
            type: "阳离子"
          },
          {
            name: "锌离子",
            颜色: "无",
            离子符号: "Zn_2+",
            离子名称: "锌离子",
            id: 3013,
            label: "Zn_2+",
            type: "阳离子"
          }
        ]
      },
      {
        id: 41,
        label: "阴离子",
        children: [
          {
            name: "氧负离子",
            颜色: "无",
            离子符号: "O_2-",
            离子名称: "氧负离子",
            id: 3014,
            label: "O_2-",
            type: "阴离子"
          },
          {
            name: "氯离子",
            颜色: "无",
            离子符号: "Cl_1-",
            离子名称: "氯离子",
            id: 3015,
            label: "Cl_1-",
            type: "阴离子"
          },
          {
            name: "硝酸根离子",
            颜色: "无",
            离子符号: "NO3_1-",
            离子名称: "硝酸根离子",
            id: 3016,
            label: "NO3_1-",
            type: "阴离子"
          },
          {
            name: "氢氧根离子",
            颜色: "无",
            离子符号: "OH_1-",
            离子名称: "氢氧根离子",
            id: 3017,
            label: "OH_1-",
            type: "阴离子"
          },
          {
            name: "碳酸根离子",
            颜色: "无",
            离子符号: "CO3_2-",
            离子名称: "碳酸根离子",
            id: 3018,
            label: "CO3_2-",
            type: "阴离子"
          },
          {
            name: "亚硫酸根离子",
            颜色: "无",
            离子符号: "SO3_2-",
            离子名称: "亚硫酸根离子",
            id: 3019,
            label: "SO3_2-",
            type: "阴离子"
          },
          {
            name: "硫酸根离子",
            颜色: "无",
            离子符号: "SO4_2-",
            离子名称: "硫酸根离子",
            id: 3020,
            label: "SO4_2-",
            type: "阴离子"
          },
          {
            name: "高锰酸根离子",
            颜色: "无",
            离子符号: "MnO4_1-",
            离子名称: "高锰酸根离子",
            id: 3021,
            label: "MnO4_1-",
            type: "阴离子"
          },
          {
            name: "氯酸根离子",
            颜色: "无",
            离子符号: "ClO3_1-",
            离子名称: "氯酸根离子",
            id: 3022,
            label: "ClO3_1-",
            type: "阴离子"
          },
          {
            name: "碳酸氢根离子",
            颜色: "无",
            离子符号: "HCO3_1-",
            离子名称: "碳酸氢根离子",
            id: 3023,
            label: "HCO3_1-",
            type: "阴离子"
          }
        ]
      }
    ]
  },
  {
    id: 102,
    label: "化学式",
    children: [
      {
        id: 10,
        label: "单质",
        children: [
          {
            name: "铝",
            名称: "铝",
            颜色: "白色",
            物质类型: "单质",
            hxUsed: "铝及铝合金是当前用途十分广泛的、最经济适用的材料之一",
            化学式: "Al",
            水溶液状态: "固体",
            id: 1000,
            label: "Al"
          },
          {
            name: "碳",
            名称: "碳",
            颜色: "黑色",
            物质类型: "单质",
            化学式: "C",
            水溶液状态: "无",
            id: 1001,
            label: "C"
          },
          {
            name: "钡",
            名称: "钡",
            hxUsed:
              "用于制钡盐、合金、焰火、核反应堆等,也是精炼铜时的优良除氧剂,硫酸钡是X线检查辅助用药",
            颜色: "银白色",
            物质类型: "单质",
            化学式: "Ba",
            水溶液状态: "固体",
            id: 1086,
            label: "Ba"
          },
          {
            name: "氯气",
            hxUsed: "杀菌、消毒、漂白",
            名称: "氯气",
            颜色: "黄绿色",
            化学式: "Cl2",
            物质类型: "单质",
            水溶液状态: "气体",
            id: 1002,
            label: "Cl2"
          },
          {
            name: "铜",
            名称: "铜",
            颜色: "红色",
            物质类型: "单质",
            hxUsed:
              "铜是与人类关系非常密切的有色金属,被广泛地应用于电气、轻工、机械制造、建筑工业、国防工业等领域",

            化学式: "Cu",
            水溶液状态: "固体",
            id: 1003,
            label: "Cu"
          },
          {
            name: "铁",
            名称: "铁",
            hxUsed:
              "纯铁用于制发电机和电动机的铁芯,还原铁粉用于粉末冶金,钢铁用于制造机器和工具。用作还原剂。用于铁盐制备。用作营养增补剂(铁质强化剂。",
            颜色: "白色",
            物质类型: "单质",
            化学式: "Fe",
            水溶液状态: "固体",
            id: 1004,
            label: "Fe"
          },
          {
            name: "氢气",
            hxUsed: "工业、氢气球、氢能",
            名称: "氢气",
            颜色: "无色",
            化学式: "H2",
            物质类型: "单质",
            水溶液状态: "气体",
            id: 1005,
            label: "H2"
          },
          {
            name: "臭氧",
            名称: "臭氧",
            颜色: "蓝色",
            化学式: "O3",
            物质类型: "单质",
            水溶液状态: "气体",
            id: 1092,
            label: "O3"
          },
          {
            name: "汞",
            名称: "汞",
            hxUsed:
              "汞可用于温度计、气压计、压力计、血压计、浮阀、水银开关和其他装置",

            颜色: "白色",
            物质类型: "单质",
            化学式: "Hg",
            水溶液状态: "液体",
            id: 1006,
            label: "Hg"
          },
          {
            name: "镁",
            hxUsed: "医疗用途：治疗缺镁和痉挛",
            名称: "镁",
            颜色: "白色",
            物质类型: "单质",
            化学式: "Mg",
            水溶液状态: "固体",
            id: 1007,
            label: "Mg"
          },
          {
            name: "钠",
            hxUsed:
              "测定有机物中的氯。还原和氢化有机化合物。钠是人体中一种重要无机元素",
            名称: "钠",
            颜色: "白色",
            物质类型: "单质",
            化学式: "Na",
            水溶液状态: "固体",
            id: 1008,
            label: "Na"
          },
          {
            hxUsed: "供给呼吸",
            name: "氧气",
            名称: "氧气",
            颜色: "无色",
            化学式: "O2",
            物质类型: "单质",
            水溶液状态: "气体",
            id: 1009,
            label: "O2"
          },
          {
            name: "氮气",
            名称: "氮气",
            hxUsed: "合成氨,作保护气,用于降温,作防腐剂等",
            颜色: "无色",
            化学式: "N2",
            物质类型: "单质",
            水溶液状态: "气体",
            id: 1091,
            label: "N2"
          },
          {
            name: "磷",
            名称: "磷",
            hxUsed: "人体含量较多的元素之一",
            颜色: "白色",
            物质类型: "单质",
            化学式: "P",
            水溶液状态: "固体",
            id: 1010,
            label: "P"
          },
          
          {
            name: "硫",
            名称: "硫",
            颜色: "黄色",
            物质类型: "单质",
            化学式: "S",
            水溶液状态: "固体",
            id: 1011,
            label: "S"
          },
          {
            name: "锌",
            hxUsed: "电池、汽车、电力、电子及建筑等",

            名称: "锌",
            颜色: "白色",
            物质类型: "单质",
            化学式: "Zn",
            水溶液状态: "固体",
            id: 1012,
            label: "Zn"
          }
        ]
      },
      {
        id: 11,
        label: "氧化物",
        children: [
          {
            name: "氧化铝",
            名称: "氧化铝",
            颜色: "白色",
            化学式: "Al2O3",
            物质类型: "氧化物",
            水溶液状态: "固体",
            id: 1013,
            label: "Al2O3"
          },
          {
            name: "四氧化三铁",
            hxUsed: "制做磁铁、录音机磁带",
            名称: "四氧化三铁",
            颜色: "黑色",
            化学式: "Fe4O3",
            物质类型: "氧化物",
            水溶液状态: "固体",
            id: 1080,
            label: "Fe4O3"
          },
          {
            name: "氧化钙",
            名称: "氧化钙",
            hxUsed:
              "还可用于耐火材料、干燥剂；氧化钙可通过与水反应来产生大量的热,常用于自动加温包装",
            颜色: "白色",
            化学式: "CaO",
            物质类型: "氧化物",
            水溶液状态: "固体",
            id: 1014,
            label: "CaO"
          },
          {
            name: "一氧化碳",
            hxUsed: "工业还原氧化铁",
            名称: "一氧化碳",
            颜色: "无色",
            物质类型: "氧化物",
            化学式: "CO",
            水溶液状态: "气体",
            id: 1015,
            label: "CO"
          },
          {
            name: "二氧化碳",
            hxUsed: "冷藏易腐败的食品、作致冷剂、制造碳化软饮料等",

            名称: "二氧化碳",
            颜色: "无色",
            物质类型: "氧化物",
            化学式: "CO2",
            水溶液状态: "气体",
            id: 1016,
            label: "CO2"
          },
          {
            name: "氧化铜",
            名称: "氧化铜",
            颜色: "黑色",
            化学式: "CuO",
            物质类型: "氧化物",
            水溶液状态: "固体",
            id: 1017,
            label: "CuO"
          },
          {
            name: "氧化铁",
            名称: "氧化铁",
            颜色: "红色",
            化学式: "Fe2O3",
            hxUsed: "用于油漆、橡胶、塑料、建筑等的着色",
            物质类型: "氧化物",
            水溶液状态: "固体",
            id: 1018,
            label: "Fe2O3"
          },
          {
            name: "氧化亚铁",
            名称: "氧化亚铁",
            颜色: "红色",
            化学式: "FeO",
            hxUsed: "色素,化妆品,刺青墨水",
            物质类型: "氧化物",
            水溶液状态: "固体",
            id: 1085,
            label: "FeO"
          },
          {
            name: "水",
            hxUsed: "溶剂、维持生命、电子工业等",
            名称: "水",
            颜色: "无色",
            物质类型: "氧化物",
            化学式: "H2O",
            水溶液状态: "液体",
            id: 1019,
            label: "H2O"
          },
          {
            name: "过氧化氢",
            hxUsed: "物体表面消毒、化工生产、除去异味",
            名称: "过氧化氢",
            颜色: "无色",
            物质类型: "氧化物",
            化学式: "H2O2",
            水溶液状态: "液体",
            id: 1020,
            label: "H2O2"
          },
          {
            name: "氧化汞",
            hxUsed: "可作氧化剂、有机反应催化剂、分析试剂、氧化汞电极",
            名称: "氧化汞",
            颜色: "白色",
            化学式: "HgO",
            物质类型: "氧化物",
            水溶液状态: "固体",
            id: 1021,
            label: "HgO"
          },
          {
            hxUsed: "作为阻燃剂的使用",
            name: "氧化镁",
            名称: "氧化镁",
            颜色: "白色",
            化学式: "MgO",
            物质类型: "氧化物",
            水溶液状态: "固体",
            id: 1022,
            label: "MgO"
          },
          {
            name: "二氧化锰",
            hxUsed:
              "用作干电池去极剂,合成工业的催化剂和氧化剂,玻璃工业和搪瓷工业的着色剂、消色剂、脱铁剂等",
            名称: "二氧化锰",
            颜色: "黑色",
            物质类型: "氧化物",
            化学式: "MnO2",
            水溶液状态: "固体",
            id: 1023,
            label: "MnO2"
          },
          {
            name: "五氧化二磷",
            名称: "五氧化二磷",
            颜色: "白色",
            物质类型: "氧化物",
            hxUsed: "干燥剂、用途广泛",

            化学式: "P2O5",
            水溶液状态: "固体",
            id: 1024,
            label: "P2O5"
          },
          {
            name: "二氧化硫",
            名称: "二氧化硫",
            颜色: "无色",
            hxUsed:
              "用作有机溶剂及冷冻剂,并用于精制各种润滑油。.农药、人造纤维、染料等工业部门。",
            物质类型: "氧化物",
            化学式: "SO2",
            水溶液状态: "气体",
            id: 1025,
            label: "SO2"
          }
        ]
      },
      {
        id: 12,
        label: "酸",
        children: [
          {
            name: "碳酸",
            名称: "碳酸",
            颜色: "无色",
            化学式: "H2CO3",
            物质类型: "酸",
            水溶液状态: "液体",
            id: 1065,
            label: "H2CO3"
          },
          {
            name: "硫酸",
            hxUsed: "冶金及石油工业",
            名称: "硫酸",
            颜色: "无色",
            化学式: "H2SO4",
            物质类型: "酸",
            水溶液状态: "液体",
            id: 1066,
            label: "H2SO4"
          },
          {
            hxUsed: "提取精盐 酸洗钢材",
            name: "盐酸",
            名称: "盐酸",
            颜色: "无色",
            物质类型: "酸",
            化学式: "HCl",
            水溶液状态: "液体",
            id: 1067,
            label: "HCl"
          }
        ]
      },
      {
        id: 13,
        label: "碱",
        children: [
          {
            name: "氢氧化铝",
            名称: "氢氧化铝",
            颜色: "白色",
            化学式: "Al(OH)3",
            物质类型: "碱",
            水溶液状态: "沉淀",
            id: 1059,
            label: "Al(OH)3"
          },
          {
            name: "氢氧化铜",
            hxUsed:
              "用于媒染剂、催化剂、杀菌剂和颜料,并用于染纸张等、用作分析试剂、媒染剂；制铜盐的原料、媒染剂、人造丝、颜料、制着色纸、用作杀菌剂、船底防污漆的组分。",
            名称: "氢氧化铜",
            颜色: "蓝色",
            化学式: "Cu(OH)2",
            物质类型: "碱",
            水溶液状态: "沉淀",
            id: 1089,
            label: "Cu(OH)2"
          },
          {
            name: "氢氧化钙",
            名称: "氢氧化钙",
            颜色: "白色",
            化学式: "Ca(OH)2",
            物质类型: "碱",
            水溶液状态: "液体",
            id: 1060,
            label: "Ca(OH)2"
          },
          {
            name: "氢氧化钡",
            名称: "氢氧化钡",
            hxUsed:
              "于测定空气中的二氧化碳。叶绿素的定量。糖及动植物油的精制。锅炉用水清净剂。杀虫剂。橡胶工业。",

            颜色: "白色",
            化学式: "Ba(OH)2",
            物质类型: "碱",
            水溶液状态: "液体",
            id: 1090,
            label: "Ba(OH)2"
          },
          {
            name: "氢氧化铁",
            名称: "氢氧化铁",
            hxUsed: "净水剂和砷的解毒药等",

            颜色: "红色",
            化学式: "Fe(OH)3",
            物质类型: "碱",
            水溶液状态: "沉淀",
            id: 1062,
            label: "Fe(OH)3"
          },
          {
            name: "氢氧化镁",
            名称: "氢氧化镁",
            颜色: "白色",
            化学式: "Mg(OH)2",
            物质类型: "碱",
            水溶液状态: "沉淀",
            id: 1063,
            label: "Mg(OH)2"
          },
          {
            name: "氢氧化钠",
            hxUsed: "漂白、造纸等",
            名称: "氢氧化钠",
            颜色: "无色",
            化学式: "NaOH",
            物质类型: "碱",
            水溶液状态: "液体",
            id: 1064,
            label: "NaOH"
          }
        ]
      },
      {
        id: 14,
        label: "盐",
        children: [
          {
            name: "氯化钠",
            hxUsed: "矿石冶炼,制造调味品,医学上用来静脉注射,工业原料,公路除雪",
            名称: "氯化钠",
            颜色: "白色",
            物质类型: "盐",
            化学式: "NaCl",
            水溶液状态: "晶体",
            id: 1026,
            label: "NaCl"
          },
          {
            name: "碳酸钾",
            hxUsed: "面食制品",
            名称: "碳酸钾",
            颜色: "白色",
            物质类型: "盐",
            化学式: "K2CO3",
            水溶液状态: "固体",
            id: 1094,
            label: "K2CO3"
          },
          {
            name: "氯化银",
            名称: "氯化银",
            hxUsed: "照相、电极",
            颜色: "白色",
            物质类型: "盐",
            化学式: "AgCl",
            水溶液状态: "沉淀",
            id: 1027,
            label: "AgCl"
          },
          {
            name: "硝酸银",
            hxUsed: "银盐原料、感光材料、防腐剂、催化剂,还用于镀银、制镜等行业",
            名称: "硝酸银",
            颜色: "无色",
            化学式: "AgNO3",
            物质类型: "盐",
            水溶液状态: "液体",
            id: 1028,
            label: "AgNO3"
          },
          {
            name: "银",
            名称: "银",
            颜色: "白色",
            化学式: "Ag",
            物质类型: "单质",
            水溶液状态: "固体",
            id: 1083,
            label: "Ag"
          },
          {
            name: "硫酸铝",
            hxUsed:
              "在造纸工业中作为松香胶、蜡乳液等胶料的沉淀剂,水处理中作絮凝剂,还可作泡沫灭火器的内留剂,制造明矾、铝白的原料,石油脱色、脱臭剂、某些药物的原料等。还可制造人造宝石及高级铵明矾。",
            名称: "硫酸铝",
            颜色: "无色",
            化学式: "Al2(SO4)3",
            物质类型: "盐",
            水溶液状态: "液体",
            id: 1029,
            label: "Al2(SO4)3"
          },
          {
            name: "氯化铝",
            hxUsed: "冶金工业",

            名称: "氯化铝",
            颜色: "无色",
            化学式: "AlCl3",
            物质类型: "盐",
            水溶液状态: "液体",
            id: 1030,
            label: "AlCl3"
          },
          {
            name: "硝酸铝",
            hxUsed: "用于显像管生产,也用于制造自然电灯丝、媒染剂",
            名称: "硝酸铝",
            颜色: "白色",
            化学式: "Al(NO3)3",
            物质类型: "盐",
            水溶液状态: "液体",
            id: 1031,
            label: "Al(NO3)3"
          },
          {
            name: "氯化钡",
            hxUsed: "用于金属热处理、钡盐制造、电子仪表",
            名称: "氯化钡",
            颜色: "无色",
            化学式: "BaCl2",
            物质类型: "盐",
            水溶液状态: "液体",
            id: 1032,
            label: "BaCl2"
          },
          {
            name: "硫酸钡",
            名称: "硫酸钡",
            颜色: "白色",
            化学式: "BaSO4",
            物质类型: "盐",
            水溶液状态: "沉淀",
            id: 1033,
            label: "BaSO4"
          },
          {
            name: "氯化钙",
            名称: "氯化钙",
            颜色: "无色",
            化学式: "CaCl2",
            物质类型: "盐",
            水溶液状态: "液体",
            id: 1034,
            label: "CaCl2"
          },
          {
            name: "钙",
            hxUsed: "许多种类的生物都用钙形成甲壳和骨骼",
            名称: "钙",
            颜色: "白色",
            化学式: "Ca",
            物质类型: "单质",
            水溶液状态: "固体",
            id: 1034,
            label: "Ca"
          },
          {
            name: "碳酸钡",
            hxUsed:
              "用于陶瓷涂料和光学玻璃的辅料用于电子陶瓷、PTC热敏电阻、电容器等多种电子元器件的制造",
            名称: "碳酸钡",
            颜色: "白色",
            化学式: "BaCO3",
            物质类型: "盐",
            水溶液状态: "沉淀",
            id: 1035,
            label: "BaCO3"
          },
          {
            name: "碳酸钙",
            名称: "碳酸钙",
            颜色: "白色",
            化学式: "CaCO3",
            物质类型: "盐",
            水溶液状态: "沉淀",
            id: 1036,
            label: "CaCO3"
          },
          {
            name: "亚硫酸钙",
            名称: "亚硫酸钙",
            颜色: "无色",
            化学式: "CaSO3",
            物质类型: "盐",
            水溶液状态: "液体",
            id: 1037,
            label: "CaSO3"
          },
          {
            name: "硫酸钙",
            名称: "硫酸钙",
            颜色: "无色",
            化学式: "CaSO4",
            物质类型: "盐",
            水溶液状态: "液体",
            id: 1038,
            label: "CaSO4"
          },
          {
            name: "硝酸铜",
            名称: "硝酸铜",
            颜色: "蓝色",
            化学式: "Cu(NO3)2",
            物质类型: "盐",
            水溶液状态: "液体",
            id: 1039,
            label: "Cu(NO3)2"
          },
          {
            hxUsed: "消毒剂、媒染剂、催化剂、分析试剂",
            name: "氯化铜",
            名称: "氯化铜",
            颜色: "蓝色",
            化学式: "CuCl2",
            物质类型: "盐",
            水溶液状态: "液体",
            id: 1040,
            label: "CuCl2"
          },
          {
            name: "五水硫酸铜",
            hxUsed: "金属冶炼、化工、药用、气体干燥剂等",
            名称: "五水硫酸铜",
            颜色: "蓝色",
            化学式: "CuSO4·5H2O",
            物质类型: "盐",
            水溶液状态: "液体",
            id: 1087,
            label: "CuSO4·5H2O"
          },
          {
            name: "硫酸铜",
            hxUsed: "用作分析试剂",
            名称: "硫酸铜",
            颜色: "蓝色",
            化学式: "CuSO4",
            物质类型: "盐",
            水溶液状态: "液体",
            id: 1041,
            label: "CuSO4"
          },
          {
            name: "硫酸铁",
            名称: "硫酸铁",
            hxUsed:
              "用于银的分析,糖的定量测定。用作染料、墨水、净水、铝的雕刻、消毒、聚合催化剂等。",
            颜色: "黄色",
            化学式: "Fe2(SO4)3",
            物质类型: "盐",
            水溶液状态: "液体",
            id: 1042,
            label: "Fe2(SO4)3"
          },
          {
            name: "氯化亚铁",
            名称: "氯化亚铁",
            颜色: "绿色",
            hxUsed: "还原剂。检测硒。污水处理剂。",
            化学式: "FeCl2",
            物质类型: "盐",
            水溶液状态: "液体",
            id: 1043,
            label: "FeCl2"
          },
          {
            hxUsed: "主要用于金属蚀刻,污水处理.",
            name: "氯化铁",
            名称: "氯化铁",
            颜色: "黄色",
            化学式: "FeCl3",
            物质类型: "盐",
            水溶液状态: "液体",
            id: 1044,
            label: "FeCl3"
          },
          {
            name: "硫酸铁",
            名称: "硫酸铁",
            颜色: "绿色",
            化学式: "FeSO4",
            物质类型: "盐",
            水溶液状态: "液体",
            id: 1045,
            label: "FeSO4"
          },
          {
            name: "氯化钾",
            hxUsed: "医学临床",
            名称: "氯化钾",
            颜色: "无色",
            物质类型: "盐",
            化学式: "KCl",
            水溶液状态: "液体",
            id: 1046,
            label: "KCl"
          },
          {
            name: "氯酸钾",
            名称: "氯酸钾",
            颜色: "无色",
            化学式: "KClO3",
            物质类型: "盐",
            水溶液状态: "液体",
            id: 1047,
            label: "KClO3"
          },
          {
            name: "高锰酸钾",
            名称: "高锰酸钾",
            颜色: "紫色",
            化学式: "KMnO4",
            物质类型: "盐",
            水溶液状态: "液体",
            id: 1048,
            label: "KMnO4"
          },
          {
            name: "氯化镁",
            hxUsed: "制金属镁、消毒剂、灭火剂、冷冻盐水、陶瓷",

            名称: "氯化镁",
            颜色: "无色",
            化学式: "MgCl2",
            物质类型: "盐",
            水溶液状态: "液体",
            id: 1049,
            label: "MgCl2"
          },
          {
            name: "碳酸镁",
            名称: "碳酸镁",
            颜色: "白色",
            化学式: "MgCO3",
            物质类型: "盐",
            水溶液状态: "沉淀",
            id: 1050,
            label: "MgCO3"
          },
          {
            name: "硫酸镁",
            名称: "硫酸镁",
            hxUsed: "泻盐,硫苦、苦盐、泻利盐",

            颜色: "无色",
            化学式: "MgSO4",
            物质类型: "盐",
            水溶液状态: "液体",
            id: 1051,
            label: "MgSO4"
          },
          {
            name: "碳酸钠",
            名称: "碳酸钠",
            hxUsed:
              "主要用于平板玻璃、玻璃制品和陶瓷釉的生产。还广泛用于生活洗涤、酸类中和以及食品加工等。",
            颜色: "无色",
            化学式: "Na2CO3",
            物质类型: "盐",
            水溶液状态: "液体",
            id: 1052,
            label: "Na2CO3"
          },
          {
            name: "亚硫酸钠",
            名称: "亚硫酸钠",
            颜色: "无色",
            化学式: "Na2SO3",
            物质类型: "盐",
            水溶液状态: "液体",
            id: 1053,
            label: "Na2SO3"
          },
          {
            hxUsed: "常用的后处理干燥剂",
            name: "硫酸钠",
            名称: "硫酸钠",
            颜色: "无色",
            化学式: "Na2SO4",
            物质类型: "盐",
            水溶液状态: "液体",
            id: 1054,
            label: "Na2SO4"
          },
          {
            name: "碳酸氢钠",
            名称: "碳酸氢钠",
            颜色: "无色",
            化学式: "NaHCO3",
            物质类型: "盐",
            水溶液状态: "液体",
            id: 1055,
            label: "NaHCO3"
          },
          {
            name: "二氧化氮",
            名称: "二氧化氮",
            颜色: "红棕色气体",
            化学式: "NO2",
            物质类型: " 氧化物",
            水溶液状态: "",
            id: 1070,
            label: "NO2"
          },
          {
            name: "硝酸钠",
            名称: "硝酸钠",
            颜色: "无色",
            化学式: "NaNO3",
            物质类型: "盐",
            水溶液状态: "液体",
            id: 1056,
            label: "NaNO3"
          },
          {
            name: "氯化锌",
            名称: "氯化锌",
            hxUsed: "用作脱水剂、催化剂、防腐剂,还用于电镀、医药、农药等工业",
            颜色: "无色",
            化学式: "ZnCl2",
            物质类型: "盐",
            水溶液状态: "液体",
            id: 1057,
            label: "ZnCl2"
          },
          {
            name: "硫酸锌",
            hxUsed: "印染媒染剂、木材防腐剂、造纸漂白剂",
            名称: "硫酸锌",
            颜色: "无色",
            化学式: "ZNSO4",
            物质类型: "盐",
            水溶液状态: "液体",
            id: 1058,
            label: "ZNSO4"
          }
        ]
      }
    ]
  }
];
export default data;