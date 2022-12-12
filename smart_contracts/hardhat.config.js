// https://eth-goerli.g.alchemy.com/v2/5jWKhrrmwnExaQwN-Zr0Njkwp1Fl13_X

require("@nomiclabs/hardhat-waffle")

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli : {
        url: "https://eth-goerli.g.alchemy.com/v2/5jWKhrrmwnExaQwN-Zr0Njkwp1Fl13_X",
        accounts: ["88c5ad1b4f2e5fe1cac611de5736878b1a1a39f612cc32bd2955f099a216fbb1"]
    }
  }
}