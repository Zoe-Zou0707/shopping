<template>
  <div id="login">
    <div id="center">
      <div class="middle">
        <div class="ui centered card" id="card">
          <span id="register">登录</span>
          <div id="div-form">
          <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="demo-loginForm">
            <el-form-item label="用户名：" prop="username" class="label1">
              <el-input type="text" v-model="loginForm.username" autocomplete="off" style="width:200px"></el-input>
            </el-form-item>
            <el-form-item label="密码：" prop="password" class="label2">
              <el-input type="password" v-model="loginForm.password" autocomplete="off" style="width:200px"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="login" style="width:200px;margin-left: auto; margin-right: auto; background-color:#e1251b;border-color:#e1251b;">提交</el-button>
            </el-form-item>
            <el-form-item>
              <router-link to="/register"> <el-button type="primary" @click="login" style="width:200px;margin-left: auto; margin-right: auto;background-color:#e1251b;border-color:#e1251b;">注册</el-button></router-link>
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
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        // 验证规则
        username: [
          {required: true, message: '请输入用户名', tirgger: 'blur'},
        ],
        password: [
          {required: true, message: '请输入密码', tirgger: 'blur'}]
      }
    }
  },
  methods: {
    login() {
      if(!this.loginForm.username) {
        this.$message.error('请输入用户名');
        return;
      }
      if(!this.loginForm.password) {
        this.$message.error('请输入密码');
        return;
      }
      let flag = 0;
      this.$store.state.userList.forEach(n => {if(n.username === this.loginForm.username && n.password === this.loginForm.password){
        flag = 1;
      }});
      if(flag) {
        this.$message.success('登录成功');
        this.$store.state.username = this.loginForm.username;
        this.$router.push({
          path: '/'
        });
      } else {
        this.$message.error('用户名或密码不正确');
        return;
      }
    }
  }
}
</script>

<style scoped>
#login {
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
#register {
  margin-left: auto; 
  margin-right: auto;
  margin-top: 30px; 

}
.card {
  width: 400px;
  height: 350px;
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
