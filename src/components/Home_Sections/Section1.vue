<template>
    <section style="margin-top: 37px;">
        <v-img class="section_img" src = "../../assets/pages/page_1/Banner.png">
            <v-row class="mt-1">
                <v-col cols ="12" class="offset-md-2 sm-12 mt-16">
                    <v-card max-width="240" outlined class="white--text card_sec1" color="default1">

                        <v-layout column align-start class="my-6 ml-6" >
                        <h1 class="h1_card_sect1">Aviación Comercial</h1>
                        <h4>Duracion: 2 años</h4>
                        <h4>Inicio: 9 de enero 2023</h4>
                        <h4>Sedes: Lince y los Olivos</h4>
                        <div class="my-2">
                            <v-btn
                                class="mt-3"
                                small
                                color="primary"
                                dark
                            >
                            Inscríbete
                            </v-btn>
                        </div>
                    </v-layout>
                </v-card>
                </v-col>
            </v-row>
        </v-img>
    </section>
</template>

<script lang="ts">
    import Vue from "vue";
    export default Vue.extend({
      name: "HomePageSection1",

      data: () => ({

      }),
      
    });
</script>
<style>
    .section_img{
        
        background-size: cover;
        background-position: center;
        position: relative;
        height: 400px;
    }
    .card_sec1{
        border-radius: 16px 16px 16px 16px !important;
    }
    .h1_card_sect1{
        font-size: 200% !important;
        line-height: 40px;
    }
</style>