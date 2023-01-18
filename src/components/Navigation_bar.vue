<template>
    <div>
      <v-navigation-drawer
        v-model="drawer"
        color="deep-purple accent-4"
        app
        temporary
        dark
        src="">
        <v-list >

          <v-list-item>
            <v-list-item-avatar>
              <img src="//upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Columbia_logo.jpg/657px-Columbia_logo.jpg" alt="Logo" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="title">Columbia</v-list-item-title>
              <v-list-item-subtitle>Site</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
  
        <v-divider />
  
        <v-list dense>
          <v-list-item
            v-for="([icon, text, link], i) in items"
            :key="i"
            link
            :to="link"
          >
            <v-list-item-icon class="justify-center ">
              <v-icon>{{ icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="subtitile-1">{{
                text
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  
      <v-app-bar
        app
        color="deep-purple accent-4"
        :flat="flat"
        dark
        class="px-15 nav_h"
        :class="{ expand: flat }"
        
      >
      <div class="d-flex align-center">
        <v-img
            alt="Columbia Logo"
            class="shrink mr-2"
            contain
            src="https://w7.pngwing.com/pngs/179/939/png-transparent-columbia-sportswear-shirt-clothing-sleeve-down-feather-ironman-heroes-text-hand.png"
            transition="scale-transition"
            width="40"
        />

        <v-img
            alt="Vuetify Name"
            class="shrink mt-1 hidden-sm-and-down"
            contain
            min-width="100"
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
            width="100"
        />
        </div>

        <v-toolbar-title >
          <v-img src="" />
        </v-toolbar-title>
        <v-spacer />
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          class="mr-4"
          v-if="isXs"
        />
        <div v-else>  
      
          <v-btn text to="/home">
            <span class="mr-2">Inicio</span>
          </v-btn>

              <!-- Sub Menu (en contruccion) -->
          <!-- <v-menu offset-y key="Custom" rounded="b-xl" >
            <template v-slot:activator="{ on, attrs }">
              <v-btn flat depressed  v-bind="attrs" v-on="on" slot="activator" color="deep-purple accent-4">
                <span>Menu</span>
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item link v-for="link in links_about" :key="link.name" router :to="link.route">
                <v-list-item-title>

                  <v-menu offset-x key="Custom" rounded="b-xl" open-on-hover >
                  <template v-slot:activator="{ on, attrs }" >
                  <v-btn flat depressed  v-bind="attrs" v-on="on" slot="activator" color="white">
                  <span>{{link.name}}</span>
                  </v-btn>
                  </template>
                  <v-list v-if="link.items">
                  <v-list-item link v-for="sub in link.items" >
                  <v-list-item-title>
                  {{sub.name}}
                  </v-list-item-title>
                  </v-list-item>
                  </v-list>
                  </v-menu>

                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu> -->






         







          <v-btn text to="/about">
            <span class="mr-2" href="/about">Sobre Columbia</span>
          </v-btn>
          <v-btn text to="/educative_offer">
            <span class="mr-2" href="/educative_offer">Oferta Educativa</span>
          </v-btn>
          <v-btn text to="partners">
            <span class="mr-2" href="/partners">Partners</span>
          </v-btn>
          <v-btn text to="professionals">
            <span class="mr-2" href="/professionals">Profesionales Columbia</span>
          </v-btn>  
          <v-btn text to="portal">
            <span class="mr-2" href="/portal">Portal del Alumno</span>
          </v-btn>
          <v-btn text to="blog">
            <span class="mr-2" href="/blog">Blog</span>
          </v-btn> 

          
          
          
          <!--<v-btn text @click="$vuetify.goTo('#download')">
            <span class="mr-2">Download</span>
          </v-btn>
          <v-btn text @click="$vuetify.goTo('#pricing')">
            <span class="mr-2">Preços</span>
          </v-btn>
          <v-btn rounded outlined text @click="$vuetify.goTo('#contact')">
            <span class="mr-2">Contactenos</span>
          </v-btn>-->
        </div>
      </v-app-bar>
    </div>
  </template>
  
  <style scoped>
  .v-toolbar {
    transition: 0.6s;
  }
  .expand {
    height: 80px !important;
    padding-top: 10px;
  }
  </style>
  
  <script>
  export default {
    data: () => ({
      drawer: false,
      isXs: false,
      items: [
        ["mdi-home-outline", "Home", "/home"],
        ["mdi-information-outline", "Sobre", "about"],
        ["mdi-download-box-outline", "Otro Link", "#download"],
        ["mdi-currency-usd", "Otro Link", "#pricing"],
        ["mdi-email-outline", "Otro Link", "#contact"],
      ],
      About_items: [
      { title: 'About_1' },
      { title: 'About_2' },
      { title: 'About_3' },
      { title: 'About_4' },
    ],
    links_about:[
      { 
        route: '', 
        name:'item1', 
      },
      { 
        route: '', 
        name:'item2',
        items: [
          {
            route: '',
            name: 'sub_item1',
          },
          {
            route: '',
            name: 'sub_item1'
          }
       ]
      },
      { 
        route: '', 
        name:'item3',
      },
    ],
    
    }), 
    props: {
      color: String,
      flat: Boolean,
    },
    methods: {
      onResize() {
        this.isXs = window.innerWidth < 850;
      },
    },
    watch: {
      isXs(value) {
        if (!value) {
          if (this.drawer) {
            this.drawer = false;
          }
        }
      },
    },
    mounted() {
      this.onResize();
      window.addEventListener("resize", this.onResize, { passive: true });
    },
  };
</script>

<style>
.nav_h{
  height: 100px !important;
}
.v-toolbar__content{
  height: 100px !important;
}
</style>