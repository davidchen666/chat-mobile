<template>
  <div class="login">
    <div class="bigTitle">
      <h1>大 猩 猩 聊 天</h1>
      <h2>
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">登录</mt-tab-item>
          <mt-tab-item id="2">注册</mt-tab-item>
        </mt-navbar>
      </h2>
      <h2>请 登 录</h2>
      <!-- <h5>密码不正确！</h5> -->
    </div>
    <div class="middle">
      <mt-field placeholder="请输入手机号或用户名" state="success" v-model="username"></mt-field>
      <mt-field placeholder="请输入密码" type="password" state="error" v-model="password"></mt-field>
      <mt-field placeholder="请输入验证码" v-model="verifyCode">
        <!-- <img src="../assets/100x100.png" height="45px" width="100px"> -->
        1943
      </mt-field>
      <mt-button type="default" size="large">登 录</mt-button>
      <router-link :to="{name:'register'}">
        <mt-button type="default" size="large">注 册</mt-button>
      </router-link>
    </div>
  </div>
</template>
<script>
import { Field, Button } from 'mint-ui';
import MyHeader from '../Header';
export default {
  name: 'login',
  components:{
    // Field,
    // Button,
    MyHeader
  },
  data(){
    return {
      headerTitle:'登录',
      username:'',
      password:'',
      verifyCode:'',
      selected:'1',
    }
  },
  created(){
    // window.document.body.style.background = " no-repeat fixed!important";
    window.document.body.style.backgroundImage = "url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511847560388&di=d8d07090d8c83190f5c8815f3e7c6b83&imgtype=0&src=http%3A%2F%2Fww2.sinaimg.cn%2Flarge%2F5f245f80jw1fcz41x3ptaj21hc0u0jum.jpg')";
    window.document.body.style.backgroundRepeat = 'no-repeat';
    window.document.body.style.backgroundSize = '250% 250%';
  }
}
</script>
