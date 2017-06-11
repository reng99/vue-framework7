<template>
    <div id="profile">
        <!--个人信息-->
        <f7-list class="block0">
            <f7-list-item  link="/profile/detail/">
                <div class="item-title">
                    <img src="../images/profile/profile_img.jpeg" alt="profile_img" class="profile">
                    <div class="account">
                        <h3>Reng Jia</h3>
                        <p>账号：{{account}}</p>
                    </div>
                </div>
                
            </f7-list-item>
        </f7-list>
        <f7-list class="block1">
            <f7-list-item link="/profile/diamond/">
                <div class="item-title">
                    <img src="../images/profile/profile_red_diamond.jpg" alt="red_diamond_img"> 
                    <span>我的红钻</span>
                </div>
                <div class="item-after">
                    10910红钻／193200积分
                </div>
            </f7-list-item>
            <f7-list-item class="item-link">
                <div class="item-title">
                    <img src="../images/profile/profile_bean.png" alt="beans_img"> 
                    <span>我的某豆</span>
                </div>
                <div class="item-after">
                    2000某豆
                </div>
            </f7-list-item>
            <f7-list-item link="/diamond/points/">
                <div class="item-title">
                    <img src="../images/profile/profile_points.png" alt="points_img"> 
                    <span>我的积分</span>
                </div>
                <div class="item-after">
                    888积分
                </div>
            </f7-list-item>
        </f7-list>
        <f7-list class="block3">
            <f7-list-item class="item-link">
                <div class="item-title">
                    <img src="../images/profile/profile_download.png" alt="domnload_img"> 
                    <span>我的下载</span>
                </div>
            </f7-list-item>
            <f7-list-item class="item-link">
                <div class="item-title">
                    <img src="../images/profile/profile_help_center.png" alt="help_center_img"> 
                    <span>帮助中心</span>
                </div>
            </f7-list-item>
            <f7-list-item class="item-link">
                <div class="item-title">
                    <img src="../images/profile/profile_check_version.png" alt="check_version_img"> 
                    <span>检查版本</span>
                </div>
                <div class="item-after">3.1.0</div>
            </f7-list-item>
            <f7-list-item class="item-link">
                <div class="item-title">
                    <img src="../images/profile/profile_gear.png" alt="setting_img">
                    <span>设置</span>
                </div>
            </f7-list-item>
        </f7-list>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                account:"1234567"
            }
        },
        methods:{
        }
    }
</script>
<style lang="less" scoped>
   @import "../css/common.less";
    #profile{
        margin-top:-44px;
        .list-block{
            margin:0;
            margin-top:0px;
            margin-bottom:10px;
            .item-title{
                display:flex;
                justify-content:column;
                img{
                    display:block;
                    width:24px;
                    height:24px;
                    margin-right:3px;
                }
                i{
                    width:24px;
                    height:24px;
                    margin-right:3px;
                }
            }
            .item-after{
                font-size:13px;
            }
        }
        .block0{
            .item-title{
                .profile{
                    width:64px;
                    height:64px;
                    margin-right:10px;
                    border-radius:6px;
                }
                .account{
                    margin-top:8px;
                    h3{
                        margin:0;
                    }
                    p{
                        font-size:12px;
                        margin:0;
                        color:@color_66;
                    }
                }
            }
            // .item-after{
            //     display:flex;
            //     flex-direction:column;
            //     margin:0;
            //     margin-right:100px;
            //     text-align:left;
            //     p{
            //         flex:1;
            //         margin:0;
            //     }
            // }

        }
    }
</style>