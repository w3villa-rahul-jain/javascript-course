var num1 = 7;
var num2 = 6;

console.log(num1 + num2);
console.log(num1 * num2);

var answer = num1 > num2;

console.log(answer);

var listPrice = 799;
var sellingPrice = 199;




 var discount  = `${(listPrice - sellingPrice)/listPrice * 100}`;

console.log(`ListPrice is:  ${listPrice}`)
console.log(`SellingPrice is:  ${sellingPrice}`)
console.log(`Discount Percentage is:  ${discount}`)


displayDiscountPercentage = Math.round(discount);

console.log(`displayDiscountPercentage is : ${displayDiscountPercentage}`);
console.log(displayDiscountPercentage);

console.log(typeof displayDiscountPercentage);