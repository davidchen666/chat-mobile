<template>
<div class="user-detail">
  <!-- <mt-cell :title="userInfo.remarkName?userInfo.remarkName:userInfo.nickName" value="haha" label="描述信息">
    <span>{{userInfo.gender}}</span>
    <img slot="icon" :src="userInfo.picUrl" width="140" height="140">
  </mt-cell>
  <mt-cell title="标题" label="描述信息" is-link></mt-cell> -->
  <div class="top-info">
    <table border="0" cellspacing="0" cellpadding="0px">
      <tr>
        <td rowspan="3" width="250" height="250"><img :src="userInfo.picUrl" width="220" height="220"></td>
        <td height="120" vertical-align="bottom" class="title-name">
          {{userInfo.remarkName?userInfo.remarkName:userInfo.nickName}} 
          <i class="fa fa-female" aria-hidden="true" v-show="userInfo.gender == 2"></i>
          <i class="fa fa-male" aria-hidden="true" v-show="userInfo.gender == 1"></i>
        </td>
      </tr>
      <tr>
        <td class="small-name" vertical-align="top"> ID：{{userInfo.id}}</td>
      </tr>
      <tr>
        <td class="small-name" vertical-align="top"> 昵称：{{userInfo.nickName}}</td>
      </tr>
    </table>
  </div>
  <mt-cell title="设置备注和描述" label="" is-link @click.native="setRemarkInfo"></mt-cell>
  <mt-cell :title="'地区：' + userInfo.address[0] + ' ' + userInfo.address[1] " label="" is-link></mt-cell>
  <div class="btn">
    <mt-button type="primary" size="large" @click.native="sendMessage">发消息</mt-button>
  </div>
    
</div>
</template>
<script>
import { Cell , Button} from 'mint-ui';
export default {
  compoments:{
    Cell,
    Button
  },
  data(){
    return{
      userInfo:'',
    }
  },
  created(){
    console.log(this.$route.query);
    this.userInfo = this.$route.query;
  },
  methods:{
    setRemarkInfo(){
      this.$router.push({name:'setUserRemark',query:this.userInfo});
    },
    sendMessage(){
      this.$router.push({name:'messageDetail',query:this.userInfo});
    }
  }
}
</script>
<style>

</style>
