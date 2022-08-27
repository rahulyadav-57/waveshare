import { AppConfig } from "@app/config";
import { AppMode, AuthProvider, computeAddress } from "@arcana/auth";

function createAuthService() {
  let auth = new AuthProvider(AppConfig.ARCANA.APP_ID!!);

  async function getAuth() {
    return auth;
  }

  async function init() {
    await auth.init({
      appMode: AppMode.Full,
      position: "right",
    });
  }

  async function isLoggedIn() {
    return await auth.isLoggedIn();
  }

  async function logout() {
    await auth.logout();
  }

  async function requestPublicKey(email: string) {
    return await auth.getPublicKey(email);
  }

  async function requestSocialLogin(type: string) {
    await auth.loginWithSocial(type);
  }

  async function requestUserInfo() {
    return await auth.getUser();
  }

  async function requestWalletInfo() {
    const provider = auth.provider;
    return await provider.request({ method: "eth_accounts" });
  }

  function setHook(event: any, handler: any) {
    const provider = auth.provider;
    provider.on(event, handler);
  }

  return {
    computeAddress,
    init,
    isLoggedIn,
    logout,
    requestPublicKey,
    requestSocialLogin,
    requestUserInfo,
    requestWalletInfo,
    setHook,
    getAuth,
  };
}

const AuthService = Object.freeze(createAuthService());

export default AuthService;
