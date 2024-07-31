import React from "react";
import AuthenticationAPIService from "../service/AuthenticationAPIService";

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;
const AuthProvider = AuthContext.Provider;

export default class SessionProvider extends React.Component {
  state = {
    loggedUser: null,
    service: true,
  };

  constructor() {
    super();
    this.service = new AuthenticationAPIService();
  }

  async componentDidMount() {
    this.start();
    this.setState({ loading: false });
  }

  service = new AuthenticationAPIService();

  start = async () => {
    const loggedUser = this.service.getLoggedUser();
    const token = this.service.getToken();

    this.setState({ loggedUser });
    this.service.registerToken(token);
  };

  end = () => {
    this.setState({ loggedUser: null });

    return this.service.logout();
  };

  isAuthenticated = () => {
    return this.state.loggedUser != null;
  };

  login = async (userCredentials) => {
    const user = await this.service.login(userCredentials);
    if (user) {
      this.start();
      return user;
    } else {
      return null;
    }
  };

  isAuthorized = () => {
    if (this.loggedUser) {
      const roles = this.loggedUser.roles;
      return roles[0] === "ADMIN";
    } else {
      return false;
    }
  };

  render = () => {
    if (this.loading) {
      return false;
    }

    const context = {
      loggedUser: this.state.loggedUser,
      isAuthenticated: this.isAuthenticated,
      start: this.start,
      end: this.end,
      login: this.login,
      isAuthorized: this.isAuthorized,
    };

    return <AuthProvider value={context}>{this.props.children}</AuthProvider>;
  };
}
