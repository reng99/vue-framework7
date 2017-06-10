
<template>
  <f7-page id="exchange-points-page">
    <f7-navbar title="我的积分" back-link="返回" sliding></f7-navbar>
    <div class="top">
        <p @click="showRule()">我的积分 <i class="f7-icons">help</i></p>
        <b>{{initPoints}}</b>
    </div>
    <div class="content-block-title">可兑换红钻（10积分兑换1红钻）</div>
    <f7-list>
        <f7-list-item>
            <div class="item-title"><img src="../../../images/profile/profile_red_diamond.jpg" alt="red_diamond"></div>
            <div class="item-input">
                <input type="number" v-model="exchangeDiamonds"/>
            </div>
        </f7-list-item>
    </f7-list>
    <!--<a href="#" class="button active" @click="commit()" disabled>兑换红钻</a>-->
    <a href="#" class="button active" @click="commit()">兑换红钻</a>
  </f7-page>
</template>

<script>

export default {
    name:"exchange-points-page",
    data(){
        return{
            initPoints:2300,
        }
    },
    computed:{
        exchangeDiamonds(){
            var vm = this;
            return vm.initPoints / 10;
        }
    },
    mounted(){
    },
    methods:{
        showRule(){
            var myApp = new Framework7();
            myApp.modal({
                title:"兑换帮助",
                text:`<div>
                    <h3>相关的帮助的内容！</h3>
                </div>`,
                buttons:[
                    {
                        text:"我知道了",
                        onClick:function(){
                            console.log("我知道了");
                        }
                    }
                ]
            })
        },
        commit(){
            console.log("commit");
        }
    }
}
</script>
<style lang="less" scoped>
    @import "../../../css/common.less";
    #app #exchange-points-page .page-content{
        margin-top:100px;
    }
    #exchange-points-page{
        .top{
            width:100%;
            height:90px;
            padding-top:30px;
            background:@color_white;
            text-align:center;
            p{
                font-size:12px;
                text-align:center;
                margin:0;
                i{
                    font-size:12px;//更改默认的framework-icons的尺寸
                }
            }
            b{
                font-size:30px;
                color:@color_red;
            }
        }
        .list-block{
            margin-bottom:10px;
            .item-title{
                margin-right:8px;
                img{
                    width:24px;
                    height:24px;
                }
            }
        }
        .button{
            margin:0 8px;
            height:34px;
            line-height:34px;
        }
    }
</style>