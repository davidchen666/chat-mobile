<template>
  <div>
<!--     <mt-cell v-for="element in messageList" :key="element.id" :title="element.userName"> -->
<!--        <span> -->
          <!-- {{element.lastContent.length+element.userName.length*2 <= 22 ? element.lastContent.substring(0,22-element.userName.length*2) : element.lastContent.substring(0,22-element.userName.length*2)+'...'}}  -->
          <!-- {{element.lastContent.length+element.userName.length*2}} -->
        <!-- </span>
        <img slot="icon" :src="element.picUrl" width="120" height="120">
        <mt-badge size="large" type="warning" color="red" v-if="element.newCount>0"> {{element.newCount}}</mt-badge>
    </mt-cell> -->

    <div class="my-cell" v-for="element in messageList" :key="element.id">
      <table border="0" cellspacing="0" cellpadding="0px">
        <tr>
          <td rowspan="2" class="tb-left" align="center"><img :src="element.picUrl"></td>
          <td class="tb-middle tb-middle-top"> {{element.userName.length<=9 ? element.userName:element.userName.substring(0,9)+'...'}}</td>
          <td class="tb-right tb-right-top" vertical-align= "bottom">{{element.cDate}}</td>
        </tr>
        <tr>
          <td class="tb-middle-bottom"> {{element.lastContent.length<=15 ? element.lastContent:element.lastContent.substring(0,15)+'...'}}</td>
          <td class="tb-right" align="center" cellpadding="10px"><i v-if="element.newCount>0">{{element.newCount}}</i></td>
        </tr>
      </table>
    </div>

  </div>
</template>
<script>
import {Cell,Badge } from 'mint-ui';
export default {
  name: 'message',
  components:{
    Cell,
    Badge,
  },
  props:['messageList'],
}
</script>
<style>
.mint-cell{
  border-bottom: 1px solid lightgray;
}
.mint-cell-wrapper {
  font-size: 1.5em;
  height: 150px;
}
.mint-cell-value{
  font-size: 1.2em;
}
.mint-cell-wrapper .mint-cell-value span{
  font-size: 0.5em;
}
.mint-cell-label {
  font-size: 0.5em;
}

.my-cell{
  width: 100%;
  height: 150px;
  /* background: grey; */
  border-bottom: 1px solid lightgray;
  color: #888;
}
.my-cell table{
  width: 100%;
  height: 150px;
  /* background: grey; */
  /* border-bottom: 1px solid lightgray; */
}
.my-cell table img{
  width:130px; 
  height:130px;
  /* padding: 6px; */
}
.my-cell table .tb-left{
  width: 150px;
  height: 150px;
  padding-right: 15px;
}
/* .my-cell table .tb-middle-top{
   width: 200px; 
  height: 88px;
} */
.my-cell table .tb-right{
  width: 195px;
  position:relative;
  font-size:0.8em;
  /* background: yellow; */
}
.my-cell table .tb-right-top, .tb-middle-top{
  vertical-align: bottom;
  height: 88px;
}
.my-cell table .tb-middle-top{
  font-size: 1.5em;
  color: #333;
}
.my-cell table .tb-right i{
  display:block;
  background:#f00;
  /* border-radius:35%; */
    border-top-left-radius: 71%;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 71%;
    width: 65px;
    height: 41px;
  top:0px;
  right:0px;
  color: white;
  border: 20px;
  /* background: red; */
  /* position:absolute; */
}
.my-cell table .tb-middle-bottom{
  height: 58px;
  vertical-align: center;
  font-size: 0.9em;
}
/* 
.my-cell .showData{
  width: 20%;
  background: yellow;
} */
</style>


