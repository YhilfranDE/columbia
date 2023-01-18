<template>
    <section >
        <v-img  class="section_img" src = "../../assets/pages/page_2/banner_2.png">
            <v-row>
                <v-col cols ="12" class="offset-md-2 sm-12 mt-10">
 
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
        name:"AboutViewSection3",
        data:() =>({
            title:'Prestigio',
            text:'Somos una institución educativa que ofrece educación de calidad en la industria de los viajes, el turismo, la hotelería, la alta cocina, los idiomas y las tecnologías. Estamos seguros de que nuestra experiencia y tu talento se complementarán y harán de ti un profesional destacado y exitoso.'
        }),

    });
</script>

<style>
.delete_border {
  border: none !important;
}
.content_tra{
    background-color: rgba(255, 255, 255, 0.158) !important;
}

</style>