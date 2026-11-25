

const products = [
  { id: 1, name: "Wireless Headphones", category: "Electronics", price: 2500, stock: 10 },
  { id: 2, name: "Classic Backpack", category: "Accessories", price: 1500, stock: 5 },
  { id: 3, name: "Cotton T-Shirt", category: "Clothing", price: 650, stock: 20 },
  { id: 4, name: "Smart Watch", category: "Electronics", price: 3200, stock: 0 },
  { id: 5, name: "Running Shoes", category: "Clothing", price: 2200, stock: 8 },
  { id: 6, name: "Classic Sunglasses", category: "Accessories", price: 850, stock: 0 }
]; 



function allProduct(products){
    for(let product of products){
        console.log(product.name,product.price);
    }

}
function stockProduct(products){
  for(let product of products){
        console.log(product.name,"Available:",product.stock);
    }
}
function findProduct(catagory){
 for(let product of products){
     if(product.category === "Electronics"){
        console.log(product.name , "catagory:",product.category);
     }


    }
}
function totalPrice(products) {
    let total = 0;

    for (let product of products) {
        total += product.price * product.stock;
    }

    console.log("Total :", total, "tk");
}

function expensiveProduct(products) {
    let expensive = ""
    let expensivePrice = 0

    for (let product of products) {
        if (product.price > expensivePrice) {
            expensive = product
            expensivePrice = product.price
        }
    }

    console.log("Most Expensive Product:", expensive.name);
    console.log("Price:", expensive.price);
}

function discountPrice(products) {
    for (let product of products) {
        let discount=0;

        if (product.price >= 2000) {
            discount = 15;
        } else if (product.price >= 1000) {
            discount = 10;
        } else {
            discount = 5;
        }

        let finalPrice = product.price - (product.price * discount / 100);

        console.log(
            product.name,
            "Original Price:", product.price,
            "Discount:", discount + "%",
            "Final Price:", finalPrice
        );
    }
}

function expensiveStockProduct(products) {
    let expensive = null;

    for (let product of products) {
        if (product.stock > 0) {
            if (expensive === null || product.price > expensive.price) {
                expensive = product;
            }
        }
    }

    if (expensive !== null) {
        console.log("Most Expensive In-Stock Product:", expensive.name,"Price:", expensive.price);
       
    } else {
        console.log("No Product Available");
    }
}




allProduct(products)

stockProduct(products)

findProduct("Electronics")
totalPrice(products)
expensiveProduct(products);

discountPrice(products);

expensiveStockProduct(products);