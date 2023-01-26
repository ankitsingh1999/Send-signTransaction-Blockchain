async function main() {
    require('dotenv').config();
    const { API_URL, PRIVATE_KEY } = process.env;
    const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
    const web3 = createAlchemyWeb3("https://eth-goerli.g.alchemy.com/v2/RkwVGTyyBBI2PvJWLTT7mvqsvxhoPbXl");
    const myAddress = '0xD322A0bd6A139cFd359F1EFC540F6cb358d73A16' //Public address

    const nonce =  await web3.eth.getTransactionCount(myAddress, 'latest'); // to get the count of transaction
    console.log("nonce", nonce)
    const transaction = {
     'to': '0xa16E73Fb873eBa0D0D79b5DC64c594C33bF33AA4', // address to return eth
     'value': 10000000000000000, // ETH in Wei
     'gas': 30000,
     'nonce': nonce,
     'maxPriorityFeePerGas': "10",  // amount of gas added as a tip to the validator
     
     // optional data field to send message or execute smart contract
    };

    const signedTx = await web3.eth.accounts.signTransaction(transaction, "db0ec29e22b7383271b72476ff9d1223b34fcdff33bb156e4124e97ff1208b7b");
    console.log("signedTx.rawTransaction", signedTx) // Signed the transaction with my private key
  //   web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(error, hash) {
  //   if (!error) {
  //     console.log("🎉 The hash of your transaction is: ", hash, "\n Check Alchemy's Mempool to view the status of your transaction!");
  //   } else {
  //     console.log("❗Something went wrong while submitting your transaction:", error)
  //   }
  //  });
}


main();
