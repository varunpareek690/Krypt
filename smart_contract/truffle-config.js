const HDWalletProvider = require('@truffle/hdwallet-provider');

// Add your Sepolia network private key and RPC URL
const sepoliaPrivateKey = "add your private key";
const sepoliaRpcUrl = "add a node from infura/alchemy or local server such as ganache";

module.exports = {
  networks: {
    sepolia: {
      provider: () => new HDWalletProvider(sepoliaPrivateKey, sepoliaRpcUrl),
      network_id: "11155111", 
      gas: 5500000, 
      gasPrice: 10000000000 
    }
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.19",  
    },
  },
};
