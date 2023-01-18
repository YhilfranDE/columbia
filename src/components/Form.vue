<template>
    <v-parallax
      dark
      src="https://img.freepik.com/fotos-premium/piscina-cama-borrosa-abstracta-alrededor-piscina-hotel-resort-lujo_1339-129448.jpg"
      height="450">
      <v-container id="features" class="">
        <v-row no-gutters>
          <v-col cols="12" md="5" sm="12"></v-col>
          <v-col cols="12" md="7" sm="12">
            <v-card class="card_form pa-md-6">
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
              >
                <v-row>
                  <v-col cols="12" md="6" sm="12">    
                    <v-text-field
                      v-model="name"
                      :counter="25"
                      :rules="nameRules"
                      label="Nombres y Apellidos"
                      prepend-icon="mdi mdi-card-account-details-outline"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" sm="12">
                    <v-text-field
                      v-model="phone"
                      :rules="phoneRules"
                      label="Celular"
                      prepend-icon="mdi mdi-cellphone"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" md="6" sm="12">
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      label="Correo Electrónico"
                      prepend-icon="mdi mdi-email-outline"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" sm="12">
                    <v-select
                      v-model="district_select"
                      :items="items"
                      :rules="[v => !!v || 'Debe elegir una opción']"
                      label="Distrito"
                      prepend-icon="mdi mdi-map-marker-radius-outline"
                      required
                    ></v-select>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" md="6" sm="12">
                    <v-select
                      v-model="program_select"
                      :items="items"
                      :rules="[v => !!v || 'Debe elegir una opción']"
                      label="Carrera o programa de interés"
                      prepend-icon="mdi mdi-book-education-outline"
                      required
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="6" sm="12">
                    <v-select
                      v-model="academic_select"
                      :items="items"
                      :rules="[v => !!v || 'Debe elegir una opción']"
                      label="Estado académico actual"
                      prepend-icon="mdi mdi-account-school-outline"
                      required
                    ></v-select>
                  </v-col>
                </v-row>
                <v-checkbox
                      v-model="checkbox"
                      :rules="[v => !!v || 'Debe Aceptar para Continuar!']"
                      label="Acepto la Política de Privacidad y Protección de Datos Personales"
                      required>
                </v-checkbox>
                <v-btn
                      :disabled="!valid"
                      small
                      color="primary"
                      class="mr-4"
                      @click="validate"
                    >
                      enviar
                </v-btn>
              </v-form>
           </v-card>
            </v-col>
          </v-row> 
        </v-container>      
      </v-parallax>
  </template>
      
  <script>
    import Vue from "vue";
  
    export default Vue.extend({
      name: "Form",
  
      data: () => ({
        valid: true,
        name: '',
        nameRules: [
          v => !!v || 'Nombre y Apellido son requeridos',
          v => (v && v.length > 6) || 'El nombre debe contener mas de 6 carácteres',
          v => (v && v.length <= 25) || 'El nombre debe contener menos de 25 carácteres',
        ],
        phone: '',
        phoneRules: [
          v => !!v || 'Numero de celular es requerido',
          // v => (v && v.length > 6) || '#restriccion',
          // v => (v && v.length <= 25) || '#restriccion',
        ],      
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        select: null,
        items: [
          'Item 1',
          'Item 2',
          'Item 3',
          'Item 4',
        ],
        checkbox: false,
      }),
      
      methods: {
        validate () {
          this.$refs.form.validate()
        },
        reset () {
          this.$refs.form.reset()
        },
        resetValidation () {
          this.$refs.form.resetValidation()
        },
      },
  
    });
  </script>
  <style>
    .card_form{
      border-radius: 24px 24px 24px 24px !important;
      background-color: rgba(255, 255, 255, 0.88) !important; 
      min-height: 275px !important;
    }
  </style>