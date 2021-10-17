<!--
 * @公司名: 北京雨花石云计算
 * @Description: 
 * @Author: MArio
 * @Date: 2021-10-15 14:13:05
 * @LastEditTime: 2021-10-17 11:33:46
 * @LastEditors: MArio
-->
<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <LoadPage/> -->
  <Layout />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import LoadPage from './view/LoadPage.vue';
import Layout from "./view/Layout.vue";
export default {
  name: "App",
  components: {
    // HelloWorld
    // LoadPage,
    Layout,
  },
};
</script>

<style>
html,
body #app {
  height: 100%;
  /* border-radius: 10px; */
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  margin:0px;
  width: 100%;
  height: 100%;
  /* height:-webkit-fill-available; */
  /* min-width: 1334px;
  min-height: 830px; */
}
</style>
