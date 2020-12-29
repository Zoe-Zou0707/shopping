<template>
  <div class="lunbo">
      <div class="banner">
          <img v-for="(v,i) in img" :key="i" :src="v" v-show="i==n" style="width:800px;height:600px;">
          <div class="banner-img">
              <ul>
                  <li v-for="(v,i) in img" :key="i" :class="i==n ? 'selected' : ''"></li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      n: 0,
      img: [
        'https://imgcps.jd.com/ling4/2922989/5bCd5ZOB6LSo5aW96Iy2/5aSa5Lmw5LyY5oOgMuS7tjnmipjotbc/p-5bd8253082acdd181d02fa42/23bb1fd3/cr/s/q.jpg',
        'https://imgcps.jd.com/ling4/100016168278/576O5aaG5aW954mp5LiT5Zy6/5aW96LSnMuS7tjjmipgz5Lu2N-aKmA/p-5bd8253082acdd181d02fa47/49450b4d/cr/s/q.jpg',
        'https://imgcps.jd.com/ling4/2922989/5bCd5ZOB6LSo5aW96Iy2/5aSa5Lmw5LyY5oOgMuS7tjnmipjotbc/p-5bd8253082acdd181d02f9f2/c9995f0d/cr/s/q.jpg',
        'https://imgcps.jd.com/ling4/100012043978/5ZiJ5aqa5LmQ5aW954mp5LiT5Zy6/54iG5qy-5aW96LSn5L2O5Lu356eS5p2A/p-5bd8253082acdd181d02fa28/cf673d15/cr/s/q.jpg',
        'https://imgcps.jd.com/ling4/100013675996/576O5aaG5aW954mp5LiT5Zy6/5aW96LSnMuS7tjjmipgz5Lu2N-aKmA/p-5bd8253082acdd181d02fa75/abbad4f5/cr/s/q.jpg'
      ]
    }
  },
  methods: {
    fun: function () {
      setInterval(this.play, 1500)
    },
    play: function () {
      this.n++
      if (this.n === this.img.length) {
        this.n = 0
      }
    }
  },
  mounted: function () {
    this.fun()
  }
}
</script>

<style scoped>
*{
    margin:0;
    padding:0;
}
body{
    background:#F4F4F4;
    overflow-x: hidden;
    overflow-y:scroll;
}
.lunbo{
  width:800px;
  height:600px;
  float: center;
  margin:0 auto;
}
ul{
    list-style-type: none;
}
html,body{
    max-width:1200px;
    height:100%;
    margin:0 auto;
    white-space:nowrap;
}
.banner{
    position:relative;
}
.banner .banner-img{
    position:absolute;
    bottom:5px;
    margin-left:auto;
    margin-right:auto;
    color:#fff;
}
.banner .banner-img li{
    display: inline-block;
    background:rgba(0, 0, 0, .3);
    border-radius: 50%;
    padding:5px;
    margin:5px;
}
.banner .banner-img ul{
    text-align: center;
}
.banner .banner-img .selected {
    background: rgba(0, 0, 0, .9);
}
.banner img{
    margin-left: auto;
    margin-right: auto;
    float: center;
}
.banner .banner-circle{
    position:absolute;
    bottom:5px;
    color:#fff;
    border:1px red solid;
}
.banner .banner-circle li{
    display: inline-block;
    background:rgba(0, 0, 0, .3);
    border-radius: 50%;
    padding:5px;
    margin:10px;
    border:1px red solid;
}

</style>
