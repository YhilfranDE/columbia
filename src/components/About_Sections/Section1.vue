<template>

<section class="" style="margin-top: 37px;" >
    <v-img  class="section_img" src = "@/assets/pages/page_2/banner.png">
        <v-container class="mt-9 mb-10">
            <v-row no-gutters justify="center" class="ml-9">
                <h1 class="white--text h1_banner_sect2" >¿Por qué <span class="font-italic">Columbia?</span></h1>
            </v-row>
        </v-container>
    </v-img>
</section>


</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    name:"AboutViewSection1",
    
    data: () => ({

    }),

});
</script>

<style>
    .about_section1{

            background-size: cover;
            background-position: center;
            position: relative;
            height: 400px;
    }
    .h1_banner_sect2{
            font-size: 400% !important;
            margin-top: 75px;
    }
</style>