if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
}
else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://192.168.50.75:8545"));
}
/* async function start() {
    try {
        // let defaultAccount = await web3.eth.getCoinbase();
        let defaultAccount = "0xB31BFC1a6DE8a0228070263CD697E989c1838d71";
        let balance = await web3.eth.getBalance(defaultAccount);

        var html_account = document.getElementById("account");
        var html_balance = document.getElementById("balance");
        html_account.textContent = defaultAccount;
        html_balance.textContent = web3.utils.fromWei(balance, "ether");
    } catch(err) {
        console.error("Error:", err);
    }
    }

window.addEventListener("load", start); */


async function send() {
    let defaultAccount = await web3.eth.getCoinbase();
    let account = $("#address").val();
    let gas = $("#money").val();
    var tranHash = web3.eth.sendTransaction({ from: defaultAccount , to:account, gas: gas});
    document.querySelector("#TransactionHash").innerHTML = "Transaction Hash: " + tranHash;
};
