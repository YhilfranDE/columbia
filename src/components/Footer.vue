<template>
    <v-footer dark padless>
      <v-card flat tile class="deep-purple accent-4 white--text text-center">
            <v-row justify="center" no-gutters>
                <v-btn
                    v-for="link in footer_links"
                    :key="link"
                    color="white"
                    text
                    class="my-2"
                >
                    {{ link }}
                </v-btn>
            </v-row>

            <v-row no-gutters>
                <v-col cols="12" sm="6" md="6">
           
                    <img class="img_footer" src="//upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Columbia_logo.jpg/657px-Columbia_logo.jpg" alt="Logo" />
                    
                </v-col>
                <v-col cols="12" md="6" sm="6" class="text-md-left text-sm-center">
                    <v-row no-glutters>
                        <v-col cols="12" md="4" sm="6">
                            <h1 class="mt-4">015007000</h1>
                            <v-btn class="mt-6" outlined color="white">
                                <v-icon left dark>
                                    mdi-cloud-upload
                                </v-icon>
                                Pago Efectivo
                                </v-btn>
                        </v-col>
                        <v-col cols="12" md="8" sm="6" class="text-center">
                            <v-card-text>
                                <v-btn
                                    v-for="icon in icons"
                                    :key="icon"
                                    class="white--text"
                                    icon
                                    >
                                    <v-icon size="24px">
                                        {{ icon }}
                                    </v-icon>
                                </v-btn>
                            </v-card-text>
                            <v-container class="text-center">
                                <v-btn class="mt-2" outlined color="white">
                                  <v-icon left dark>mdi-cloud-upload</v-icon>
                                    Pago Efectivo
                                </v-btn>
                            </v-container>
                                
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-row class="pl-15 pr-15">
                <v-divider class="test"></v-divider>
            </v-row>
            <v-card-text class="white--text mt-2">
                <v-row no-gutters>
                <v-col cols="12" md="6" sm="12">
                    texto 1
                </v-col>
                <v-col cols="12" md="2" sm="4">
                    texto 2
                </v-col>
                <v-col cols="12" md="2" sm="4">
                    texto 3
                </v-col>
                <v-col cols="12" md="2" sm="4">
                    texto 4
                </v-col>
            </v-row>
            </v-card-text> 
            <v-divider vertical></v-divider>
      </v-card>
    </v-footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "Footer",

    data: () => ({
        icons: [
        'mdi-facebook',
        'mdi-linkedin',
        'mdi-youtube',
        'mdi-instagram',
        'mdi-twitter',
      ],
      footer_links: [
        'Inicio',
        'Sobre Columbia',
        'Oferta Educativa',
        'Partners',
        'Profesionales Columbia',
        'Portal del Alumno',
        'Blog'
      ],
    }),

});
</script>

<style>
.test {
       
       border-color: rgb(255, 255, 255) !important;
       height: 100%;
}
.v-card{
    width: 100%;
}
.img_footer{
    height: 200px;
}

</style>