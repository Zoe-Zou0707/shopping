<template>
  <div id="register">
    <div id="center">
      <div class="middle">
        <div class="ui centered card" id="card">
          <span id="regist">注册</span>
          <div id="div-form">
          <el-form :model="registerForm" status-icon :rules="rules" ref="registerForm" label-width="100px" class="demo-registerForm">
            <el-form-item label="用户名：" prop="username" class="label1">
              <el-input type="text" v-model="registerForm.username" autocomplete="off" style="width:200px"></el-input>
            </el-form-item>
            <el-form-item label="密码：" prop="password" class="label2">
              <el-input type="password" v-model="registerForm.password" autocomplete="off" style="width:200px"></el-input>
            </el-form-item>
            <el-form-item label="确认密码：" prop="password" class="label3">
              <el-input type="password" v-model="registerForm.repassword" autocomplete="off" style="width:200px"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="register" style="width:200px;margin-left: auto; margin-right: auto;background-color:#e1251b;border-color:#e1251b;">提交</el-button>
            </el-form-item>
            <el-form-item>
              <router-link to="/login"> <el-button type="primary" @click="login" style="width:200px;margin-left: auto; margin-right: auto;background-color:#e1251b;border-color:#e1251b;">登录</el-button></router-link>
            </el-form-item>
          </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      registerForm:{
        e:0,
        username: '',
        password: '',
        repassword: ''
      },
      rules: {
        // 验证规则
        username: [
          {required: true, message: '请输入用户名', tirgger: 'blur'},
        ],
        password: [
          {required: true, message: '请输入密码', tirgger: 'blur'}
        ],
        repassword: [
          {required: true, message: '请确认密码', tirgger: 'blur'}]
      }
    }
  },
  methods: {
    register() {
      if(!this.registerForm.username) {
        this.$message.error('请输入用户名！');
        return;
      }
      if(!this.registerForm.password) {
        this.$message.error('请输入密码！');
        return;
      }
      if(!this.registerForm.repassword) {
        this.$message.error('请确认密码！');
        return;
      }
      if(this.registerForm.password != this.registerForm.repassword) {
        this.$message.error('两次输入的密码不一致，请重新输入密码！');
        return;
      }
      let flag = 0;
      this.$store.state.userList.forEach(n => {if(n.username === this.registerForm.username) flag = 1;});
      if(flag) {
        this.$message.error('用户名已存在');
        return;
      }
      this.$store.state.userList.push({
        username: this.registerForm.username,
        password: this.registerForm.password
      });
      this.$message.success('用户注册成功')
    }
  }
}
</script>

<style scoped>
#register {
  width: 1200px;
  margin: 0 auto;
}
#center {
  float: left;
  width: 1200px;
  height: 500px;
  background:white;
}
.middle {
  width: 500px;
  height: 350px;
  float: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
  background: white;
}
#regist{
  margin-left: auto; 
  margin-right: auto;
  margin-top: 30px; 
}
.card {
  width: 400px;
  height: 400px;
}
span {
  margin-top: 10px;
  font-size: 20px;
  font-weight: 200px;
}
.el-form{
  width:350px;
  height:200px;
  margin-left: auto; 
  margin-right: auto;
  margin-top:20px;
}
</style>
