import axios from 'axios';
import $http from '../plugins/http';
import { request } from 'http';

//import { request } from "http"


export default {
    login({ commit }, user) {

        return new Promise((resolve, reject) => {
            commit('auth_request');
            $http.post("/login", user)
                .then(resp => {
                    const response = resp.data;

                    console.log('username: ' + user.username);

                    localStorage.setItem('token', response);
                    $http.defaults.headers.common['authorization'] = response;
                    console.log('token' + response);
                    commit('auth_success', response);
                    resolve(resp);



                })
                .catch(err => {
                    commit('auth_error');
                    localStorage.removeItem('token');
                    reject(err);
                })
                


            // axios({ url: 'http://localhost:8081/login', data: user, method: 'POST' })
            //     .then(resp => {
            //         const token = resp.data;
            //         localStorage.setItem('token', token);
            //         axios.defaults.headers.common['auth-token'] = token
            //         commit('auth_success', token);
            //         resolve(resp);

            //     })
            //     .catch(err => {
            //         commit('auth_error');
            //         localStorage.removeItem('token');
            //         reject(err);
            //     })
        })
    },
    // search({commit},newfilm){
    //     return new Promise((resolve,reject)=>{
    //         commit('auth_request')
    //         console.log(newfilm)
    //         $http.post("/login", newfilm)
           
    //         resolve(newfilm)
    //         console.log(reject)
    //     })
    // },
    register({ commit }, user) {
        return new Promise((resolve, reject) => {
            commit('auth_request')
            axios({ url: 'http://localhost:8080/register', data: user, method: 'POST' })
                .then(resp => {
                    const token = resp.data;
                    console.log('token: ' + token)

                    localStorage.setItem('token', token)
                    axios.defaults.headers.common['authorization'] = token;
                    commit('auth_success', token);

                    resolve(resp)
                })
                .catch(err => {
                    commit('auth_error', err)
                    localStorage.removeItem('token')
                    reject(err)
                })
        })
    },


    logout({ commit }) {
        return new Promise((resolve, reject) => {
            commit('logout')
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            delete axios.defaults.headers.common['authorization']
            resolve()

                .catch(err => {
                    commit('auth_error', err)
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');

                    reject(err)

                })
        })



    },
    list({commit},listToken){
        return new Promise((resolve,reject)=>{
            commit('auth_request');
            $http.post("/todolist", listToken)
            .then(resp => {
                console.log(request.body);
                console.log('userid: '+resp.data);
                console.log('token'+listToken.token);
               
                
                //$http.post("todolist",resp.data);


                resolve(resp);
            })
            .catch(err => {
                commit('auth_error');
                localStorage.removeItem('token');
                reject(err);
            })
           
        
           

        })
    },
    todo({ commit }, projectName) {

        return new Promise((resolve, reject) => {
            commit('auth_request');
            $http.post("/todo", projectName)
                .then(resp => {
                    const project = projectName.project;
                    const response = resp.data;
                   

                    const token = projectName.token;

                    console.log('token: ' + token);

                    //$http.defaults.headers.common["authorization"] = token;


                    commit('setNewProjectName', project);
                    commit('setNewUser', response);

                    resolve(resp);
                })
                .catch(err => {
                    commit('auth_error');
                    localStorage.removeItem('token');
                    reject(err);
                })
        })
    },

}













// todo({ commit }, projectName) {

//     return new Promise((resolve, reject) => {
//         commit('auth_request');
//         axios({
//             url: 'http://localhost:8081/todo',
//             data: projectName, method: 'POST'
//         })
//             .then(resp => {
//                 const project = projectName.project;
//                 const user = resp.data;


//                 console.log('user: ' + user)
//                 console.log('project: ' + project);

//                 localStorage.setItem('user', user);

//                // axios.defaults.headers.common['auth-token'] = project.token;
//                // console.log('token: ' + project.token);

//                 //commit('auth_success', project.token);
//                 commit('setNewProjectName', project);
//                 commit('setNewUser', user);

//                 resolve(resp);
//                 console.log(request.body);


//             })
//             .catch(err => {
//                 commit('auth_error');
//                 localStorage.removeItem('token');
//                 reject(err);
//             })
//     })
// }