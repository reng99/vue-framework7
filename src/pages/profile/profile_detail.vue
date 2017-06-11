<template>
    <f7-page id="profile_detail">
        <f7-navbar title="个人资料" back-link="返回" sliding></f7-navbar>
        <f7-list>
            <f7-list-item class="item-link" @click="jumpTo()">
                <div class="item-title">
                    <span>头像</span>
                </div>
                <div class="item-after">
                    <!--传递event事件需要在前面加上一个$号，也就是$event-->
                    <img :src="profile_img_path" alt="peofile_img" class="profile_img" @click="checkImg($event)">
                </div>
            </f7-list-item>
            <f7-list-item class="item-link">
                <div class="item-title">
                    <span>昵称</span>
                </div>
                <div class="item-after">
                    <span>Reng Jia</span>
                </div>
            </f7-list-item>
            <f7-list-item>
                <div class="item-title">
                    <span>账号</span>
                </div>
                <div class="item-after">
                    <span>1234567</span>
                </div>
            </f7-list-item>
        </f7-list>
        <f7-list>
            <f7-list-item>
                <div class="item-title">
                    <span>性别</span>
                </div>
                <div class="item-after">
                    <span>男</span>
                </div>
            </f7-list-item>
            <f7-list-item>
                <div class="item-title">
                    <span>个性签名</span>
                </div>
                <div class="item-after">
                    <span>I pray to the God,"not today".</span>
                </div>
            </f7-list-item>
        </f7-list>
    </f7-page>
</template>
<script>
export default{
    name:"profile_detail",
    data(){
        return {
            profile_img_path:"static/img/profile_img.bedfd1f.jpeg",
        }
    },
    methods:{
        checkImg(e){
            console.log("查看个人的图片");

            //如果提供了事件对象，则这是一个非ie的浏览器
            if(e && e.stopPropagation){
                //因此它是支持w3c的stopPropagation()方法
                e.stopPropagation();
            }else{
                //否则，我们需要使用ie的方式来取消事件冒泡
                window.event.canselBubble = true;
            }
        },
        jumpTo(){
            console.log("跳转模拟框");
        }
    }
}
</script>
<style lang="less" scoped>
    @import "../../css/common.less";
    #profile_detail{
        .list-block{
            margin:0;
            margin-top:12px;
            .item-title{
                color:@color_33;
            }
            .item-after{
                max-height:64px;
                span{
                    font-size:12px;
                }
                .profile_img{
                    display:block;
                    width:64px;
                    height:64px;
                }
            }
            

        }
    }
</style>