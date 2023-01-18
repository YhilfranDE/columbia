<template>
    <v-container fluid class="mt-15 sect6_contet">
        <v-row aling="center" justify="center" class="text-justify">
            <v-col cols="12" sm="12" md="6">
                <h1 class="white--text text-center" style="font-size: 320%;">{{title}}</h1>
                <div class="arrow-down text-center"></div>
                <h3 class="mt-10" style="color: #bed6f6;">{{content}}</h3>
                <v-row heigth ="100px">
                    <video controls class="video_content">
                        <source type="video/mp4" src="@/assets/prueba.mp4"/>
                    </video>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
    import Vue from "vue";
    export default  Vue.extend({
        name:"AboutViewSection6",
        data:() =>({
            title:"Programa de aprendizaje vivencial",
            content:"Realizamos viajes nacionales e internacionales para fortalecer el conocimiento práctico de nuestros estudiantes, para otorgarles una mirada mucho más amplia del manejo de los servicios que el cliente busca para vivir una experiencia de viaje mucho más completa.",
            
        }),

    });
</script>

<style>
    .sect6_contet{
        background: linear-gradient(to right, #6732bf, #225cea,#225cea,#6732bf);
        height: 750px;
    }
    .arrow-down {
        width: 0; 
        height: 0; 
        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
        border-top: 20px solid #fff;
        margin: auto;
    }
    .video_content{
        width: 80%;
        margin-left: 70px;
        margin-top: 50px;
    }
</style>