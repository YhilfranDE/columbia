<template>
    <v-container  class="mt-15 mb-10">
        <v-row no-gutters aling="left" justify="left" class="mb-5">
          <h1 class="blue_text--text font_section_titles">Beneficios de estudiar en <span class="font-italic">Columbia</span></h1>
        </v-row>
        <v-row no-gutters>
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
                sm="4"
                class="text-center"
                v-for="(feature, i) in features"
                :key="i"
              >
                <v-hover v-slot:default="{ hover }">
                  <v-card
                    class="card bc_rounded text-left pad_card"
                    shaped
                    :elevation="hover ? 4 : 0"
                    :class="{ up: hover, bc_hover : hover }"
                  >
                    <!-- <v-img
                      :src="feature.img"
                      max-width="100px"
                      class="d-block ml-auto mr-auto"
                      :class="{ 'zoom-efect': hover }"
                    ></v-img> -->
                    <v-row class="p-4 ml-4 mb-2">
                      <v-icon
                        large
                        color="blue darken-2"
                      >
                      {{ feature.icon }}
                      </v-icon>
                     </v-row>
                    <h3 class="ml-4 font-weight-regular grey--text"><strong>{{ feature.title }}</strong></h3>
                    <p class="mt-2 ml-4 font-weight-regular  grey--text subtitle-1">
                      {{ feature.text }}
                    </p>
                  </v-card>
                  
                </v-hover>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        </v-row>
    </v-container>
</template>
    
    <script lang="ts">
    import Vue from "vue";
    
    export default Vue.extend({
      name: "HomePageSection4",
    
      data: () => ({
        features: [
        {
          icon: "mdi-thumb-up-outline",
          title: "Prestigio",
          text: "Gran trayectoria de éxitos y miles de egresados trabajando en las mejores empresas con una valiosa y excelente formación.",
        },
        {
          icon: "mdi-video-outline",
          title: "ZOOM",
          text: "Clases en vivo y sincrónicas para aprendizaje online. Lo mejor y lo último que hay.",
        },
        {
          icon: "mdi mdi-magnify",
          title: "COLUMBIA JOBS",
          text: "Las empresas y organizaciones recurren a Columbia Jobs, para reclutar personal calificado y especializado",
        },
        {
          icon: "mdi-book-open-page-variant-outline",
          title: "INGLÉS ESPECIALIZADO",
          text: "Reforzamos tu idioma inglés, clases vivenciales. Nueva metodología.",
        },
        {
          icon: "mdi mdi-star",
          title: "FORMACIÓN DE CALIDAD",
          text: "Profesores destacados y altamente capacitados. Equipamiento, infraestructura, experiencia y calidad.",
        },
        {
          icon: "mdi mdi-lan",
          title: "NETWORKING",
          text: "Convenios y afiliaciones nacionales e internacionales. Desarrollo de alianzas y sinergias positivas.",
        },                        
      ],
      }),
      
    });
    </script>
<style>
.bc_rounded{
  border-radius: 24px 24px 24px 24px !important;
  min-height: 250px !important;
  background-color: #fafafa !important;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0) !important;
}
.bc_hover{
  border-top: 1.2rem solid !important;
  border-color: #6200ea !important;
}
</style>