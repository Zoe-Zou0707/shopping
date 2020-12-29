<template>
  <div id="Home">
    <el-container class="Home">
      <el-container>
        <el-main>
          <Lunbo></Lunbo>
        </el-main>
      </el-container>
    </el-container>
    <el-container>
      <el-main>
          <el-main>
             <product v-for="item in list" :info="item" :key="item.id"></product>
            <div class="product-not-found" v-show="!list.length">暂无相关商品</div>
          </el-main>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Lunbo from '../components/Lunbo'
import product from '../components/product'
import List from '../components/list'
export default {
  components: {
    Lunbo,
    product,
    List
  },
  data() {
    return {
      value: "",
      curActive: "i1"
      }
  },
	computed: {
	  list() {
		  return this.$store.state.productList;
	  }
  },
	mounted () {
		this.$store.dispatch('getProductList');
	}
}
</script>

<style scoped>
#Home {
  width: 1200px;
  margin: 0 auto;
}
div {
  width: 300px;
  /* border:1px solid red; */
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 30px;
}


.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  float: left;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
