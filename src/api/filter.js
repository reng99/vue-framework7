// 过滤方法

import Vue from 'vue';

/*
    红钻兑换的方式
    参数--
        type:数字类型,0是积分兑换，1是某豆兑换
    使用方法--
        {{type | exchangeType}}
 */

Vue.filter("exchangeType",(type)=>{
    if(!type){
        return "其他方式兑换";
    }
    let types = [//可以扩展
        {type:0,name:"积分兑换"},
        {type:1,name:"某豆兑换"}
    ];
})