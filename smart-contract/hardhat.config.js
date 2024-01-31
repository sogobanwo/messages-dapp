require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */
const key = process.env.MY_PRIVATE_KEY
const sepholiaUrl = process.env.MY_ALCHEMY_URL
module.exports = {
  solidity: "0.8.19",
  networks:{
    sepolia:{
      url:`${sepholiaUrl}`,
      accounts:[`${key}`]
    } 
   }
};

