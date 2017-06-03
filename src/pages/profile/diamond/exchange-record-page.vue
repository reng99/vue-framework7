
<template>
  <f7-page id="exchange-record-page">
    <f7-navbar title="兑换记录" back-link="返回" sliding></f7-navbar>
    <f7-list>
        <f7-list-item v-for="(item,key) in imitateList" :title="item.name" :key="key">
            <div class="item-after">+{{item}}</div>
        </f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
export default {
    data(){
        return {
            imitateList:[// 数据添加
                {name:"积分兑换",time:"2017-06-03",amount:"100"},
                {name:"积分兑换",time:"2017-06-03",amount:"100"},
                {name:"积分兑换",time:"2017-06-03",amount:"100"}
            ]
        }
    },
}
</script>
<style lang="less" scoped>
    #exchange-record-page{
        .list-block{
            margin:0;
        }
    }
</style>