import { useRecoilState } from "recoil";

import { useFetchWrapper } from "@app/_helpers";
import { authAtom } from "@app/_state";

export { useUserActions };

function useUserActions() {
  // const baseUrl = `${AppConfig.API_URL}/users`;
  const fetchWrapper = useFetchWrapper();
  const [auth, setAuth] = useRecoilState(authAtom);
  console.log("hiii");
  return {
    logout,
    updateAuth,
  };

  function updateAuth(value: any) {
    setAuth((currentData: any) => {
      return { ...currentData, ...value };
    });
  }
  function logout() {
    // remove user from local storage, set auth state to null and redirect to login page
    localStorage.removeItem("user");
    setAuth(null);
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }
}
