import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/G2pOVy-RfKbBQN3AaAs8a9fjzw8Cknu8",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};

export default config;
