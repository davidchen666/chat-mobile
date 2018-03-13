<template>
<div class="message-detail">
  <div class="log-content">
    <!-- <input type="text" v-focus="focusState"> -->
    <!-- <mt-cell title="标题文字" value=" "/>
    <mt-cell title=" " value="带链接带链接带链接带链接带链接带链接带链接带链接带链接带链接带链接带链接带链接带链接带链接"/>
    <mt-cell title=" " value="带链接"/>
    <mt-cell title="带链接带链接带链接带链接带链接" value=" "/>
</mt-cell> -->
    <div class="msg-single">
      <div class="img-left"><img src="../../../static/headPic/5.jpg" width="120px" height="120px" alt=""></div>
      <div class="msg-content"><span>hello带链接带链接带链接hello word hahah带链接带链接带链接ffffffffkkkkkk</span></div>
      <div class="img-right"></div>
      <div class="clear"></div>
    </div>
    <div class="msg-single">
      <div class="img-left"></div>
      <div class="msg-content">
        <span>
          hello带链接带链接带链接hello word hahah带链接带链接带链接ffffffffkkkkkk
        </span>
      </div>
      <div class="img-right"></div>
      <div class="clear"></div>
    </div>
    <div class="msg-single">
      <div class="img-left"></div>
      <div class="msg-content">
        <span>
          你好
        </span>
      </div>
      <div class="img-right"></div>
      <div class="clear"></div>
    </div>
    <!-- <div class="right"></div> -->
    <!-- <div class="msg-single">
      <div class="img-left"></div>
      <div class="msg-content">hello带链接带链接带链接hello word hahah带链接带链接带链接ffffffffkkkkkk</div>
      <div class="img-right"></div>
      <div class="clear"></div>
    </div> -->
  </div>
  <div class="input-content">
    <div class="input-inner">
      <mt-field label=" " v-focus="focusState" @keyup.enter.native="sendMessage($event)" placeholder="请输入消息内容" :disableClear="isDisableClear" v-model="msgVal">
        <mt-button type="primary" size="small" @click.native="sendMessage($event)">发送</mt-button>
      </mt-field>
    </div>
  </div>
</div>
</template>
<script>
import { Field, Cell, Toast } from 'mint-ui';
export default {
  data(){
    return {
      msgVal:'',
      isDisableClear:true,
      focusState:true,
      // attrData:{vFocus:true},
    }
  },
  components:{
    Field,
    Cell,
    Toast
  },
  directives: {
    focus: {
      // 指令的定义
      inserted: function (el) {
        el.focus()
      },
      update: function (el, {value}) {
        if (value) {
          el.focus()
        }
      }
    }
  },
  methods:{
    sendMessage(key){
      // console.log(key,'<---->');
      console.log(this.msgVal);
      if(this.msgVal){
        this.msgVal = '';
        this.focusState = true;
      }else{
        Toast({
          message: '不能发送空消息哦',
          position: 'middle',
          duration: 2000
        });
      }
      // var input = document.getElementsByClassName("mintFieldCore");
      // input.focus();
    }
  }
}
</script>
