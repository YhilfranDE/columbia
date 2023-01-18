<template>
  <v-app>
    <Navigation_bar />
    <div>
    <v-main>
      <router-view />
    </v-main>
  </div>
  <Pre_footer />
  <Footer />
  </v-app>
</template>

<script lang="ts">

import Vue from "vue";
import Navigation_bar from "./components/Navigation_bar.vue";
import Pre_footer from "./components/Pre_footer.vue";
import Footer from "./components/Footer.vue";

export default Vue.extend({
  name: "App",
  components: {
    Navigation_bar,
    Footer,
    Pre_footer,

  },
  data: () => ({
    //
    options: {
          video: {
            url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4',
            pic: 'http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg'
          },
          autoplay: false,
          contextmenu: [
              {
                  text: 'GitHub',
                  link: 'https://github.com/MoePlayer/vue-dplayer'
              }
          ]
        },
        player: null,
        
  }),
});
</script>
