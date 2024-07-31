import RequestService, { LOGGED_USER, TOKEN } from "./RequestService";
import StorageService from "./StorageService";

export default class AuthenticationAPIService extends RequestService {
  storageService = new StorageService();
  constructor() {
    super("/auth/login");
  }

  async login(userCredencials) {
    const response = await super.login(userCredencials);
    if (response) {
      const token = response.bearer;
      const user = response.user;
      this.storageService.setItem(TOKEN, token);
      this.storageService.setItem(LOGGED_USER, user);
      super.registerToken(token);
      return user;
    }
  }

  getLoggedUser() {
    const loggedUser = this.storageService.getItem(LOGGED_USER);
    if (loggedUser != null) {
      return loggedUser;
    }
  }

  getToken() {
    const token = this.storageService.getItem(TOKEN);
    if (token != null) {
      return token;
    }
  }

  logout() {
    this.storageService.removeItem(LOGGED_USER);
    this.storageService.removeItem(TOKEN);
    super.logout()
  }
}
