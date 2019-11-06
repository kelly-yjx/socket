import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/home.vue'
import Login from '@/page/login/index.vue'
import AddressList from '@/page/addressList/addressList.vue'
import Mine from '@/page/mine/mine.vue'
import Message from '@/page/message/message.vue'

import Layout from '@/page/layout/layout' 
const that = this
const _import = require('./_import')
Vue.use(Router)


const router = new Router({
    routes: [{
        path: '/login',
        name: 'login',
        component:Login,
        // redirect:'/login/login'
    },{
        path: '/addressList',
        name: 'addressList',
        component: AddressList,
    },{
        path: '/mine',
        name: 'mine',
        component: Mine,
    },{
        path: '/message',
        name: 'message',
        component: Message,
    },{
        path: '/',
        redirect:'/message'
        
    }]
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        let token = localStorage.getItem('token')
        if (!token) {
            next()
        } else {
            next({
                path: '/login'
            })
        }
    } else {
        next()
    }


})

export default router