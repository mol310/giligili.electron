<!--
 * @公司名: 北京雨花石云计算
 * @Description: 
 * @Author: MArio
 * @Date: 2021-10-17 12:21:43
 * @LastEditTime: 2021-10-17 23:51:46
 * @LastEditors: MArio
-->
<template>
  <div id="newWorldGate">
    <div class="newoWorldTitleCard">
      <div class="newWorldZhuanLan">专栏</div>
      <div class="newWorldShuaXin">
        <div class="newWorldShuaXinIcon">
          <div class="ech-rotate360">
            <svg
              t="1634446435296"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="25063"
              width="16"
              height="16"
            >
              <path
                d="M274.3 758.2l179.4 138.6c37.6 29 92.1 2.3 92.1-45.2v-38.4c161.1-1.1 291.6-136.3 291.6-303.7 0-36.5-6.1-68.9-16.2-101.3-40.5 117.5-147.8 202.5-275.4 202.5v-36.4c0-47.5-54.5-74.2-92.1-45.2L274.3 667.8c-29.6 22.8-29.6 67.5 0 90.4z"
                fill="#2867CE"
                p-id="25064"
              ></path>
              <path
                d="M753.7 268.2L574.3 129.6c-37.6-29-92.1-2.3-92.1 45.2v38.4c-161.1 1.1-291.6 136.3-291.6 303.7 0 36.5 6.1 68.9 16.2 101.3 40.5-117.5 147.8-202.5 275.4-202.5v36.4c0 47.5 54.5 74.2 92.1 45.2l179.4-138.7c29.6-22.8 29.6-67.5 0-90.4z"
                fill="#2867CE"
                p-id="25065"
              ></path>
              <path
                d="M483.3 462.8V164c-0.6 3.5-1 7-1 10.8v38.4c-161.1 1.1-291.6 136.3-291.6 303.7 0 36.5 6.1 68.9 16.2 101.3 40.5-117.5 147.8-202.5 275.4-202.5v36.4c0 3.7 0.3 7.3 1 10.7zM545.8 610.8v-36.4c0-3.7-0.4-7.3-1-10.8v298.9c0.6-3.5 1-7 1-10.8v-38.4c161.1-1.1 291.6-136.3 291.6-303.7 0-36.5-6.1-68.9-16.2-101.3-40.5 117.4-147.9 202.5-275.4 202.5z"
                fill="#BDD2EF"
                p-id="25066"
              ></path>
            </svg>
          </div>
        </div>
        <div class="newWorldShuaXinText" @click="doInit()">
          刷新
        </div>
      </div>
    </div>
    <div class="newWorldSort">
      <table>
        <tr>
          <td>
            <div class="newWorldSortCard">
              <div class="newWorldSortCardTitle">推荐</div>
              <div
                v-if="SorttextPross === 'NoWorld1'"
                class="newWorldSortCardPross"
              ></div>
              <div v-else class="newWorldSortCardProssNo"></div>
            </div>
          </td>
          <td>
            <div class="newWorldSortCard">
              <div class="newWorldSortCardTitle">动画</div>
              <div
                v-if="SorttextPross === 'NoWorld2'"
                class="newWorldSortCardPross"
              ></div>
              <div v-else class="newWorldSortCardProssNo"></div>
            </div>
          </td>
          <td>
            <div class="newWorldSortCard">
              <div class="newWorldSortCardTitle">游戏</div>
              <div
                v-if="SorttextPross === 'NoWorld3'"
                class="newWorldSortCardPross"
              ></div>
              <div v-else class="newWorldSortCardProssNo"></div>
            </div>
          </td>
        </tr>
      </table>
    </div>
    <div class="newoWorldTitleCard">
      <div class="newWorldZhuanLanTextOne">生活</div>
      <div class="newWorldShuaXinOnE">
        <div class="newWorldShuaXinIcon">
          <div class="ech-rotate360">
            <svg
              t="1634449125780"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="25887"
              width="16"
              height="16"
            >
              <path
                d="M192 396.8L272 320l240 236.16L752 320l80 76.8L512 704z"
                fill="#0590DF"
                p-id="25888"
              ></path>
            </svg>
          </div>
        </div>
        <div class="newWorldShuaXinText">
          默认排序
        </div>
      </div>
    </div>
    <div class="newWorldRotationChart">
      <img
        class="newWorldRotationChart"
        src="https://s1.jiligamefun.com/images/2020/10/22/545bdb318a87ebc96e11524cd9601450.jpg"
      />
    </div>
    <div class="newWorldcatalogue">
      <table>
        <td>
          <div class="newWorldcatalogueIconOnText">
            <svg
              t="1634442255796"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="18141"
              width="18"
              height="18"
            >
              <path
                d="M597.333333 234.666667c44.586667 0 87.808 2.773333 129.770667 8.277333l15.68 2.197333 15.381333 2.432a149.056 149.056 0 0 1 122.709334 123.114667c10.090667 62.421333 15.125333 127.296 15.125333 194.645333 0 55.552-3.413333 109.44-10.304 161.706667l-2.410667 17.386667-2.410666 15.552a149.056 149.056 0 0 1-122.709334 123.093333A973.845333 973.845333 0 0 1 597.333333 896c-44.586667 0-87.808-2.773333-129.770666-8.277333l-15.68-2.197334-15.381334-2.432a149.056 149.056 0 0 1-122.709333-123.114666A1219.690667 1219.690667 0 0 1 298.666667 565.333333c0-55.552 3.413333-109.44 10.304-161.706666l2.410666-17.386667 2.410667-15.552a149.056 149.056 0 0 1 122.709333-123.093333A973.845333 973.845333 0 0 1 597.333333 234.666667z"
                fill="#21DAD0"
                opacity=".6"
                p-id="18142"
              ></path>
              <path
                d="M480 85.333333c51.541333 0 103.082667 4.672 154.602667 13.994667a192 192 0 0 1 155.306666 158.037333A1580.586667 1580.586667 0 0 1 810.666667 512c0 65.066667-4.053333 130.090667-12.181334 195.136a21.333333 21.333333 0 1 1-42.346666-5.290667c7.893333-63.274667 11.861333-126.570667 11.861333-189.845333 0-82.56-6.72-165.162667-20.202667-247.765333a149.333333 149.333333 0 0 0-120.789333-122.922667A823.936 823.936 0 0 0 480 128c-48.981333 0-97.984 4.437333-147.008 13.312a149.333333 149.333333 0 0 0-120.789333 122.922667A1537.92 1537.92 0 0 0 192 512c0 81.173333 6.506667 162.346667 19.498667 243.541333a149.333333 149.333333 0 0 0 122.581333 123.626667c66.432 11.221333 132.842667 16.832 199.253333 16.832 66.410667 0 132.821333-5.610667 199.253334-16.853333a149.333333 149.333333 0 0 0 122.581333-123.605334C868.181333 674.346667 874.666667 593.173333 874.666667 512c0-62.933333-3.904-125.866667-11.733334-188.8a21.333333 21.333333 0 1 1 42.346667-5.248C913.322667 382.634667 917.333333 447.317333 917.333333 512c0 83.434667-6.677333 166.869333-20.053333 250.282667a192 192 0 0 1-157.568 158.933333A1236.330667 1236.330667 0 0 1 533.333333 938.666667c-68.8 0-137.6-5.824-206.378666-17.429334a192 192 0 0 1-157.568-158.933333A1579.968 1579.968 0 0 1 149.333333 512c0-84.906667 6.912-169.770667 20.757334-254.634667a192 192 0 0 1 155.306666-158.037333A866.602667 866.602667 0 0 1 480 85.333333zM576 448a21.333333 21.333333 0 0 1 0 42.666667H362.666667a21.333333 21.333333 0 0 1 0-42.666667h213.333333z m0-128a21.333333 21.333333 0 0 1 0 42.666667H362.666667a21.333333 21.333333 0 0 1 0-42.666667h213.333333z"
                fill="#333333"
                p-id="18143"
              ></path>
            </svg>
          </div>
          <div class="newWorldcatalogueYou">
            <svg
              t="1634451256974"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="27381"
              width="16"
              height="16"
            >
              <path
                d="M413.013333 945.493333H279.893333c-20.48 0-37.546667-10.24-44.373333-27.306666s-6.826667-37.546667 3.413333-54.613334l187.733334-279.893333c10.24-17.066667 30.72-20.48 47.786666-10.24 17.066667 10.24 20.48 30.72 10.24 47.786667l-170.666666 252.586666h92.16l310.613333-341.333333-310.613333-341.333333H341.333333l143.36 256c10.24 17.066667 3.413333 37.546667-13.653333 47.786666-17.066667 10.24-37.546667 3.413333-47.786667-13.653333L266.24 201.386667c-10.24-17.066667-10.24-34.133333 0-51.2s27.306667-23.893333 44.373333-23.893334H409.6c13.653333 0 27.306667 6.826667 37.546667 17.066667L785.066667 512c10.24 13.653333 10.24 34.133333 0 44.373333l-337.92 368.64c-6.826667 13.653333-20.48 20.48-34.133334 20.48z"
                fill="#9850FF"
                p-id="27382"
              ></path>
            </svg>
          </div>
        </td>
        <td>
          <div class="newWorldcatalogueIconOnText2">
            新世界大门
          </div>
          <div class="newWorldcatalogueYou">
            <svg
              t="1634451256974"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="27381"
              width="16"
              height="16"
            >
              <path
                d="M413.013333 945.493333H279.893333c-20.48 0-37.546667-10.24-44.373333-27.306666s-6.826667-37.546667 3.413333-54.613334l187.733334-279.893333c10.24-17.066667 30.72-20.48 47.786666-10.24 17.066667 10.24 20.48 30.72 10.24 47.786667l-170.666666 252.586666h92.16l310.613333-341.333333-310.613333-341.333333H341.333333l143.36 256c10.24 17.066667 3.413333 37.546667-13.653333 47.786666-17.066667 10.24-37.546667 3.413333-47.786667-13.653333L266.24 201.386667c-10.24-17.066667-10.24-34.133333 0-51.2s27.306667-23.893333 44.373333-23.893334H409.6c13.653333 0 27.306667 6.826667 37.546667 17.066667L785.066667 512c10.24 13.653333 10.24 34.133333 0 44.373333l-337.92 368.64c-6.826667 13.653333-20.48 20.48-34.133334 20.48z"
                fill="#9850FF"
                p-id="27382"
              ></path>
            </svg>
          </div>
        </td>
        <td>
          <div class="newWorldcatalogueIconOnText2">
            目录游览
          </div>
          <div class="newWorldcatalogueYou"></div>
        </td>
      </table>
    </div>
    <div
      ref="box"
      class="newWorldShowPictures Neworldscro"
      @scroll="handleScroll($event)"
    >
      <table>
        <tr v-for="item in dataCard" :key="item.id">
          <td v-for="item2 in item" :key="item2.id">
            <div class="newWorldImgCard">
              <div class="newWorldImgCardOnImg">
                <img
                  class="newWorldImgCardOnImg"
                  style="height:100%;"
                  :src="item2.imgSrc"
                />
              </div>
              <div class="newWorldImgCardTextCard">
                <h6>{{ item2.name }}</h6>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
