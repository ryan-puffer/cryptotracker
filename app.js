const api = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
const name = document.querySelector('.name');
const card = document.querySelector('.card');
const cardDisplay = document.querySelector('.display');
const searchBar = document.querySelector('#coin-search');
let coins = [];

fetch(api)
    .then(response => response.json())
    .then(displayCoins)
    .catch(err => console.log(err))
   

function displayCoins(coinData){
    coins = coinData;
    console.log(coins);
    let coinHTML = '';
    coins.forEach(coin => {
        let coinName = coin.name;
        let symbol = coin.symbol;
        let current = coin.current_price;
        let change = coin.price_change_percentage_24h;
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
    });
}

searchBar.addEventListener('keyup', () => {
	let searchValue = searchBar.value.toLowerCase();
	const cardItems = document.querySelectorAll('.card');
	for (let i = 0; i < cardItems.length; i++) {
		const getName = document.querySelectorAll('.name');
		const coinName = getName[i].textContent.toLowerCase();
		if (coinName.includes(searchValue)) {
			cardItems[i].style.display = 'flex';
		} else {
			cardItems[i].style.display = 'none';
		}
	}
});