<template> 
  <div>
    <AboutViewSection1 />
    <AboutViewSection2 />
    <AboutViewSection3 />
    <AboutViewSection4 />
    <AboutViewSection5 />
    <AboutViewSection6 />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AboutViewSection1 from "../components/About_Sections/Section1.vue";
import AboutViewSection2 from "../components/About_Sections/Section2.vue";
import AboutViewSection3 from "../components/About_Sections/Section3.vue";
import AboutViewSection4 from "../components/About_Sections/Section4.vue";
import AboutViewSection5 from "../components/About_Sections/Section5.vue";
import AboutViewSection6 from "../components/About_Sections/Section6.vue";

import prueba from "../components/About_Sections/prueba.vue";

export default Vue.extend({
  name: "About",

  components: {
    AboutViewSection1,
    AboutViewSection2,
    AboutViewSection3,
    AboutViewSection4,
    AboutViewSection5,
    AboutViewSection6,
    prueba,
  },
});
</script>
