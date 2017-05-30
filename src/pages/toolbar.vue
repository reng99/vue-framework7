<template>
<f7-toolbar>
    <template  v-for="(item,index) in toolBar">
    <f7-link :class="{'active':item.id==activeToolBar}" @click="changeActiveToolBar(index)">
        <i class="f7-icons">{{item.name}}</i>
        <span>{{item.title}}</span>
    </f7-link>
    </template>
</f7-toolbar>
</template>
<script>
export default{
    data(){
        return{
            toolBar:[
                {
                id:0,
                name:'email_fill',
                title:'消息'
                },
                {
                id:1,
                name:'persons_fill',
                title:'工会'
                },
                {
                id:2,
                name:'world_fill',
                title:'游戏'
                },
                {
                id:3,
                name:'videocam_round_fill',
                title:'直播'
                },
                {
                id:4,
                name:'person_fill',
                title:'我'
                }
            ],
            activeToolBar:0,//活跃的工具栏目
        }
    },
    methods:{
        changeActiveToolBar(index){
            let vm = this;
            vm.activeToolBar = index;
            this.$emit('toolbarToIndex',index);
        }
    }
}
</script>
<style lang="less" scoped>
.toolbar{
    display: -webkit-flex;
    display:-moz-flex;
    display:-ms-flex;
    display:flex;
    flex-direction:row;
    .toolbar-inner{
        padding:0;
        .link{
        display: -webkit-flex;
        display:-moz-flex;
        display:-ms-flex;
        display:flex;
        flex-direction:column;
        color:#666;
        font-size:12px;
        flex:1;
        i{
            display:block;
            width:14px;
            height:14px;
            margin-top:4px;
        }
        span{
            margin-top:-4px;
            display:block;
            height:12px;
            padding:0;
        }
        &.active{
            color:blue;
        }
        }
    }
}

</style>