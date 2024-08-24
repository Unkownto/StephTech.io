
function calculateTotal() {
  var numBirds = document.getElementById("num-birds").value;
  var unitCost = document.getElementById("unit-cost").value;
  var projectedWeek = document.getElementById("projected-week").value;
  var total = numBirds * unitCost;
  document.getElementById("total").value = total;

  // Feed Starter calculation
  var feedStarterRate;
  switch (projectedWeek) {
    case "1":
      feedStarterRate = 0.15;
      break;
    case "2":
      feedStarterRate = 0.55;
      break;
    case "3":
      feedStarterRate = 1.25;
      break;
    case "4":
      feedStarterRate = 2.00;
      break;
    default:
      // Calculate the sum of case 1-4 and add it to the current case
      var sumOfPreviousCases = 0.15 + 0.55 + 1.25 + 2.00;
      switch (projectedWeek) {
        case "5":
          feedStarterRate = sumOfPreviousCases + 0.9;
          break;
        case "6":
          feedStarterRate = sumOfPreviousCases + 2.05;
          break;
        case "7":
          feedStarterRate = sumOfPreviousCases + 3.10;
          break;
        case "8":
          feedStarterRate = sumOfPreviousCases + 4.10;
          break;
        case "9":
          feedStarterRate = sumOfPreviousCases + 5.70;
          break;
        case "10":
          feedStarterRate = sumOfPreviousCases + 7.10;
          break;
        case "11":
          feedStarterRate = sumOfPreviousCases + 9.0;
          break;
        case "12":
          feedStarterRate = sumOfPreviousCases + 11;
          break;
      }
  }
  var feedStarter = (numBirds * feedStarterRate) / 25;
  document.getElementById("feed-starter").value = feedStarter;
}
