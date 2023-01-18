<template>

    <v-container class="mt-3 mb-10">
        <v-row no-gutters align="center" justify="center" class="ml-9">
            <v-divider class="items_line"></v-divider>
            <v-col cols="12" md="2" sm="12" v-for="(item, i) in items" :key = i  class="text-center" style="height: 300px;">
                <v-card-actions class="px-3 pb-3 mt-15 ml-55" style="margin-top: 106px !important;">
                    <v-btn class="mx-2 default1--text" fab dark large color="white" >
                        <v-icon dark size="40">
                            {{ item.icon }}
                        </v-icon>
                    </v-btn>
                </v-card-actions>
                <h4 class="ml-8 grey--text">{{ item.title }}</h4>      
                <h3 class="ml-6 grey--text">{{ item.text }}</h3 >
            </v-col>
        </v-row>
    </v-container>


















</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    name:"Prueba",
    data: () => ({
        items: [
            {
                icon: "mdi-update",
                title: "Duración:",
                text: "3 años",
            },
            {
                icon: "mdi-calendar-month",
                title: "Frecuencia:",
                text: "Luneas a Viernes",
            },
            {
                icon: "mdi-clock-outline",
                title: "Horarios:",
                text: "Mañana: 8:00a.m.-12:20pm Tarde 2:00p.m.-6:20p.m",
            },
            {
                icon: "mdi-map-marker-radius",
                title: "Sede donde estudiar:",
                text: "San Isidro",
            },
            {
                icon: "mdi-bag-suitcase-outline",
                title: "Campo Laboral:",
                text: "Restaurantes Hoteles Cruceros Resorts",
            },                                              
        ],
    }),

});
</script>

<style>
.items_line{
    position: absolute;
    width: 70%;
    margin-left: -70px !important;
    border: solid 12px !important;
    border-radius: 6px;
    border-color: #6200ea !important;
    
}
.ml-55{
    margin-left: 55px !important;
}
</style>