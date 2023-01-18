<template>
  <div>
   <HomePageSection1 />
   <HomePageSection2 />
   <HomePageSection3 />
   <HomePageSection4 />
   <Form />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HomePageSection1 from "./Home_Sections/Section1.vue";
import HomePageSection2 from "./Home_Sections/Section2.vue";
import HomePageSection3 from "./Home_Sections/Section3.vue";
import HomePageSection4 from "./Home_Sections/Section4.vue";
import Form from "./Form.vue";


export default Vue.extend({
  name: "HomePage",

  components: {
    HomePageSection1,
    HomePageSection2,
    HomePageSection3,
    HomePageSection4,
    Form,
  },
  data: () => ({
  }),
});
</script>

