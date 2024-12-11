<template>
  <div class="snap-container" @wheel="handleWheel">
    <div class="snap-page page1">
      <Page1 />
    </div>
    <div class="snap-page page2">
      <Page2 />
    </div>
    <div class="snap-page page3">
      <Page3 />
    </div>
    <div class="snap-page page4">
      <Page4 />
    </div>
    <div class="snap-page page5">
      <Page5 />
    </div>
  </div>
</template>


<script>
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
export default {
  components: { Page1, Page2, Page3, Page4, Page5 },
  data() {
    return {
      currentIndex: 0, // 当前页面索引
      isScrolling: false, // 滚动锁定标志
    };
  },
  methods: {
    handleWheel(event) {
      event.preventDefault();
      // 如果正在滚动，忽略操作
      if (this.isScrolling) return;

      // 判断滚动方向
      if (event.deltaY > 0 && this.currentIndex < 4) {
        // 向下滚动
        this.scrollToPage(this.currentIndex + 1);
      } else if (event.deltaY < 0 && this.currentIndex > 0) {
        // 向上滚动
        this.scrollToPage(this.currentIndex - 1);
      }
    },
    scrollToPage(index) {
      this.isScrolling = true; // 锁定滚动
      this.currentIndex = index;

      const container = document.querySelector(".snap-container");
      const snapPage = document.querySelector(".snap-page");
      container.scrollTo({
        top: index * snapPage.clientHeight,
        behavior: "smooth",
      });

      // 解锁滚动（确保动画完成后）
      setTimeout(() => {
        this.isScrolling = false;
      }, 500);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
<style scoped>
.snap-container {
  height: 100vh;
  scroll-snap-type: y mandatory; /* 开启垂直方向的对齐 */
  overflow-y: scroll; /* 允许垂直滚动 */
}

.snap-page {
  height: 100%; /* 每个页面占满视口 */
  scroll-snap-align: start; /* 页面对齐到顶部 */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  color: white;
}

.page1 {
  background: #ff7f50;
}

.page2 {
  background: #6495ed;
}

.page3 {
  background: #3cb371;
}

.page4 {
  background: #ffa500;
}

.page5 {
  background: #6a5acd;
}
</style>

