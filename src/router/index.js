import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Messages from '@/components/Home/Messages'
import Friends from '@/components/Home/Friends'
import My from '@/components/Home/my'
import UserDetail from '@/components/Home/UserDetail'
import MessageDetail from '@/components/Home/MessageDetail'
import SetUserRemark from '@/components/Home/SetUserRemark'

import Login from '@/components/Login/Login'
import Register from '@/components/Login/Register'

Vue.use(Router)
//process.env.NODE_ENV === 'development' 开发模式
//process.env.NODE_ENV === 'production' 正式模式（build打包）
export default new Router({
    mode: 'history',
    base: process.env.NODE_ENV === 'production'?'/chat-mobile/':'',
    routes: [{
            path: '/',
            redirect: '/home/messages',
            // component: Home,
            // children: [{
            //     path: '/home/messages',
            //     name: 'messages',
            //     component: 'Messages'
            // }]
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            children: [{
                    path: '/home/messages',
                    name: 'messages',
                    component: Messages
                },
                {
                    path: '/home/friends',
                    name: 'friends',
                    component: Friends
                },
                {
                    path: '/home/my',
                    name: 'my',
                    component: My
                },
                {
                    path: '/home/userdetail',
                    name: 'userDetail',
                    component: UserDetail
                },
                {
                    path: '/home/messagedetail',
                    name: 'messageDetail',
                    component: MessageDetail
                },
                {
                    path: '/home/setuserremark',
                    name: 'setUserRemark',
                    component: SetUserRemark
                },
            ]
        }
    ]
})