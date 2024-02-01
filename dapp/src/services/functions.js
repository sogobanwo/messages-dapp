import contractABI from "../abi.json";
const { ethers } = require("ethers");

export async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

export async function sendMessage(values) {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        "0x55095600181cfe5339b9D7379bbEEB75A1234fb0",
        contractABI,
        signer
      );

      try {
        const transaction = await contract.setMessage(values);
        await transaction.wait();
        console.log("Message Sent");
        const messages = await contract.getMessage();
        console.log(messages);
        return messages
      } catch (err) {
        console.error("Error:", err);
      }
    }
   
  }
