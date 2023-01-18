<template>
    <section >
        <v-img  class="section_img" src = "@/assets/pages/page_2/banner_4.png">
            <v-row>
                <v-col cols ="12" class="offset-md-2 sm-12 mt-16    ">
 
                     <v-card  max-width="460" outlined class="white--text card_sec1 delete_border content_tra" >
                        <row justify="center">
                        <v-layout column align-start class="my-6 ml-6" >
                            <h1 class="blue_text--text font_section_titles">{{title}}</h1>
                            <h3 class="black--text text-justify" >{{text}}</h3>
                      
                    </v-layout></row>
                </v-card> 
                </v-col>
            </v-row>
        </v-img>
    </section>
</template>
<script lang="ts">
    import Vue from "vue";
    export default  Vue.extend({
        name:"AboutViewSection5",
        data:() =>({
            title:'Infraestructura',
            text:'Contamos con una infraestructura de primer nivel, para brindar una experiencia de comodidad y calidad. Nuestros alumnos podrán tener experiencias vivenciales en cada uno de nuestros módulos de avión, restaurante, housekeeping, bar, y cocinas.'
        }),

    });
</script>