var cheerio = require("cheerio");
export default {
  name: "newWorldGate",
  data() {
    return {
      SorttextPross: "NoWorld1",
      dataCard: [[]],
      PageIndex: [1, 2, 3, 4, 5],
      pageNumber: 1,
    };
  },
  methods: {
    doInit() {
      axios
        .get("https://www.jiligamefun.com/category/photo")
        .then((resp) => {
          var $ = cheerio.load(resp.data);
          var arr1 = [];
          $("img.inn-archive__item__thumbnail__img").each(function(i, e) {
            var pro = {
              name: $(e).attr("alt"),
              imgSrc: $(e).attr("src"),
            };
            arr1.push(pro);
          });
          //把 arr 的一维数组先转成二维的，然后再在 vue 里面渲染
          this.dataCard = arr1.reduce(
            (pre, next, idx) => {
              // reduce 用来便利数组，具体语法就 rtfm 吧
              const inner = pre[~~(idx / 5)]; // ~~用来取整，inner 是内层数组
              if (inner !== undefined) {
                // 判断有没有内层数组
                inner.push(next); // 如果有就把遍历的值 next push 到内层数组里
              } else {
                pre.push([next]); // 没有就新建一个包含 next 的数组，作为内层数组
              }
              return pre;
            },
            [[]]
          );
          console.log(this.dataCard[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleScroll(e) {
      // var _this = this;
      if (
        parseInt(e.srcElement.scrollTop) +
          parseInt(e.srcElement.offsetHeight) >=
        parseInt(e.srcElement.scrollHeight.toString())
      ) {
        if (this.PageIndex[this.pageNumber] != null) {
          console.log("取到的下一页值" + this.PageIndex[this.pageNumber]);
          this.pageNumber = this.PageIndex[this.pageNumber];
         
          //   //滚动条快到底了，需要加载新数据到dataCard双数组中
          //   // axios
          //   // .get(
          //   //   "https://www.jiligamefun.com/category/photo/page/" + this.PageIndex[this.pageNumber]
          //   // )
          //   // .then((resp) => {
          //   //   var $ = cheerio.load(resp.data);
          //   //   var arr1 = [];
          //   //   $("img.inn-archive__item__thumbnail__img").each(function(i, e) {
          //   //     var pro = {
          //   //       name: $(e).attr("alt"),
          //   //       imgSrc: $(e).attr("src"),
          //   //     };
          //   //     arr1.push(pro);
          //   //   });
          //   //   //把 arr 的一维数组先转成二维的，然后再在 vue 里面渲染
          //   //   var dataCard = arr1.reduce(
          //   //     (pre, next, idx) => {
          //   //       // reduce 用来便利数组，具体语法就 rtfm 吧
          //   //       const inner = pre[~~(idx / 5)]; // ~~用来取整，inner 是内层数组
          //   //       if (inner !== undefined) {
          //   //         // 判断有没有内层数组
          //   //         inner.push(next); // 如果有就把遍历的值 next push 到内层数组里
          //   //       } else {
          //   //         pre.push([next]); // 没有就新建一个包含 next 的数组，作为内层数组
          //   //       }
          //   //       return pre;
          //   //     },
          //   //     [[]]
          //   //   );
          //   //   for (var i = 0; i < dataCard.length; i++) {
          //   //     _this.dataCard.push(dataCard[i]);
          //   //   }
          this.$refs.box.scrollTop = e.srcElement.scrollTop - 200;
          //   // })
          //   // .catch((err) => {
          //   //   console.log(err);
          //   // });
        }
      }
    },
  },
};
</script>

<style>
.newWorldImgCardTextCard {
  width: 100%;
  height: 10%;
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  background-color: #fefefe;
  padding-top: 5px;
  color: #7e758e;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.newWorldImgCardOnImg {
  width: 100%;
  height: 90%;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
}
.newWorldImgCard {
  width: 180px;
  height: 280px;
  background-color: #eaeaea;
  border-radius: 13px;
  margin: 6px;
  -webkit-transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
  transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
  -webkit-box-shadow: 0 0.25rem 1rem rgba(48, 55, 66, 0.15);
  box-shadow: 0 4px 16px rgba(48, 55, 66, 0.15);
  /* box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2); */
}
.newWorldImgCard:hover {
  box-shadow: 0 16px 32px 0 rgba(48, 55, 66, 0.15);
  transform: translate(0, -5px);
  transition-delay: 0s !important;
}
.newWorldShowPictures {
  width: 100%;
  height: 54%;
  overflow-y: scroll;
}
.newWorldcatalogueYou {
  padding-top: 5px;
  float: left;
  margin-left: 5px;
  box-shadow: none;
}
.newWorldcatalogueYou:hover {
  background-color: #eaeaea;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  border-color: rgb(180, 26, 26);
  transition: all 0.2s ease-in-out;
}
.newWorldcatalogueIconOnText2 {
  width: 90px;
  height: 30px;
  padding-top: 3px;
  float: left;
  color: #d2d2d2;
  box-shadow: none;
  /* cursor: pointer; */
}

.newWorldcatalogueIconOnText {
  width: 30px;
  height: 30px;
  padding-top: 6px;
  float: left;
}
.newWorldcatalogue {
  width: 100%;
  height: 35px;
  background-color: #fefefe;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(22, 22, 22, 0.12);
  margin-top: 12px;
}
.newWorldRotationChart {
  width: 100%;
  height: 150px;
  background-color: #eaeaea;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12);
}
.newWorldSortCardProssNo {
  border-radius: 5px;
  width: 15px;
  height: 4px;
  /* background-color: #3b4452; */
  margin-left: 18px;
}
.newWorldSortCardPross {
  border-radius: 5px;
  width: 15px;
  height: 4px;
  background-color: #3b4452;
  margin-left: 18px;
}
.newWorldSortCard {
  width: 50px;
  height: 30px;
  box-shadow: none;
  cursor: pointer;
}
.newWorldSortCard:hover {
  background-color: #eaeaea;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  border-color: rgb(180, 26, 26);
  transition: all 0.2s ease-in-out;
}
.newWorldSort {
  width: 100%;
  height: 30px;
  /* padding-left: 10px; */
}
.ech-rotate360 {
  transition: all 0.4s;
}
.ech-rotate360:hover {
  transform: rotate(360deg);
}
.newWorldShuaXinText {
  float: left;
}
.newWorldShuaXinIcon {
  float: left;
  padding-top: 2px;
  margin-right: 3px;
}
.newWorldZhuanLanTextOne {
  float: left;
  text-align: left;
  font-size: 15px;
  font-weight: bold;
  margin-top: 25px;
}
.newWorldZhuanLanText {
  float: left;
  text-align: left;
  font-size: 15px;
  font-weight: bold;
}
.newWorldZhuanLan {
  float: left;
  text-align: left;
  font-size: 30px;
  font-weight: bold;
}
.newWorldShuaXinOnE {
  float: right;
  width: 100px;
  height: 30px;
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  padding-top: 2px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.15);
  cursor: pointer;
  margin-top: 15px;
}
.newWorldShuaXin {
  float: right;
  width: 60px;
  height: 30px;
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  padding-top: 2px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.15);
  cursor: pointer;
}
.newWorldShuaXin:hover {
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.25);
  transition: all 0.2s ease-in-out;
}
.newoWorldTitleCard {
  width: 100%;
  height: 60px;
}
#newWorldGate {
  border-radius: 3px;
  width: 85%;
  height: 95.5%;
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;
  padding-left: 45px;
  padding-right: 45px;
  padding-top: 30px;
}

.Neworldscro {
  /* height: 430px; */
  overflow-y: scroll;
}
.Neworldscro::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 7px;
  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}

.Neworldscro::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(235, 238, 240, 0.2);
  background: #ebeef0;
}

.Neworldscro::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(235, 238, 240, 0.2);
  border-radius: 10px;
  background: #f1f6fa;
}
</style>
