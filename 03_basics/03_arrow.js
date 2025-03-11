const user = {
    product: "Foxtale",
    price: 999,

    buyingMessage: function() {
        console.log(`${this.product} , Thank you for buying.`);
    }
}
user.buyingMessage()

// Output:- Foxtale , Thank you for buying.
// "this" is used to access all current variables in braces