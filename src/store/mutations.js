export default{
    changeValue(state) {
      state.invisible = !state.invisible;
      console.log("invisible= " + state.invisible);
  
    },
    changeBack(state) {
      state.invisible = !state.invisible;
      console.log("invisible" + state.invisible);
    },
    auth_request(state) {
      state.status = 'loading';
    },
    auth_success(state,token) {
      
      state.status = 'success';
      state.token = token;
    
  },
  setNewProjectName(state,name ){
    state.status = 'success';
    state.newProjectName=name;
  },
  setNewUser(state,user ){
    state.user=user;
  },
   
  
    auth_error(state) {
      state.status = 'error'
    },
    logout(state) {
      state.status = 'logout';
      state.token = '';
      state.user='';
      state.newProjectName='';
    },
  
  }
  