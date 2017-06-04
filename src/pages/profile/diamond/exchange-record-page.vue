
<template>
  <f7-page id="exchange-record-page">
    <f7-navbar title="兑换记录" back-link="返回" sliding></f7-navbar>
    <f7-list>
        <f7-list-item v-for="(item,key) in imitateList" :key="key">
            <div class="item-title">
                <p>{{item.type | exchangeType}}</p>
                <time>{{item.time}}</time> 
            </div>
            <div class="item-after">+{{item.amount}}</div>
        </f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>

export default {
    data(){
        return {
            imitateList:[// 数据添加--type 为兑换类型（0是积分兑换，1是某豆兑换），time是兑换的时间戳，amount是兑换的数量
                {type:0,time:"2017-06-03",amount:"100"},
                {type:1,time:"2017-06-03",amount:"300"},
                {type:0,time:"2017-06-03",amount:"1000"},
                {type:2,time:"2017-06-03",amount:"1000"},
                {type:0,time:"2017-06-03",amount:"100"},
                {type:1,time:"2017-06-03",amount:"300"},
                {type:0,time:"2017-06-03",amount:"100"},
                {type:1,time:"2017-06-03",amount:"300"},
                {type:0,time:"2017-06-03",amount:"1000"},
                {type:1,time:"2017-06-03",amount:"300"},
                {type:0,time:"2017-06-03",amount:"100"},
                {type:1,time:"2017-06-03",amount:"300"},
                {type:0,time:"2017-06-03",amount:"1000"},
            ]
        }
    },
    mounted(){
    }
}
</script>
<style lang="less" scoped>
    @import "../../../css/common.less";
    #app #exchange-record-page .page-content{
        margin-top:100px;
    }
    #exchange-record-page{
        .list-block{
            margin:0;
            padding-top:-44px;
            margin-bottom:-44px;
            .item-title{
                p{
                    margin:0;
                    font-size:18px;
                    color:@color_33;
                }
                time{
                    color:@color_c7;
                    font-size:12px;
                }
            }
            .item-after{
                color:@color_00;
                font-size:26px;
            }
        }
    }
</style>