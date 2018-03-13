<template>
  <div class="home">
    <div class="top">
      <my-header class="my-header" :header-title="headerTitle"></my-header>
    </div>
    <div class="search">
      <mt-search v-model="searchValue" v-show="$route.name === 'messages' || $route.name === 'friends' || $route.name === 'my'"></mt-search> 
    </div>
    <div class="middle">
      <router-view :messageList="messageList" :friendList="friendList"></router-view>
    </div>
    <div class="bottom" >
      <mt-tabbar v-model="selected" v-if="$route.name === 'messages' || $route.name === 'friends' || $route.name === 'my'">
        <mt-tab-item id="messages">
          <router-link :to="{name:'messages'}">
          <i class="fa fa-comment-o fa-5x" aria-hidden="true"></i>
          <span>消息</span>
          </router-link>
        </mt-tab-item>
        <mt-tab-item id="friends">
          <router-link :to="{name:'friends'}">
          <i class="fa fa-address-book fa-5x" aria-hidden="true"></i>
          <span>联系人</span>
          </router-link>
        </mt-tab-item>
        <mt-tab-item id="me">
          <router-link :to="{name:'my'}">
          <i class="fa fa-user-o fa-5x" aria-hidden="true"></i>
          <span>我</span>
          </router-link>
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>

<script>
import { Tabbar, TabItem, Search} from 'mint-ui';
import MyHeader from './Header';
export default {
  name: 'Home',
  components:{
    Tabbar,
    TabItem,
    Search,
    MyHeader,
  },
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App',
      headerTitle:'',
      selected:'messages',
      searchValue:'',
      messageList:{
        userid:1,
        picUrl:'/static/headPic/1.jpg',
        messageContent:[
          {
            msgid:12,
            content:'在吗？',
            cDate:'11-16 16:39',
            state:1
          }
        ]
      },
      messageList:[
        {
          id:1,
          userName:'大猩猩大猩猩大猩猩hhaha',
          lastContent:'你好，在吗,你好，在吗你好，在吗,hahahhhaa',
          newCount:2,
          picUrl:'/chat-mobile/static/headPic/1.jpg',
          cDate:'11-8 13:58',
        },
        {
          id:1,
          userName:'小猩猩',
          lastContent:'你好，我是张三,你好，我是张三你好，',
          newCount:10,
          picUrl:'/chat-mobile/static/headPic/4.jpg',
          cDate:'11-8 13:58',
        },
        {
          id:1,
          userName:'jerry',
          lastContent:'好啊',
          newCount:3,
          picUrl:'/chat-mobile/static/headPic/3.jpg',
          cDate:'11-8 13:58',
        },
        {
          id:1,
          userName:'david',
          lastContent:'see you！',
          newCount:0,
          picUrl:'/chat-mobile/static/headPic/4.jpg',
          cDate:'11-8 13:58',
        },
      ],
      friendList:[
        {
          id:1,
          nickName:'大猩猩大猩猩大猩猩',
          picUrl:'/static/headPic/1.jpg',
          gender:1,
          address:['江苏','南京'],
          mobile:'17099980811',
          remarkName:'',
          messageContent:[
            {
              msgid:12,
              content:'在吗？',
              cDate:'11-16 16:39',
              state:2,  // 1表示未读，2表示已读
              fromUserID:1, //信息来自的用户id
            },
            {
              msgid:13,
              content:'在吗？',
              cDate:'11-16 16:39',
              state:1,  // 1表示未读，2表示已读
              fromUserID:8, //信息来自的用户id
            },
            {
              msgid:14,
              content:'好的哈哈哈哈哈哈哈哈',
              cDate:'11-16 16:39',
              state:1,  // 1表示未读，2表示已读
              fromUserID:1, //信息来自的用户id
            },
          ]
        },
        {
          id:2,
          nickName:'小猩猩',
          picUrl:'/static/headPic/4.jpg',
          gender:2,
          address:['上海','徐汇'],
          mobile:'17099980812',
          remarkName:'王星星',
        },
        {
          id:3,
          nickName:'jerry',
          picUrl:'/static/headPic/3.jpg',
          gender:1,
          address:['江苏','苏州'],
          mobile:'17099980813',
          remarkName:'jerry备注名',
        },
        {
          id:4,
          nickName:'david',
          picUrl:'/static/headPic/4.jpg',
          gender:1,
          address:['上海','闵行'],
          mobile:'17099980814',
          remarkName:'david chen',
        },
        {
          id:5,
          nickName:'猫猫',
          picUrl:'/static/headPic/5.jpg',
          gender:2,
          address:['上海','闵行'],
          mobile:'17099980815',
          remarkName:'毛毛',
        },
      ],
      //websocket相关
      // ws:null, 
      name:'jerry', 
      client_list:{}
    }
  },
  created(){
    // console.log(this.$route);
    this.selected = '';
    // console.log(this.selected,'99999');
    this.loadWebSocket();
  },
  mounted(){
    
  },
  watch:{
    $route(val){
      // console.log(val.name);
      switch (val.name) {
        case 'messages':
          this.headerTitle = `消息`;
          break;
        case 'friends':
          this.headerTitle = `联系人`;
          break;
        case 'my':
          this.headerTitle = `我`;
          break;
        case 'userDetail':
          this.headerTitle = `详细资料`;
          break;
        case 'setUserRemark':
          this.headerTitle = `备注信息`;
          break;
        default:
        this.headerTitle = `消息`;
          break;
      }
    }
  },
  methods:{
    //加载websocket
    loadWebSocket(){
      ///static/swf/WebSocketMain.swf
      if (typeof console == "undefined") {    this.console = { log: function (msg) {  } };}
      // 如果浏览器不支持websocket，会使用这个flash自动模拟websocket协议，此过程对开发者透明
      // console.log(window);
      // console.log(window.WEB_SOCKET_SWF_LOCATION);
      // window.WEB_SOCKET_SWF_LOCATION = "static/swf/WebSocketMain.swf";
      // 开启flash的websocket debug
      // window.WEB_SOCKET_DEBUG = true;

      //建立连接
      let ws = new WebSocket("ws://"+document.domain+":7272");
      // 当socket连接打开时，输入用户名
      // ws.onopen = this.onopen();
      ws.onopen = function(){
        let login_data = '{"type":"login","client_name":"'+"jerry"+'","room_id":"1"}';
        ws.send(login_data);
        console.log('onopen');
        console.log(ws);
      }
      // 当有消息时根据消息类型显示不同信息
      // this.ws.onmessage = this.onmessage(); 
      ws.onmessage = function(e){
        // console.log(e.data);
        let msgData = eval("("+e.data+")");
        console.log(msgData);
      };
      ws.onclose = function() {
      console.log("连接关闭，定时重连");
        connect();
      };
      ws.onerror = function() {
      console.log("出现错误");
      };
    },
    onopen(){
      // if(!name){
      //       show_prompt();
      //   }
      // 登录
      let login_data = '{"type":"login","client_name":"'+this.name.replace(/"/g, '\\"')+'","room_id":"1"}';
      console.log("websocket握手成功，发送登录数据:"+login_data);
      console.log(this.ws);
      this.ws.send(login_data);
    },
    onmessage(e)
    {
        console.log(e.data);
    },
  }
  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
