<template>
  <div class="header">
    <mt-header :title="headerTitle">
        <router-link to="/" slot="left" v-show="$route.name !== 'messages' && $route.name !== 'friends' && $route.name !== 'my'">
          <i class="fa fa-angle-left fa-2x" aria-hidden="true" @click="goBack"></i>
          <!-- <mt-button icon="back" size="large">返回</mt-button> -->
          <!-- <mt-button @click="handleClose">关闭</mt-button> -->
        </router-link>
        <!-- <i class="fa fa-spinner fa-pulse fa fa-fw" aria-hidden="true" slot="right"></i> -->
        <i class="fa fa-plus fa-1x" aria-hidden="true" slot="right"></i>
        <!-- <mt-button icon="more" slot="right"></mt-button> -->
        <!-- <mt-button icon="more" ></mt-button>  -->
    </mt-header>
  </div>
</template>
<script>
export default {
  name:'header',
  props:['headerTitle'],
  methods:{
    goBack(){
      // alert('back');
      history.go(-1);
    }
  }
}
</script>



