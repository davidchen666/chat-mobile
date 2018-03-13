<template>
<div class="user-remark">
  <mt-field label="备注名" placeholder="请输入备注名" v-model="remarkName"></mt-field>
  <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="mobile"></mt-field>
  <mt-button type="primary" size="large" @click.native="saveInfo">完成</mt-button>
</div>
</template>
<script>
import { Field, Button } from 'mint-ui';
export default {
  name:'userRemark',
  compoments:{
    Field,
    Button
  },
  data(){
    return{
      remarkName:'',
      mobile:''
    }
  },
  created(){
    this.remarkName = this.$route.query.remarkName;
    this.mobile = this.$route.query.mobile;
  },
  methods:{
    saveInfo(){
      console.log(this.remarkName,this.mobile);
      history.go(-1);
    }
  }
}
</script>
<style>

</style>
