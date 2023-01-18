<template>
  <v-container fluid class="mt-15">
    <v-row aling="center" justify="center">
      <h1 class="blue_text--text font_section_titles">Nuestra Oferta Educativa</h1>
    </v-row>
        <v-row aling="center" justify="center">
          <v-col cols="10">
            <v-row aling="center" justify="space-around" class="mt-2">
              <!-- <v-col cols="12" class="text-center">
                <h1 class="font-weight-light display-2">Title</h1>
                <h1 class="font-weight-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
              </v-col> -->
              <v-col
                cols="12"
                sm="3"
                class="text-center"
                v-for=" feature in features">
                <v-hover v-slot:default="{ hover }">
                  <v-card
                    class="card bc_rounded mt-5"
                    shaped
                    :elevation="hover ? 10 : 0"
                    :class="{ up: hover }">
                    <v-img :src= "feature.img" > </v-img>
                    <v-row style="padding:18px !important">
                      <v-card-title >
                        {{ feature.text }}
                     </v-card-title>
                    </v-row>
                    <v-btn color="primary" class="button_card">
                      {{ feature.btn_text }}
                    </v-btn>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HomePageSection2",

  data: () => ({
    features: [
        {
          img: require("../../assets/pages/page_1/card1.png"),
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptates tempora suscipit dolores non lauda",
          link:"",
          btn_text:"Más Informacion",
        },
        {
          img: require("../../assets/pages/page_1/card2.png"),
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptates tempora suscipit dolores non lauda",
          link:"",
          btn_text:"Más Informacion",          
        },
        {
          img: require("../../assets/pages/page_1/card3.jpg"),
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptates tempora suscipit dolores non lauda",
          link:"",
          btn_text:"Más Informacion",          
        },
      ],
  }),
  
});
</script>

<style>
.btn-play {
  transition: 0.2s;
}
.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}
#hero {
  z-index: 0;
}
.svg-border-waves img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: -2px;
  z-index: -1;
}
.card {
  min-height: 300px;
 
  transition: 0.5s ease-out;
}
.card .v-image {
  margin-bottom: 15px;
  transition: 0.75s;
}
.card h1 {
  margin-bottom: 10px;
}
.zoom-efect {
  transform: scale(1.1);
}
.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}
.pad_card{
  padding: 30px !important;
}
</style>

<style>
section {
  position: relative;
}
.font_section_titles{
  font-size: 40px !important;
}
.button_card{
  position: absolute;
  margin-top: -6px !important;
  margin-left: -87px;
}
</style>