
<template>
  <f7-page>
    <f7-navbar title="我的红钻" back-link="返回" sliding>
        <f7-nav-right>
          <f7-link href="/diamond/record/">兑换记录</f7-link><!--这里的f7-link转换成a标签，带有link类名。这里添加跳转的话不能使用link="/path/to/component／的方法，直接加上href="/path/to/component/""-->
        </f7-nav-right>
    </f7-navbar>
    <f7-block inner>
      <p>Here is About page!</p>
      <p>You can go <f7-link back>back</f7-link>.</p>
      <p>Mauris posuere sit amet metus id venenatis. Ut ante dolor, tempor nec commodo rutrum, varius at sem. Nullam ac nisi non neque ornare pretium. Nulla mauris mauris, consequat et elementum sit amet, egestas sed orci. In hac habitasse platea dictumst.</p>
      <p>Fusce eros lectus, accumsan eget mi vel, iaculis tincidunt felis. Nulla tincidunt pharetra sagittis. Fusce in felis eros. Nulla sit amet aliquam lorem, et gravida ipsum. Mauris consectetur nisl non sollicitudin tristique. Praesent vitae metus ac quam rhoncus mattis vel et nisi. Aenean aliquet, felis quis dignissim iaculis, lectus quam tincidunt ligula, et venenatis turpis risus sed lorem. Morbi eu metus elit. Ut vel diam dolor.</p>
    </f7-block>
  </f7-page>
</template>

<script>
export default {
    data(){
        return {}
    },
}
</script>