class Validate {
  checkPassword(rule, value, callback) {
    setTimeout(() => {
      let passwordReg = /^\w{6,20}$/;
      if (!passwordReg.test(value))
        return callback(
          new Error("请输入6-20位包含字母、数字、下划线格式的密码")
        );
      callback();
    }, 500);
  }
  checkEmail(rule, value, callback) {
    setTimeout(() => {
      const reg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
      if (!reg.test(value)) return callback(new Error("邮箱不合法"));
      callback();
    }, 500);
  }
  checkPhone(rule, value, callback) {
    setTimeout(() => {
      const reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
      if (!reg.test(value)) return callback(new Error("手机号码不合法"));
      callback();
    }, 500);
  }
  checkStuId(rule, value, callback) {
    setTimeout(() => {
      if (value.length !== 6) return callback(new Error("请输入6位正确学号"));
      callback();
    }, 500);
  }
  checkHXS(rule, value, callback) {
    setTimeout(() => {
      const reg =  /^[A-Z]{1}[0-9a-zA-Z]*$/ ;
      if (!reg.test(value)) return callback(new Error("化学式输入不合法"));
      callback();
    }, 500);
  }
  checkZWM(rule, value, callback) {
    setTimeout(() => {
      const reg = /^[\u4e00-\u9fa5]+$/;
      if (!reg.test(value)) return callback(new Error("中文名输入不合法"));
      callback();
    }, 500);
  }
}

export default new Validate();
