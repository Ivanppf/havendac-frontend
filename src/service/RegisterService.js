import AuthenticationAPIService from "./AuthenticationAPIService";
import RequestService, { LOGGED_USER, TOKEN } from "./RequestService";
import StorageService from "./StorageService";

export default class RegisterService extends RequestService {
  storageService = new StorageService();
  authenticationAPIService = new AuthenticationAPIService();
  constructor() {
    super("/users");
  }

  async register(user) {
    const response = await super.register(user);
    if (response) {
      const userCredencials = {
        email: user.email,
        password: user.password,
      };
      this.authenticationAPIService.login(userCredencials);
    }
  }
}
