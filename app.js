const api = `https://api.coingecko.com/api/v3/coins/bitcoin`
const name = document.querySelector('.name');
const card = document.querySelector('.card');
const cardDisplay = document.querySelector('.display');
let coin = [];

fetch(api)
    .then(response => response.json())
    .then(displayCoin)
    .catch(err => console.log(err))
   

function displayCoin(coinData){
    coin = coinData;
    console.log(coin);
    let coinHTML = '';
    let coinName = coin.name;
    let symbol = coin.symbol;
    let current = coin.market_data.current_price.usd;
    let change = coin.market_data.price_change_percentage_24h;
    coinHTML += `
    <div class="card">
        <div class="card-name">
            <h2 class="name">${coinName}</h2>
            <h2 class="symbol">${symbol}</h2>
        </div>
        <div class="card-price">
            <h3 class="price">Current Price<span>${current}</span></h3>
            <h3 class="24hr">24HR Change <span>${change}</span></h3>
        </div>
    </div>
        `
    cardDisplay.innerHTML = coinHTML;
}