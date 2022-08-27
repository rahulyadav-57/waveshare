import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export interface authInterface {
  id?: string;
  email?: string;
  name?: string;
  picture?: string;
  token?: string;
}

const authAtom = atom<authInterface | null>({
  key: "auth",
  default: null,
  // effects_UNSTABLE: [persistAtom],
});

export { authAtom };
