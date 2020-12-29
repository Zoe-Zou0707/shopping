<template>
  <div id="details">
    <el-container>
      <el-main>
        <list></list>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import List from '../components/list.vue'

  export default {
  	name: 'Details',
      components: {
        List
      }
  }
</script>