<template>
    <f7-page id="profile_detail">
        <f7-navbar title="个人资料" back-link="返回" sliding></f7-navbar>
        <f7-list>
            <f7-list-item class="item-link">
                <div class="item-title">
                    <span>头像</span>
                </div>
                <div class="item-after">
                    <img :src="profile_img_path" alt="peofile_img" class="profile_img">
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
            <f7-list-item class="item-link">
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
                margin:0;
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