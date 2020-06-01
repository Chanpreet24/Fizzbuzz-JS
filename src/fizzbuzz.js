function Fizzbuzz(){
    this.play = function(number){
        if (number/3){
            return "Fizz"
        }
    }
}

window.addEventListener("load", function(){
    Fizzbuzz();
});