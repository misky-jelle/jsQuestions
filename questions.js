// Question 1
let fruits={
        banana:30,
        orange:40,
        cherry:100,
        price:function(fruit,total){
    
        return ` ${total},${fruit} for KES ${this.cherry * total}`
       
    }}
    console.log(fruits.price("cherry",9));
    console.log(fruits.cherry)
// Question 2
    class KioskCalc{
        constructor(fruits, quantity){
            this.fruits = fruits
            this.quantity = quantity
            this.fruitsPriceList = {"orange":30,"mango":15,"avocado":40}
            this.getTotalCost = function(){
                return` ${quantity}  ${fruits} for KES ${quantity*this.price}`
            }
           }
        }
        KioskCalc.prototype.price = 50
    
        var ourKiosk=  new KioskCalc("orange" , 2)
    console.log (ourKiosk.getTotalCost())
    