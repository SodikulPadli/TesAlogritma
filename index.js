let coins = [10, 5, 2, 3, 6, 7];
let price = 23;
const fee = 0.5;
let coinSeller = [];
let sisaCoin = [];
let sisa = [];
let total = 0;

let myCoins = coins.sort((a, b) => {
  return b - a;
});
for (let i = 0; i < myCoins.length; i++) {
  if (total <= price) {
    total += myCoins[i];
    coinSeller.push(myCoins[i]);
  } else if (total >= price) {
    sisaCoin = total - (price + fee * coinSeller.length);
    sisa.push(sisaCoin);
  } else {
    sisa(myCoins[i]);
  }
}
console.log(`Coin yang diperlukan : [${coinSeller}]`);
console.log(`Biaya : ${coinSeller.length * fee}`);
console.log(
  `Sisa Coin : [${sisa.sort(function (a, b) {
    return b - a;
  })}]`
);
