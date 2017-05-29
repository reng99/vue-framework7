<template>
    <f7-views main id="app">
      <f7-view>
        <f7-pages>
          <f7-page nav-fixed><!--工具栏和导航栏固定-->
            <f7-navbar title="my app" v-if="activeToolBar==4"></f7-navbar>
            <!--组件的按需求引用-->
            <message v-if="activeToolBar==0"></message>
            <tradeUnion v-if="activeToolBar==1"></tradeUnion>
            <game v-if="activeToolBar==2"></game>
            <televiseLive v-if="activeToolBar==3"></televiseLive>
            <profile v-if="activeToolBar==4"></profile>
            <!--工具栏固定-->
            <f7-toolbar>
              <template  v-for="(item,index) in toolBar">
                <f7-link :class="{'active':item.id==activeToolBar}" @click="changeActiveToolBar(index)">
                  <i class="f7-icons">{{item.name}}</i>
                  <span>{{item.title}}</span>
                </f7-link>
              </template>
            </f7-toolbar>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>
</template>

<script>
import message from './pages/message.vue'
import tradeUnion from './pages/trade_union.vue'
import game from './pages/game.vue'
import televiseLive from './pages/televise_live.vue'
import profile from './pages/profile.vue'
export default {
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
  components:{
    message,
    tradeUnion,
    game,
    televiseLive,
    profile
  },
  methods:{
    changeActiveToolBar(index){
      let vm = this;
      vm.activeToolBar = index;
    }
  }
}
</script>
<style lang="less" scoped>
  #app{
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
  }
</style>