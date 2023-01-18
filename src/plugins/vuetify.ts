import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);
import colors from 'vuetify/lib/util/colors'

export default new Vuetify({
    theme: {
      themes: {
        light: {
          grey: "#494949",
          blue_text:"#0077ff",
          listItem : "#537499",
          default1: "background: linear-gradient(to right, #000046, #1cb5e0)",
        },
      },
    },
  })