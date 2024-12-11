<template>
  <scrollsnap :pages="pages"></scrollsnap>
</template>


<script>
import scrollsnap from "@/components/scrollsnap";
import Page1 from "@/views/pages/Page1";
import Page2 from "@/views/pages/Page2";
import Page3 from "@/views/pages/Page3";
import Page4 from "@/views/pages/Page4";
import Page5 from "@/views/pages/Page5";
export default {
  name: 'scroll-snap-instance',
  components: { scrollsnap },
  data() {
    return {
      pages: [Page1, Page2, Page3, Page4, Page5],
    };
  }
};
</script>
