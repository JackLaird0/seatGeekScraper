const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });

nightmare
  .goto('https://www.google.com/')
  .type('input.gLFyf.gsfi', 'nuggets' + ' magic' + ' nov 23' + ' seatgeek')
  .click('input#gbqfbb')
  .wait(10000)
  .evaluate (() => {
    const feesButton = $("[class^='WithFees__Dropdown']");
    if (feesButton.length) feesButton.click();
  })
  .evaluate(() => {
    const prices = document.querySelectorAll('.omnibox__listing__buy__price')
    let list = [].slice.call(prices);
    const allPrices = list.map(function(node) {
      return `${node.innerText}`
    })
    return allPrices
  })
  .end()
  .then(function(result) {
    console.log(result)
  })
  .catch( function(error) {
    console.log('Search failed:', error)
  });