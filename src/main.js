// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import swal from 'sweetalert'
import Cookies from './assets/js/cookie'
import _g from './assets/js/global'
import store from './vuex/store'
import moment from 'moment';
import filter from './assets/js/filter'
import {i18n, vueI18n} from './lang/lang'

import {cancelArr} from "./assets/js/baseApi"

import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.css'
import './assets/css/base.scss';
import './assets/css/global.scss';

import VueTree from '@ssthouse/vue-tree-chart'
Vue.component('vue-tree', VueTree)

import {
    Pagination,
    Button, 
    Select,   
    Option,  
    Table,
    TableColumn,
    Form,
    FormItem,
    Input,
    Loading,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Dialog,
    Tooltip,
    Message, 
    MessageBox}from 'element-ui'

Vue.use(Pagination)
Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Loading)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Dialog)
Vue.use(Tooltip)


Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;
Vue.prototype.$swal = swal;
Vue.prototype.$moment = moment

window.cookie = Cookies;
window._g = _g;
window.store = store;
vueI18n(Vue)
router.beforeEach((to, from, next) => {
    while(cancelArr.length>0){
        cancelArr.shift().cancel();
    }
    
    next();
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    filter,
    i18n,
    template: '<router-view></router-view>'
})
