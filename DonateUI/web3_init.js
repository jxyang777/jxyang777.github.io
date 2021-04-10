if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        window.ethereum.enable();
}
/* else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://192.168.50.75:8545"));
} */

// if (typeof provider !== 'undefined') {
//     provider = new ethers.providers.Web3Provider(window.ethereum)
// }
// else {
//     provider = new ethers.providers.JsonRpcProvider("http://192.168.50.75:8545");
// }

// const provider = new ethers.providers.Web3Provider(window.ethereum)

async function start() {
    try {
        // let defaultAccount = await window.web3.eth.getCoinbase();
        let defaultAccount = "0xB31BFC1a6DE8a0228070263CD697E989c1838d71";
        let balance = await window.web3.eth.getBalance(defaultAccount);

        var html_account = document.getElementById("account");
        var html_balance = document.getElementById("balance");
        html_account.textContent = defaultAccount;
        html_balance.textContent = window.web3.utils.fromWei(balance, "ether");
    } catch(err) {
        console.error("Error:", err);
    }
    }

window.addEventListener("load", start);