// Getting the curren price and compare-at price from the html
var currentPriceElement = document.querySelector('.current-price strong');
var compareAtPriceElement = document.querySelector('.compare-at-price del');

// Extracting the numberical values from the html using regular expression
var currentPriceMatch = currentPriceElement.textContent.match(/\$([\d,]+(\.\d{1,2})?)/);
var compareAtPriceMatch = compareAtPriceElement.textContent.match(/\$([\d,]+(\.\d{1,2})?)/);

// getting the element to display the result 
var percentageElement = document.getElementById('perc');

// Check if matches are found
if (currentPriceMatch && compareAtPriceMatch) {
    //Parsing the matched values
    var currentPrice = parseFloat(currentPriceMatch[1].replace(',', ''));
    var compareAtPrice = parseFloat(compareAtPriceMatch[1].replace(',', ''));

    //calculating the percentage 
    var percentageOff = ((compareAtPrice - currentPrice) / compareAtPrice) * 100;

  //displaying the result on the browser
    percentageElement.textContent =   percentageOff.toFixed(0) + '% Off';
} else {
    // Handle cases where price extraction fails
    percentageElement.textContent = 'Unable to calculate percentage off';
}
