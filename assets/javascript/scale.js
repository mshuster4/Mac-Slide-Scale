var slider = document.getElementById("myRange");
var output = document.getElementById("priceNumber");

output.innerHTML = slider.value;

slider.oninput = (function() {
  priceNumber = this.value;
  output.innerHTML = priceNumber;
  var com = parseInt($(".commissions").text());
  var fee = parseInt($(".commissions").text());
  updateCommissions(priceNumber, com);
  updateServiceFee(priceNumber, fee);
  updateYouSave(priceNumber, fee);
});


function updateCommissions(priceNumber, com) {
        var com = parseInt($(".commissions").text());
        var newNum = com + 750
        $(".commissions").text(newNum
};

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
        $(".service-fee").text(fee)
    }
}

function updateYouSave(priceNumber, fee) {
    if (priceNumber > 1500000 && fee == 3999) {
        
    }

}