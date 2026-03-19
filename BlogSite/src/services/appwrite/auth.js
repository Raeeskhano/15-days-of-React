import config from "../../config/config.js";

import { Client, Account, ID } from "appwrite";

export class AuthService {
  Client = new Client();
  Account;

  constructor() {
    this.Client.setEndpoint(config.appwriteUrl).setProject(
      config.appwriteProjectId,
    );

    this.Account = new Account(this.Client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.Account.createAccount(
        ID.unique(),
        email,
        password,
        name,
      );

      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      const session = await this.Account.createEmailPasswordSession({
        email: email,
        password: password,
      });
      return session;
    } catch (error) {
      console.log("issue while logining", error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.Account.get();
    } catch (error) {
      console.log("user not login", error);
    }
  }

  async logOut() {
    try {
      await this.Account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
