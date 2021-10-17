<!--
 * @公司名: 北京雨花石云计算
 * @Description: 
 * @Author: MArio
 * @Date: 2021-10-16 21:54:53
 * @LastEditTime: 2021-10-17 12:24:02
 * @LastEditors: MArio
-->
<template>
  <div id="laYout">
    <TitleBlock
      titleName="叽哩叽哩"
      backColor="padding-right:3px;padding-top:1px;border-top-left-radius:5px;border-top-right-radius:5px;"
      call1="on"
      call2="on"
    />
    <Aside />
    <section class="home-section boders">
        <!-- 组件 -->
        <NewWorldGate/>
    </section>
  </div>
</template>

<script>
import Aside from "../components/Aside.vue";
import TitleBlock from "../components/TitleBlock.vue";
import NewWorldGate from "../components/NewWorldGate.vue";
export default {
  name: "laYout",
  components: {
    TitleBlock,
    Aside,
    NewWorldGate
  },
};
</script>

<style>
#laYout {
  width: 100%;
  height: 100%;
  /* min-width: 1334px;
  min-height: 830px; */
  border-block-color: #fff;
  background-color: #f3f3f3;
  border-radius: 5px;
}
</style>
