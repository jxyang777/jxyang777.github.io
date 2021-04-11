if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    window.ethereum.enable();
}
else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://192.168.50.75:8545"));
}

let defaultAccount = null;
async function start() {
    try {
        defaultAccount = await web3.eth.getCoinbase();
        // let defaultAccount = "0xB31BFC1a6DE8a0228070263CD697E989c1838d71";
        let balance = await web3.eth.getBalance(defaultAccount);

        var html_account = document.getElementById("account");
        var html_balance = document.getElementById("balance");
        html_account.textContent = defaultAccount;
        html_balance.textContent = web3.utils.fromWei(balance, "ether");
    } catch(err) {
        console.error("Error:", err);
    }
}
window.addEventListener("load", start);

let accepterAddr = "";
let amount = 20;
$("#send").click(function () {
    // accepterAddr = "0x36bfedb791f66427327330ad4a1c7a11aadedce2";
    accepterAddr = $("#account").val();
    amount = web3.utils.toWei($("#money").val(), "ether");
    
    // var hash = web3.eth.sendTransaction({ from:defaultAccount , to:accepterAddr, value:amount});
});