<template>
    <v-container class="mt-7 mb-10">
        <v-row no-gutters>
          <v-col cols="12"  md="4" sm="12" class="blue_text--text">
            <h2 class="text-uppercase font-weight-black">Instituto Columbia</h2>
            <v-list-item three-line class="delete_padding font-weight-black " >
              <v-list-item-content style="padding: 30px 0px !important; margin-top: -16px !important;">
                <v-list-item-subtitle class="listItem--text">
                  RM No. 010-2019 MINEDU 
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <h2 class="text-uppercase font-weight-black">CARRERAS</h2>
            <v-list-item three-line class="delete_padding font-weight-black " >
              <v-list-item-content style="padding: 30px 0px !important; margin-top: -16px !important;">
                <v-list-item-subtitle class="listItem--text">
                  Hotelería Internacional
                </v-list-item-subtitle>
                <v-list-item-subtitle class="listItem--text">
                  Alta Cocina
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item> 
            <h2 class="text-uppercase font-weight-black">PROGRAMAS DE FORMACIÓN CONTINUA</h2>
            <v-list-item three-line class="delete_padding font-weight-black " >
              <v-list-item-content style="padding: 30px 0px !important; margin-top: -16px !important;">
                <v-list-item-subtitle class="listItem--text">
                  Cabin Crew: Servicio y hospitalidad en
                  vuelos comerciales
                </v-list-item-subtitle>
                <v-list-item-subtitle class="listItem--text">
                  Servicio y atención de viajeros a bordo
                </v-list-item-subtitle>
                <v-list-item-subtitle class="listItem--text">
                  Counter
                </v-list-item-subtitle>    
                <v-list-item-subtitle class="listItem--text">
                  Software informático para Hoteles y Restaurantes
                </v-list-item-subtitle>        
                <v-list-item-subtitle class="listItem--text">
                  Bartender
                </v-list-item-subtitle>  
                <v-list-item-subtitle class="listItem--text">
                  Panadería y Pastelería
                </v-list-item-subtitle>                                                       
              </v-list-item-content>
            </v-list-item>                       
          </v-col>
          <v-col cols="12" offset-md="1"  md="3" sm="12" class="blue_text--text">
            <h2 class="text-uppercase font-weight-black">CETPRO COLUMBIA</h2>
            <v-list-item three-line class="delete_padding font-weight-black " >
              <v-list-item-content style="padding: 30px 0px !important; margin-top: -16px !important;">
                <v-list-item-subtitle class="listItem--text">
                  RDR No. 05741-2009 DRELM - Lince
                </v-list-item-subtitle>
                <v-list-item-subtitle class="listItem--text">
                  RDR No. 111885-2014 - Los Olivos
                </v-list-item-subtitle>
              </v-list-item-content>             
            </v-list-item>
            <h2 class="text-uppercase font-weight-black">ESPECIALIDAD</h2>
            <v-list-item three-line class="delete_padding font-weight-black " >
              <v-list-item-content style="padding: 30px 0px !important; margin-top: -16px !important;">
                <v-list-item-subtitle class="listItem--text">
                  Aviación Comercial
                </v-list-item-subtitle>
              </v-list-item-content>             
            </v-list-item>            
          </v-col>
          <v-col cols="12" offset-md="1" md="3" sm="12" class="blue_text--text">
            <h2 class="text-uppercase font-weight-black">Sedes  </h2>
            <v-list-item three-line class="delete_padding font-weight-black " >
              <v-list-item-content style="padding: 30px 0px !important; margin-top: -16px !important;">
                <v-list-item-subtitle class="listItem--text">
                  Av. Javier Prado Este 515
                <br>SAN ISIDRO
                </v-list-item-subtitle>
                <v-list-item-subtitle class="listItem--text">
                  Av. Paseo de la República 2232
                <br>LINCE
                </v-list-item-subtitle>
                <v-list-item-subtitle class="listItem--text">
                  Av. Angélica Gamarra 160-174
                  <br>LOS OLIVOS
                </v-list-item-subtitle>
              </v-list-item-content>             
            </v-list-item>
          </v-col>
        </v-row>
    </v-container>
</template>
    
    <script lang="ts">
    import Vue from "vue";
    
    export default Vue.extend({
      name: "Pre_footer",
    
      data: () => ({
    
      }),
      
    });
    </script>

<style>
  .delete_padding{
    padding: 0 !important;
  }
</style>