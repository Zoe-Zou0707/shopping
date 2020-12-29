<template>
  <div id="header">
    <div id="top">
      <div>
        <ul class="top-left">
          <li v-if="!$store.state.username"><router-link to='/login'>你好，请登录</router-link></li>
          <li v-if="$store.state.username"><router-link to='/login'>你好，{{ $store.state.username }}</router-link></li>
          <li><router-link to='/register'>个人注册</router-link></li>
          <li><router-link to='/#'>我的京东</router-link></li>
        </ul>
        <ul class="top-right">
          <li><router-link to='/home'>首页</router-link></li>
          <li><router-link to='/cart'>购物车</router-link></li>
          <li><router-link to='/#'>手机京东</router-link></li>
        </ul>
      </div>
    </div>
    <div id="down">
      <div class="down-left">
        <router-link to='/home'><img src="../assets/jdlogo.jpg" alt="" /></router-link>
      </div>
      <div class="down-center">
        <input type="text" placeholder="  输入搜索内容" class="input" v-model="searchParams"/>
      </div>
      <div class="down-right">
        <input type="submit" class="submit" value="搜索"  @click="click"/>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
	data() {
		return {
			searchParams: ''
    }
  },
	methods: {
	  click() {
      this.$router.push({
      path: '/details/:id',
          name: 'Details'
      });
      this.$store.state.searchParams = this.searchParams;
      console.error(this.$store.state.searchParams);
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#header {
  width: 1200px;
  margin: 0 auto;
}
#top {
  min-width: 800px;
  width: 1200px;
  height: 30px;
  margin: 0 auto;
  background: #e3e4e5;
  clear: both;
}
.top-left {
  width: 800px;
  height: 30px;
  float: left;
  margin-left: 30px;
}
.top-right {
  width: 200px;
  height: 30px;
  float: right;
}
#top li {
  float: left;
  line-height: 35px;
  padding: 0 8px;
  list-style: none;
}
#top a {
  color: #a4a5a6;
  text-decoration: none;
}
#top a:hover {
  color: #ea6465;
}
#down {
  float:left;
  width: 1200px;
  height:90px;
  margin: 0 auto;
  margin-top:10px;
}
#down .down-left {
  margin-left:180px;
  width: 130px;
  height: 76px;
  float:left;
}
#down .down-center {
  width:450px;
  height: 80px;
  float:left;
  margin-left:20px;
  margin-top: 15px;
}
.input {
  width: 450px;
  height: 50px;
  border:2px solid #e1251b;
  outline: none;
}
#down .down-right {
  width: 100px;
  height: 80px;
  float:left;
  margin-top: 15px;
}
.submit{
  width: 100px;
  height: 50px;
  background-color:#e1251b;
  color: white;
  font-size: 20px;
  border:2px solid #e1251b;
}
hr{
    color:red;
    width:100%;
}
</style>
