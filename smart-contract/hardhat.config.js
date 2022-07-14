require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/mb2egAs4nUD4anEqXfE6mmbvRjuBbyEe",
      accounts: ["ab05dc99c1eaac691bdb8130f62d8e8d9e88817ed79f90025437de2b043e1f7f"],
    },
  },
};