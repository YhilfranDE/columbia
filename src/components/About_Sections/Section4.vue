<template>
    <section >
        <v-img  class="section_img" src = "../../assets/pages/page_2/banner_3.png">
            <v-row>
                <v-col cols ="12" class="offset-md-7 sm-12 mt-16    ">
 
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
        name:"AboutViewSection4",
        data:() =>({
            title:'Instituto Licenciado',
            text:'Reconocidos con el Licenciamiento Institucional otorgado por el MINEDU, al haber cumplido con los requisitos establecidos en la ley N° 30512.'
        }),

    });
</script>