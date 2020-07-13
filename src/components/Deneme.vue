<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="text-capitalize">deneme sayfası</h1>
      </v-col>

      <v-expansion-panels inset>
        <v-expansion-panel v-for="(item,i) in Deneme" :key="i">
          <v-expansion-panel-header>{{item.baslik}}</v-expansion-panel-header>
          <v-expansion-panel-content>{{item.ozet}}</v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <v-col class="mb-4">
        <div id="app">
          <v-app id="inspire">
            <div class="text-center">
              <v-bottom-sheet v-model="sheet">
                <template v-slot:activator="{ on }">
                  <v-btn color="brown lighten-1" dark v-on="on">Open In</v-btn>
                </template>
                <v-list>
                  <v-subheader>Open in</v-subheader>
                  <v-list-item v-for="tile in tiles" :key="tile.title" @click="sheet = false">
                    <v-list-item-avatar>
                      <v-avatar size="32px" tile>
                        <img
                          :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`"
                          :alt="tile.title"
                        />
                      </v-avatar>
                    </v-list-item-avatar>
                    <v-list-item-title>{{ tile.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-bottom-sheet>
            </div>
            <br />
            <div id="app">
              <v-app id="inspire">
                <v-card>
                  <v-tabs v-model="tab" background-color="blue-grey darken" dark>
                    <v-tab v-for="item in items" :key="item.tab">{{ item.tab }}</v-tab>
                  </v-tabs>

                  <v-tabs-items v-model="tab">
                    <v-tab-item v-for="item in items" :key="item.tab">
                      <v-card flat>
                        <v-card-text>{{ item.content }}</v-card-text>
                      </v-card>
                    </v-tab-item>
                  </v-tabs-items>
                </v-card>
              </v-app>
            </div>
          </v-app>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  name: "Deneme",
  data: () => ({
    tab: null,
    items: [
      { tab: "One", content: "Tab 1 Content" },
      { tab: "Two", content: "Tab 2 Content" },
      { tab: "Three", content: "Tab 3 Content" },
      { tab: "Four", content: "Tab 4 Content" },
      { tab: "Five", content: "Tab 5 Content" },
      { tab: "Six", content: "Tab 6 Content" },
      { tab: "Seven", content: "Tab 7 Content" },
      { tab: "Eight", content: "Tab 8 Content" },
      { tab: "Nine", content: "Tab 9 Content" },
      { tab: "Ten", content: "Tab 10 Content" }
    ],

    sheet: false,
    tiles: [
      { img: "hangouts.png", title: "Hangouts" },
      { img: "messenger.png", title: "Messenger" },
      { img: "google.png", title: "Google+" }
    ],
    Deneme: [
      {
        baslik: "1 Numaralı deneme",
        ozet: "1 numara"
      },
      {
        baslik: "2 Numaralı deneme",
        ozet: "2 numara"
      },
      {
        baslik: "3 Numaralı deneme",
        ozet: "3 numara"
      }
    ]
  })
};
</script>