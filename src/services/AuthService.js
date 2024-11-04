import http from "./Http";
import api from "../config/apinode";
import store from "../store";
import EnvironmentConfig from "../config/configFile-prod";
// import { token } from "../../../api/controllers/auth2";


class AuthService {
  signup(data) {
    var bearerToken = api.credentials.admin.access_token;
    var headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + bearerToken
    };
    return http("post", data, "users", headers);
  }

  forgot(data) {
    var bearerToken = api.credentials.admin.access_token;
    var headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + bearerToken
    };
    return http("put", null, "users/"+data.email, headers);
  }

  me() {
    var headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: this.userLogged().token_type + " " + this.userLogged().access_token
    };
    return http("get", null, "users/me", headers);
  }


  verifyOAuthToken (authCode) {

    const params = new URLSearchParams();
    params.append("grant_type", "authorization_code");
    // params.append("client_id", EnvironmentConfig.client_id);
    // params.append("client_secret", EnvironmentConfig.client_secret)
    params.append("code", authCode);

    var headers = {
      "Content-Type": "application/x-www-form-urlencoded"
    };

    return http("post", params, "auth/callback", headers);

  }

  password(username, password) {
    const params = new URLSearchParams();
    params.append("grant_type", "password");
    params.append("client_id", EnvironmentConfig.client_id);
    params.append("client_secret", EnvironmentConfig.client_secret)
    params.append("username", username);
    params.append("password", password);

    var headers = {
      "Content-Type": "application/x-www-form-urlencoded"
    };

    return http("post", params, "auth/token", headers);
  }

  userLogged() {
    // var user =  await store.dispatch("userLogged")
    
    // console.log('user logged', user.__ob__);
    // return store.dispatch("userLogged");

    return  JSON.parse(localStorage.getItem('login'));
  }

  login(user) {

    if (user) {
      localStorage.setItem('login', JSON.stringify(user));
      // context.commit('login', payload)
      return true
    }

    return false

    // return store.dispatch("login", user);
  }


  logout() {
    
    localStorage.removeItem('login');
      // context.commit('login', payload)
    return true
    // return store.dispatch("login", user);
  }
}

export default AuthService;
