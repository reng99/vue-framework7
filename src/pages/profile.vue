<template>
    <div id="profile">
        <f7-list class="block1">
            <f7-list-item link="/profile/diamond/">
                <div class="item-title">
                    <img src="../images/profile/diamond/red_diamond.jpg" alt="red_diamond_img"> 
                    <span>我的红钻</span>
                </div>
                <div class="item-after">
                    10910红钻／193200积分
                </div>
            </f7-list-item>
            <f7-list-item class="item-link">
                <div class="item-title">
                    <img src="../images/profile/diamond/red_diamond.jpg" alt="red_diamond_img"> 
                    <span>我的某豆</span>
                </div>
                <div class="item-after">
                    0某豆
                </div>
            </f7-list-item>
        </f7-list>
        <f7-list class="block3">
            <f7-list-item link="/profile/diamond/">
                <div class="item-title">
                    <img src="../images/profile/diamond/red_diamond.jpg" alt="red_diamond_img"> 
                    <span>我的下载</span>
                </div>
            </f7-list-item>
            <f7-list-item class="item-link">
                <div class="item-title">
                    <img src="../images/profile/diamond/red_diamond.jpg" alt="red_diamond_img"> 
                    <span>帮助中心</span>
                </div>
            </f7-list-item>
            <f7-list-item class="item-link">
                <div class="item-title">
                    <img src="../images/profile/diamond/red_diamond.jpg" alt="red_diamond_img"> 
                    <span>意见反馈</span>
                </div>
            </f7-list-item>
            <f7-list-item class="item-link">
                <div class="item-title">
                    <img src="../images/profile/diamond/red_diamond.jpg" alt="red_diamond_img"> 
                    <span>检查版本</span>
                </div>
                <div class="item-after">3.1.0</div>
            </f7-list-item>
            <f7-list-item class="item-link">
                <div class="item-title">
                    <img src="../images/profile/diamond/red_diamond.jpg" alt="red_diamond_img"> 
                    <span>隐私与安全</span>
                </div>
            </f7-list-item>
            <f7-list-item class="item-link">
                <div class="item-title">
                    <img src="../images/profile/diamond/red_diamond.jpg" alt="red_diamond_img"> 
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

            }
        },
        methods:{

        }
    }
</script>
<style lang="less" scoped>
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
            }
            .item-after{
                font-size:13px;
            }
        }
    }
</style>