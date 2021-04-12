if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    window.ethereum.enable();
}
else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://192.168.50.75:8545"));
}

/* let defaultAccount = null;
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
window.addEventListener("load", start); */

async function getTransaction(){
    let transactionHash = $("#hash").val();
    let blockHash, blockNumber, from, to, value;
    await web3.eth.getTransaction(transactionHash)
        .then(function(obj){
            blockHash = obj.blockHash;
            blockNumber = obj.blockNumber;
            from = obj.from;
            to = obj.to;
            value = obj.value;
        });
    let html_blockHash = document.getElementById("blockHash");
    let html_blockNumber = document.getElementById("blockNumber");
    let html_from = document.getElementById("from");
    let html_to = document.getElementById("to");
    let html_value = document.getElementById("value");
    html_blockHash.textContent = blockHash;
    html_blockNumber.textContent = blockNumber;
    html_from.textContent = from;
    html_to.textContent = to;
    html_value.textContent = value;
}

$("#get").click(function () {
    getTransaction();
});