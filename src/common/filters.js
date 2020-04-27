// 只能用于差值表达式里面和v-bind

/*
main.js导入
import MyFilter from '@/common/filter'
for (let key in MyFilter) {
  Vue.filter(key, MyFilter[key])
}
*/

import moment from "moment";

const vFilter = {
  //    2019-09-18T13:48:56.133Z String类型和date时间Object类型都可以 转为2018-11-16 10:55:58
  dataFormat(timestamp, pattern = "YYYY-MM-DD HH:MM:SS") {
    return moment(timestamp).format(pattern);
  }
};
export default vFilter;
