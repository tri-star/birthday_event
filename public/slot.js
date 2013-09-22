

function rouletteStart() {
    digit1.start(1);
    digit2.start(2);
    digit3.start(3);
    digit4.start(4);
};


RouletteDigit = function(elementName, number) {
    this.init(elementName, number);
};

RouletteDigit.prototype = {
    number: 0,
    elementName: "",
    minStep: 50,
    maxStep: 150,
    count: 0,
    speed: 50,
    init: function(elementName) {
        this.elementName = elementName;
    },
    start: function(number) {
        this.number = number;
        this.count = Math.floor(Math.random() * (this.maxStep-this.minStep)) + this.minStep;
        this.changeNumber();
        $("#"+this.elementName).text(this.number);
    },
    changeNumber: function() {
        $("#"+this.elementName).text(Math.floor(Math.random() * 10));
        if(this.count > 0) {
            this.count--;
            window.setTimeout(this.changeNumber.bind(this), this.speed);
        } else {
            $("#"+this.elementName).text(this.number);
        }
    }
};

var digit1 = new RouletteDigit('digit-1');
var digit2 = new RouletteDigit('digit-2');
var digit3 = new RouletteDigit('digit-3');
var digit4 = new RouletteDigit('digit-4');

$(document).ready(function(){
   $("#start-button").click(rouletteStart);
});
