//0(n2)

function maxProfitOne(prices) {
  max_profit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; i++) {
      //price[i] left
      //price[j] right
      if (prices[i] < prices[j]) {
        let profit = prices[j] - prices[i];
        max_profit = Math.max(max_profit, profit);
      } else {
        prices[i] = prices[j];
      }
      j++;
    }
  }
  return max_profit;
}

console.log(maxProfitOne([7, 1, 5, 3, 6, 4]), "0(n2)");

//0(n)
function maxProfit(prices) {
  left = 0;
  right = 1;
  max_profit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];
      max_profit = Math.max(max_profit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return max_profit;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]), "0(n)");
