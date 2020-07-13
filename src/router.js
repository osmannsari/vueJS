import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home";
import Deneme from "./components/Deneme";
import Todo from "./components/Todo";
import Form from "./components/Form";
import Register from "./components/Register";
import User from "./components/User";
import Login from "./components/Login";
import Private from "./components/Private";




Vue.use(VueRouter);

const routes = [
    { path: "/deneme", component: Deneme },
    { path: "/", component: Home },
    { path: "/todo", component: Todo },
    { path: "/form", component: Form },
    { path: "/register", component: Register },
    { path: "/user", component: User },
    { path: "/login", component: Login },
    { path: "/private", component: Private },
  
    

];

export const router = new VueRouter({
    mode: "history",
    routes
});