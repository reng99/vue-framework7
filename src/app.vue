<template>
    <f7-views main id="app">
      <f7-view>
        <f7-pages>
          <f7-page>
            <!--组件的按需求引用-->
            <message v-if="activeToolBar==0"></message>
            <tradeUnion v-if="activeToolBar==1"></tradeUnion>
            <game v-if="activeToolBar==2"></game>
            <televiseLive v-if="activeToolBar==3"></televiseLive>
            <profile v-if="activeToolBar==4"></profile>
            <f7-list>
            <f7-list-item title="我的红钻" link="/diamond/"></f7-list-item>
        </f7-list>
            <!--工具栏固定-->
            <toolbar v-on:toolbarToIndex="addContent"></toolbar>
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

//引入工具栏
import toolbar from './pages/toolbar.vue'
export default {
  data(){
    return{
      activeToolBar:0,//当前的工具栏，默认是0-->消息
    }
  },
  components:{
    message,
    tradeUnion,
    game,
    televiseLive,
    profile,
    toolbar
  },
  methods:{
    //从子组将toolbar中传递参数过来
    addContent(index){
      let vm = this;
      vm.activeToolBar = index;
    }
  }
}
</script>
<style lang="less" scoped>
  #app{

  }
</style>