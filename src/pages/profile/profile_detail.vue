<template>
    <f7-page id="profile_detail">
        <f7-navbar title="个人资料" back-link="返回" sliding></f7-navbar>
        <f7-list>
            <f7-list-item class="item-link" @click="changeProfileImg()">
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
        checkImg(e){//后期需要进行更改哦
            var vm = this;

            var myApp = new Framework7();

            var $$ = Dom7;

            var myPhotoBrowserStandalone = myApp.photoBrowser({
                 photos:[
                    "static/img/profile_img.bedfd1f.jpeg"
                 ]
             });
            vm.$nextTick(function(){//隐藏不必要的内容
                $$(".photo-browser .photo-browser-close-link span").text('返回');
                $$(".photo-browser  .no-toolbar .toolbar").hide();
                $$(".photo-browser .navbar .navbar-inner .center").hide();
             });

            myPhotoBrowserStandalone.open();

            //如果提供了事件对象，则这是一个非ie的浏览器
            if(e && e.stopPropagation){
                //因此它是支持w3c的stopPropagation()方法
                e.stopPropagation();
            }else{
                //否则，我们需要使用ie的方式来取消事件冒泡
                window.event.canselBubble = true;
            }
        },
        changeProfileImg(){
            //更改我的头像avatar
            var myApp = new Framework7();

            var buttons = [
                {
                    text:"拍照",
                    onClick:function(){
                        myApp.alert('获取拍照的api进行拍照');
                    }
                },
                {
                    text:"从手机相册选择",
                    onClick:function(){
                        myApp.alert("获取本地相册的api");
                    }
                },
                {
                    text:"取消",
                    color:'gray'
                }
            ];
            myApp.actions(buttons);
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
                    border-radius:6px;
                    width:64px;
                    height:64px;
                }
            }
            

        }
    }
</style>