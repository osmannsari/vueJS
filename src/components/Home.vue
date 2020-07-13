<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="text-center">
        <h1>Welcome to Vuetify</h1>
         

        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br/>please join our online
          <a
            href="https://community.vuetifyjs.com"
            target="_blank"
          >Discord Community</a>
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">What's next?</h2>

        <v-row justify="center">
          <div class="text-center">
            <v-menu open-on-hover top offset-y>
              <template v-slot:activator="{ on }">
                <v-btn color="primary" dark v-on="on">LINKS</v-btn>
              </template>

              <v-list>
                <v-list-item
                  v-for="(item, index) in whatsNext"
                  :key="index"
                  :href="item.href"
                  v-on:click="whatsNext"
                >
                  <v-list-item-title>{{ item.text }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Important Links</h2>
        <v-row justify="center">
          <v-btn
            rounded
            color="green"
            dark
            v-for="(link,i) in importantLinks"
            :key="i"
            :href="link.href"
            target="_blank"
          >
            <span class="mr-2">{{link.text}}</span>
          </v-btn>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="text-center">Ecosystem </h2>

        <v-row justify="center">
          <v-btn
            rounded
            color="purple"
            dark
            v-for="(eco,i) in ecosystem"
            :key="i"
            :href="eco.href"
            target="_blank"
          >
            <span class="mr-2">{{eco.text}}</span>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "HelloWorld",

  data: () => ({
    
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" }
    ],
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader"
      },

      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify"
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify"
      }
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com"
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com"
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify"
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs"
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify"
      }
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer"
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/layout/pre-defined"
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions"
      }
    ],
    
  })
  
};
</script>
