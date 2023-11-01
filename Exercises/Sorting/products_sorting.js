let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    // TODO:  fill the array with 10 candies of various
    //        price ranges
 ];

 products.sort(function(a,b){
    if(a.product < b.product){
        return -1;
    }else if(a.product == b.product){
        return 0;
    }else{
        return 1;
    }
 })
 console.log(products);

 products.sort(function(a,b){
    if(a.price < b.price){
        return b - a;
    }
 })

 console.log("--------------------------------------------");
 console.log(products);