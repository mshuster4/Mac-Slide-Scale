var slider = document.getElementById("myRange");
var output = document.getElementById("priceNumber");

output.innerHTML = slider.value;

slider.oninput = (function() {

  var priceNumber = this.value;
  var step = this.step; 


  console.log("priceNumber: " + priceNumber);
  
  output.innerHTML = priceNumber;

  var com = parseInt($(".commissions").text());
  var fee = parseInt($(".service-fee").text());

  updateCommissions(priceNumber,com, step);
  updateServiceFee(priceNumber, fee);

});


function updateCommissions(priceNumber, com, step) {

    var newNum = 0

    newNum = com + 750;

    $(".commissions").text(newNum);
    

}

function updateServiceFee(priceNumber, fee) {
    if (priceNumber <= 750000) {
        fee = 3999
        $(".service-fee").text(fee);
    }
    else if (priceNumber > 750000 && priceNumber < 1300000) {
        fee = 5999
        $(".service-fee").text(fee);
    }
    else if (priceNumber > 1300000 && priceNumber < 3000000) {
        fee = 9999
        $(".service-fee").text(fee); 
    }
}
