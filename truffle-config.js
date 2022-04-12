const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider")
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

const private_keys = [
  '9d453e19e7a31512a65b957b4f0c8720037862200246829adabda33a0c396cfd',
  '706d748119d21959f00a15146f5471f2a506622a37ab841bbf280892c081be33'
]

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      host: "127.0.0.1",
      network_id: "*",
      port: 8545
    },
    kovan: {
      provider: () => new HDWalletProvider({
        privateKeys: private_keys,
        providerOrUrl: "wss://kovan.infura.io/ws/v3/923342792af647c99d86c493a902a2bc",
        numberOfAddresses: 2
      }),
        
      network_id: 42,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    rinkeby: {
      provider: () => new HDWalletProvider({
        privateKeys: private_keys,
        providerOrUrl: "wss://rinkeby.infura.io/ws/v3/923342792af647c99d86c493a902a2bc",
        numberOfAddresses: 2
      }),
        
      network_id: 4,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    matic: {
      provider: () => new HDWalletProvider(mnemonic, 'https://rpc-mumbai.maticvigil.com'),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },

  mocha:{

  },

  compilers: {
    solc: {
      version: "0.8.0"
    }
  }
};  
