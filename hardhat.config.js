// hardhat.config.js
require('@nomiclabs/hardhat-waffle');
const { 98f93f78e6a049c5a8a422485a127993 } = require('./secrets.json');

module.exports = {
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`, // Replace with your Infura or Alchemy URL
      accounts: [`0x${PRIVATE_KEY}`], // Replace with your Ethereum address's private key
    },
  },
  solidity: '0.8.0',
};
