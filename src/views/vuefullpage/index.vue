<template>
  <div class="vue-full-page">
    <full-page ref="fullpage" :options="options">
      <div class="section" v-for="(page, index) in pages" :key="index">
        <component :is="page" />
      </div>
    </full-page>
  </div>
</template>

<script>
import Page1 from "@/views/pages/Page1";
import Page2 from "@/views/pages/Page2";
import Page3 from "@/views/pages/Page3";
import Page4 from "@/views/pages/Page4";
import Page5 from "@/views/pages/Page5";
export default {
  name: 'vue-full-page',
  data() {
    return {
      pages: [Page1, Page2, Page3, Page4, Page5],
      options: {
        scrollingSpeed: 600, // 滚动速度 (ms)
        navigation: true, // 显示导航
        loopBottom: false, // 到最后一页后是否回到第一页
        navigationTooltips: ['第一页', '第二页', '第三页', '第四页', '第五页'],
        onLeave: (origin, destination, direction) => {
          console.log(`从页面${origin}到页面${destination}, 方向: ${direction}`);
        },
      },
    };
  },
};
</script>

<style scoped>
.section {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  background: lightblue;
}
.vue-full-page >>> .fp-tableCell {
  width: 100%;
}
.fp-auto-height {
  height: 50vh;
}
</style>
