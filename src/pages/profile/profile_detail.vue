<template>
    <f7-page id="profile_detail">
        <f7-navbar title="个人资料" back-link="返回" sliding></f7-navbar>
        <f7-list>
            <f7-list-item class="item-link">
                <div class="item-title">
                    
                </div>
                <div class="item-after">
                <img :src="profile_img_path" alt="peofile_img" class="profile_img">
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
    #profile_detail{
        .list-block{
            margin:0;
            margin-top:12px;
            .item-after{
                margin:0;
                .profile_img{
                    display:block;
                    width:64px;
                    height:64px;
                }
            }

        }
    }
</style>