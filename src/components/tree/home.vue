<template>
    <div class="wrapper" >

        <home-header :isCollapse="isCollapse" @collapseAsideNavbar="collapse"></home-header>

        <div class="body">
            <div class="menu">
                <el-menu 
                    :default-active="activeItem" 
                    background-color="#222d32"
                    text-color="#ddd"
                    active-text-color="#ffbf00"
                    class="el-menu-vertical"  
                    :unique-opened="isUnique"
                    :collapse="isCollapse">
                    <!-- <router-link to="/main/control/dockercontrol" v-if="isLinux">
                        <el-menu-item index="dockerControl"> 
                            <i class="fa fa-linux m-r-14" ></i>
                            <span slot="title">{{$t('home.docker')}}</span>
                                                                
                        </el-menu-item>
                    </router-link>
                    <router-link to="/main/control/windowscontrol"  v-if="!isLinux">
                        <el-menu-item index="windowsControl"> 
                            <i class="fa fa-windows m-r-14" ></i>
                            <span slot="title">{{$t('home.winPackage')}}</span>
                            
                        </el-menu-item>
                    </router-link> -->
                </el-menu>
            </div>
            
            <div class="content" >
                <div  class="cf">
                    <transition name="fade" mode="out-in">
                        <!-- <keep-alive> -->
                        <router-view></router-view>
                        <!-- </keep-alive> -->
                    </transition>
                </div>
            </div>
            
        </div> 
        <home-footer></home-footer>  
    </div>

</template>



<style lang='scss' scoped>
    @import "../assets/css/colors";
    $nav-icon-color : $primary-color; 
    $header-height : 70px;
    $aside-width : 210px;

    .wrapper{
        display: -webkit-flex;
        display: flex;
        height: 100vh;
        flex-flow: column nowrap;
        // overflow: hidden;    
        .body{
            display: -webkit-flex;
            flex: 1;
            height: 100%;
            display: flex;
            flex-flow: row nowrap;
            .menu{
                height: 100%; 
                overflow-y: auto;
                overflow-x: hidden;
                .el-menu-vertical:not(.el-menu--collapse) {
                    height: 100%;
                    width: $aside-width;
                    box-sizing: border-box;
                    i {
                        display: inline-block;                    
                    }

                    .el-menu-item-group, .el-menu-item-group li{
                        background-color: #181f23 !important;
                    }
                    .is-active{
                        background-color: rgb(27,36,40) !important;
                    }
                }
                .securityicon{
                    margin-left: -2px;
                }
                .el-menu--collapse{
                    height: 100%;
                }
            }
            .content{
                flex:1;
                margin-right: 0;
                height: 100%;
                overflow-y: auto;
                overflow-x: hidden;
                .fade-enter-actice, .fade-leave-active{
                    transition: opacity .5s
                } 
                .fade-enter, .fade-leave-active{
                    opacity: 0;
                }
            }
        }

        
    }

    
</style>

<script>
    import {mapState} from 'vuex'
    import homeHeader from './main/header'
    import homeFooter from './main/footer'
    import {linuxOs, windowsOs} from '../assets/js/constant'
    import { getLocal } from '../assets/js/storage'
    import {getOsTypeApi} from "./restfulapi/installStatusApi"

    export default {
        name: 'home',
        data() {
            return {
                defaultIconColor:"#909399",
                activeIconColor: "#ffbf00",
                isCollapse: false,
                activeItem: 'dockerControl',
                isUnique: true,

                isLinux: true,
            };
        },
        methods: {
            collapse(){
                this.isCollapse = this.isCollapse? false: true;
            },

            getOs(){
                getOsTypeApi().then((res) => {
                    handleResponse(res, (res) => {
                        if(res.status == "success"){
                            let os = res.data;
                            if(osType == windowsOs){
                                this.isLinux = false;
                                this.activeItem = "windowsControl"
                            }else{
                                this.isLinux = true;
                            }
                        }
                    })
                })
            }
        },

        created(){
            this.activeItem = this.$route.meta.menuname;
            let osType = getLocal("agent-os");
            if(osType == windowsOs){
                this.isLinux = false;
                this.activeItem = "windowsControl"
            }else{
                this.isLinux = true;
            }

        },


        watch: {
            $route(to, from){
                this.activeItem = to.meta.menuname;
                
            },
        },
        
        
        
        components:{
            homeHeader,
            homeFooter
        },
    }
</script>