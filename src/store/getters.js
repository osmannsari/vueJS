export default{
    isLoggedin: state => !!state.token,
    //isAdmin: state => !!state.admin,
    authStatus: state => state.status,
  }
  