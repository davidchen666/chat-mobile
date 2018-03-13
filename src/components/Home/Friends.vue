<template>
<div class="friends">
  <!-- <div class="my-cell" v-for="element in messageList" :key="element.id">
    <table border="0" cellspacing="0" cellpadding="0px">
      <tr>
        <td rowspan="2" class="tb-left" align="center"><img :src="element.picUrl"></td>
        <td class="tb-middle tb-middle-top"> {{element.userName.length<=9 ? element.userName:element.userName.substring(0,9)+'...'}}</td>
        <td class="tb-right tb-right-top" vertical-align= "bottom"></td>
      </tr>
      <tr>
        <td class="tb-middle-bottom"> </td>
        <td class="tb-right" align="center" cellpadding="10px"></td>
      </tr>
    </table>
  </div> -->
  
  <!-- <mt-tab-container v-model="active" :swipeable="swipeableData">
    <mt-tab-container-item id="tab-container2">
      <mt-cell v-for="n in 5" title="tab-container 2" :key="n">{{n}}</mt-cell>
    </mt-tab-container-item>
    <mt-tab-container-item id="tab-container3">
      <mt-cell v-for="n in 17" title="tab-container 3" :key="n">{{n}}</mt-cell>
    </mt-tab-container-item>
  </mt-tab-container> -->
  <mt-navbar v-model="selected" :swipeable="swipeableData">
    <mt-tab-item id="1">好友</mt-tab-item>
    <mt-tab-item id="2">群</mt-tab-item>
    <mt-tab-item id="3">聊天室</mt-tab-item>
  </mt-navbar>
  <mt-tab-container v-model="selected" :swipeable="swipeableData">
    <mt-tab-container-item id="1">
      <!-- <router-link :to="{name:'my',params:{userId:val.id}}"> -->
      <mt-cell v-for="val in friendList"  @click.native="getDetail(val)" :key="val.id" :title="val.remarkName?val.remarkName:val.nickName">
        <!-- <span>icon 是图片</span> -->
        <img slot="icon" :src="val.picUrl" width="100" height="100">
      </mt-cell>
      <!-- </router-link> -->
    </mt-tab-container-item>
    <mt-tab-container-item id="2">
      <mt-cell v-for="n in 4" :key="n" :title="'聊天群 ' + n" />
    </mt-tab-container-item>
    <mt-tab-container-item id="3">
      <mt-cell v-for="n in 6" :key="n" :title="'聊天室 ' + n" />
    </mt-tab-container-item>
  </mt-tab-container>
</div>
</template>
<script>
import { TabContainer, TabContainerItem ,Navbar, TabItem} from 'mint-ui';
export default {
  name:'friends',
  props:['friendList'],
  compoments:{TabContainer,TabContainerItem,Navbar, TabItem},
  data(){
    return {
      active:'tab-container2',
      swipeableData:true,
      selected:'1',
    }
  },
  methods:{
    getDetail(val){
      this.$router.push({name:'userDetail',query:val});
      console.log(val.id);
    }
  }
}
</script>



