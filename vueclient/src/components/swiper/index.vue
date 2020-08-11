<template>
  
  <div class="banner">
    <ul class="clearfix">
      <router-link
        v-for="item of data"
        :key="item._id"
        :to="{name:'detail',params:{_id:item._id},query:{collectionName:collectionName}}"
        tag="li"
      >
        <img :src="item.banner" alt=""/>
        <div class="text-box">
          <h2>{{item.title}}</h2>
          <p>{{item.sub_title}}</p>
        </div>
      </router-link>
      
    </ul>
  </div>
  
</template>

<script>
  import Swipe from './js/swipe.js';
  // console.log('swiper',Swipe)
  import $ from 'jquery';
  export default {
    name:'banner',
    props:{
	data:{
		type:Array,
		default(){
			return []
		},
	},
	collectionName:{
		type:String,
		default:"",
	}	
	},
    components:{},
    mounted(){
      // console.log('mounted');
      this.data.length > 0 && this.initSwiper()
    },
    updated(){
      // console.log('updated')
      this.initSwiper()
    },
    methods:{
      initSwiper(){
        new Swipe($('.banner')[0],{
          auto:2000,
          continuous:true,
          stopPropation:true,
          callback:function (index,element){
            $('.banner ol li').removeClass('active');
            $('.banner ol li').eq(index).addClass('active');
          }
        }) 
      }
    }
  }
</script>

<style scoped>
  .banner{position: relative;overflow: hidden; z-index: 1}
  .banner ul li{width:6.4rem;float:left;position: relative;}
  .banner ul li img{width:100%; display:block;}
  .banner ul li .text-box{width:5.8rem; padding:0 0.3rem;height:1.24rem; position:absolute; left:0; bottom:0; color:#fff; background:rgba(0,0,0,0.5);}
  .text-box h2{ font-size:0.3rem; font-weight:normal; margin-top:0.22rem; line-height:100%; margin-bottom:0.22rem; overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
  .text-box p{ line-height:100%;}
  
  .banner ol{position:absolute; right:0.2rem;bottom:0.2rem;}
  .banner ol li{width:0.15rem;height:0.15rem; background:#5477b2; float:left; border-radius:50%; margin-right:0.08rem;}
  .banner ol li.active{ background:#fff;}
</style>
