<template>
  <div id="app">
    <v-app id="inspire" v-show="$store.state.token">
      <v-container style="max-width: 500px">
        <v-text-field v-model="task" label="What are you working on?" solo @keydown.enter="save">
          <v-fade-transition v-slot:append>
            <v-icon v-if="task" @click="save">add_circle</v-icon>
          </v-fade-transition>
        </v-text-field>
        <v-btn @click="save" color="primary" rounded>Save</v-btn>
        <v-btn @click="list" color="primary" rounded>Listele</v-btn>

        <h2 class="display-1 success--text pl-4">
          Tasks:&nbsp;
          <v-fade-transition leave-absolute>
            <span :key="`tasks-${tasks.length}`">{{ tasks.length }}</span>
          </v-fade-transition>
        </h2>

        <h3>{{finaltodo}}</h3>
        <v-divider class="mt-4"></v-divider>
        <v-divider class="mb-4"></v-divider>
        <v-card v-if="tasks.length > 0">
          <v-slide-y-transition class="py-0" group tag="v-list">
            <template v-for="(task, i) in tasks">
              <v-divider v-if="i !== 0" :key="`${i}-divider`"></v-divider>

              <v-list-item :key="`${i}-${task.text}`">
                <v-list-item-action>
                  <v-checkbox v-model="task.done" :color="task.done && 'grey' || 'primary'">
                    <template v-slot:label>
                      <div
                        :class="task.done && 'grey--text' || 'primary--text'"
                        class="ml-4"
                        v-text="task.text"
                      ></div>
                    </template>
                  </v-checkbox>
                </v-list-item-action>

                <v-spacer></v-spacer>

                <v-scroll-x-transition>
                  <v-icon v-if="task.done" color="success">check</v-icon>
                </v-scroll-x-transition>
              </v-list-item>
            </template>
          </v-slide-y-transition>
        </v-card>
      </v-container>
      <v-col class="text-center">
        <v-text-field v-model="film" label="Search for films" solo @keydown.enter="search">
          <v-fade-transition v-slot:append>
            <v-icon v-if="film" @click="search">add_circle</v-icon>
          </v-fade-transition>
        </v-text-field>
      </v-col>
    </v-app>

    <v-app v-show="!$store.state.token">
      <v-col>
        <h1>You need to login first</h1>
      </v-col>
    </v-app>
  </div>
</template>

<script>
import store from "../store";
import $http from "../plugins/http";

export default {
  data: () => ({
    dialog: false,
    mtasks: [],
    tasks: [],
    task: null,
    finaltodo: [],
    film: null,
  }),

  computed: {
    remainingTasks() {
      return this.tasks.length - this.completedTasks;
    }
  },

  methods: {
    save: function() {
      this.tasks.push({
        text: this.task
      });

      let token = store.state.token;
      let project = this.task;

      this.$store
        .dispatch("todo", { project, token })
        .catch(err => console.log(err));
      this.task = null;
    },
    search: function() {
      
      let newfilm=this.film;
      console.log("Aranacak veri: " + newfilm);
       $http.post("/solr",{newfilm});

    },
    list: function() {
      let token = store.state.token;
      this.$store.dispatch("list", { token }).catch(err => console.log(err));
      $http
        .post("/todolist")
        .then(resp => {
          let i;
          for (i = 0; i < resp.data.length; i++) {
            this.tasks.push({
              text: resp.data[i]
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    },

    //http.post
    change() {
      this.$emit("eventNameDeneme", !this.appBarShown);
    }
  },

  mounted() {
    // this.$emit("eventNameDeneme", this.appBarShown);
  }
};
</script>