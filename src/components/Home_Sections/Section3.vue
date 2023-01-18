<template>
    <v-container class="mt-15">
        <v-row no-gutters aling="left" justify="left">
            <h1 class="blue_text--text font_section_titles">Profesionales <strong class="font-italic">Columbia</strong></h1>
        </v-row>     
        
        <v-carousel class="mt-7"
        cycle>
            <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition">
            </v-carousel-item>
        </v-carousel>     
    </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HomePageSection3",

  data: () => ({
    items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
  }),
  
});
</script>