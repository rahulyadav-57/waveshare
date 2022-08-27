import { AppConfig } from "@app/config";
import { AppMode, AuthProvider, computeAddress } from "@arcana/auth";

function createAuthService() {
  const arcanaAuth = new AuthProvider(AppConfig.ARCANA.APP_ID!!);

  async function getAuth() {
    return arcanaAuth;
  }

  async function init() {
    await arcanaAuth.init({
      appMode: AppMode.NoUI,
      position: "right",
    });
  }

  async function isLoggedIn() {
    return await arcanaAuth.isLoggedIn();
  }

  async function logout() {
    await arcanaAuth.logout();
  }

  async function requestPublicKey(email: string) {
    return await arcanaAuth.getPublicKey(email);
  }

  async function requestSocialLogin(type: string) {
    await arcanaAuth.loginWithSocial(type);
  }

  async function requestUserInfo() {
    let data: any = await arcanaAuth.getUser();
    if (data) {
      data = JSON.parse(data);
    }
    return data;
  }

  async function requestWalletInfo() {
    const provider = arcanaAuth.provider;
    return await provider.request({ method: "eth_accounts" });
  }

  function setHook(event: any, handler: any) {
    const provider = arcanaAuth.provider;
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
