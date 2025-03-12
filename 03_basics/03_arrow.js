const user = {
    product: "Foxtale",
    price: 999,

    buyingMessage: function() {
        console.log(`${this.product} , Thank you for buying.`);
        console.log(this);
    }
}
user.buyingMessage()

// Output:- Foxtale , Thank you for buying.
// "this" is used to access all current variables in braces 

user.product = "Kerastas"
user.buyingMessage()

// Output:- Kerastas , Thank you for buying.

