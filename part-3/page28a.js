// const products = [
//     { id: 1, name: "pdt1", price: 25 },
//     { id: 2, name: "pdt2", price: 30 },
//     { id: 3, name: "pdt3", price: 50 }
// ];
// //console.log(products)

// // 1) Display all products using forEach
// products.forEach((n) => {
//      console.log(n);
// });
// let cart = [];

// //   2) Display products with price above 40
// const newArray = products.filter((n) => n.price > 40);
//   console.log(newArray);

// //  3) Add product 2 to cart using spread operator with new key quantity & assign 1
// cart = products.filter((n) => n.id === 2);
// console.log(cart)
// cart = [{...cart[0], quantity: 1}];
// console.log(cart);

const products = [
  { id: 1, name: "Product 1", price: 25 },
  { id: 2, name: "Product 2", price: 50 },
  { id: 3, name: "Product 3", price: 45 },
];
let cart = []
//Display all products using forEach
function displayProducts(){
   // console.log((products));
   products.forEach((pdt)=>
console.log(pdt));


}

//Add product 2 to cart using spread operator with a
//new key quanity and assign 1
function addToCart(id){
    cart=products.filter((n)=>n.id===id)
    console.log(cart);
   

}
//display cart
function displayCart(){
    cart=[{...cart,quantity:1}]
    console.log(cart);

}

displayProducts()
addToCart(2)
 displayCart()
// addToCart(1)
// displayCart()



