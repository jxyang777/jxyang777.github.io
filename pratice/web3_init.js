if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    window.ethereum.enable();
}
else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://192.168.50.75:8545"));
}

async function send() {
    let defaultAccount = await web3.eth.getCoinbase();
    let account = $("#address").val();
    let gas = $("#money").val();
    var tranHash = web3.eth.sendTransaction({ from: defaultAccount , to:account, gas: gas});
    document.querySelector("#TransactionHash").innerHTML = "Transaction Hash: " + tranHash;
};
