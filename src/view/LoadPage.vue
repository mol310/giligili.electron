<!--
 * @公司名: 北京雨花石云计算
 * @Description: 
 * @Author: MArio
 * @Date: 2021-10-16 20:34:30
 * @LastEditTime: 2021-10-16 21:53:21
 * @LastEditors: MArio
-->
<template>
  <div id="loadPage">
    <TitleBlock backColor="background-color: #515c6b;margin-right:3px;padding-top:1px;" call1="on" call2="on" />
    <div id="mainlogo">
      <img alt="Vue logo" src="../assets/Logo/StoreLogo.scale-200.png" />
      <HelloWorld msg=" 叽哩叽哩  " />
    </div>
  </div>
</template>

<script>
import TitleBlock from "../components/TitleBlock.vue";
import HelloWorld from "../components/HelloWorld.vue";
export default {
  name: "loadPage",
  components: {
    TitleBlock,
    HelloWorld,
  }
};
</script>

<style>
#loadPage {
  width: 100%;
  height: 100%;
  min-width: 1334px;
  min-height: 830px;
  border-block-color: #fff;
  background-color: #515c6b;
  border-radius: 5px;
}
#mainlogo {
  text-align: center; /*让div内部文字居中*/
  /* background-color: #fff; */
  border-radius: 20px;
  width: 130px;
  height: 130px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
