const HDWalletProvider = require('@truffle/hdwallet-provider');

// Add your Sepolia network private key and RPC URL
const sepoliaPrivateKey = "1a4921b239018b2a59dcbaf3de8e34e2e9c7e23d39b3ac97109c1cf481f5ce48";
const sepoliaRpcUrl = "wss://sepolia.infura.io/ws/v3/59aff5b12dea44bd8f2dd146f3db59db";

module.exports = {
  networks: {
    sepolia: {
      provider: () => new HDWalletProvider(sepoliaPrivateKey, sepoliaRpcUrl),
      network_id: "11155111", // Match any network id
      gas: 5500000, // Adjust the gas limit as needed
      gasPrice: 10000000000 // Adjust the gas price as needed
    }
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.19",    // Fetch exact version from solc-bin (default: truffle's version)
    },
  },
};
