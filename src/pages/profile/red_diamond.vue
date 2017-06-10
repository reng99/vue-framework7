
<template>
  <f7-page id="red_diamond">
    <f7-navbar title="我的红钻" back-link="返回" sliding>
      <f7-nav-right>
        <f7-link href="/diamond/record/">兑换记录</f7-link><!--这里的f7-link转换成a标签，带有link类名。这里添加跳转的话不能使用link="/path/to/component／的方法，直接加上href="/path/to/component/""-->
      </f7-nav-right>
    </f7-navbar>
    <div class="top">
      <div class="double_top">
        <p>我的红钻</p>
        <strong>2480</strong>
      </div>
      <f7-list>
        <f7-list-item link="/diamond/points/">
          <div class="item-title">我的积分<b>1500</b></div>
          <div class="item-after">兑换红钻</div>
        </f7-list-item>
      </f7-list>
    </div>
    <div class="middle">
      <f7-list>
        <f7-list-item class="item-link">
          <div class="item-title">我的某豆<b class="beans">6000</b></div>
          <div class="item-after" @click="rechargeApi"><span class="beans">充值某豆</span></div>
        </f7-list-item>
      </f7-list>
      <f7-list>
        <f7-list-item v-for="(item , key) in myBeans" :key="key">
          <div class="item-title">
            <img src="../../images/profile/profile_red_diamond.jpg" alt="red_diamond_img"> 
            <span>{{item.amount}}</span><span v-if="key==0" class="bean_specially">（首充奖励+1000积分）</span>
          </div>
          <div class="item-after" @click="convertDiamond(item.amount)"><a href="#">{{item.amount}}某豆</a></div>
        </f7-list-item>
      </f7-list>
      <f7-list>
        <f7-list-item class="item-link">
          <div class="item-title">自定义兑换</div>
          <div class="item-after">可兑换524红钻</div>
        </f7-list-item>
      </f7-list>
    </div>
    <div class="bottom" @click="contactServer">联系客服</div>
  </f7-page>
</template>

<script>
export default {
    data(){
        return {
          //red_diamond_img_path:"/src/images/profile/diamond/red_diamond.jpg",图片的路径，需要修改
          myBeans:[//模拟数据
            {amount:600},
            {amount:5000},
            {amount:10000},
            {amount:52000},
            {amount:131400},
          ]
        }
    },
    methods:{
      convertDiamond(num){//某豆转换成红钻
      var myApp = new Framework7();
        //console.log(num);
        myApp.modal({
          title:"",
          text:"确定兑换"+num+"红钻，供消耗"+num+"某豆",
          buttons:[
            {
              text:"取消",
              close:true,
              onClick:function(){}
            },
            {
              text:"确定",
              onClick:function(){
                console.log("确定");
              }
            }
          ]
        })
      },
      contactServer(){//联系客服调用的接口位置
        console.log('联系客服');
      },
      rechargeApi(){//调用充值某豆的api
        console.log("调用充值某豆的api");
      }
    }
}
</script>
<style lang="less" scoped>
   @import "../../css/common.less";
   #red_diamond{
      .list-block{
        margin:0;
        .item-title{
          display:flex;
          justify-content:column;
          img{
            display:block;
            width:24px;
            height:24px;
            margin-right:3px;
          }
          .bean_specially{
            color:@color_red;
          }
          b{
            margin-left:10px;
            font-weight:normal;
          }
          .beans{
            color:@color_yellow;
          }
        }
        .item-after{
          font-size:13px;
          a{
            color:@color_white;
            background:@color_yellow;
            display:block;
            width:80px;
            text-align:center;
            height:28px;
            line-height:28px;
            border-radius:5px;
          }
          .beans{
            color:@color_yellow;
          }
        }
      }
      .top{
        width:100%;
        .double_top{
          height:160px;
          background:url('../../images/profile/diamond/red_diamond_bg.jpg') 0 0 no-repeat;
          background-size:100% 160px;
          text-align:center;
          p{
            color:@color_66;
            font-size:12px;
            margin:0;
            padding-top:55px;
          }
          strong{
            color:@color_red;
            font-size:28px;
          }
        }
      }
      .middle{
        margin-top:10px;
      }
      .bottom{
        text-align:center;
        margin-top:40px;
        color:@color_main_blue;
      }
   }
</style>