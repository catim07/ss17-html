let num1=+prompt("mời bạn nhập giá trị a: ");
let num2=+prompt("mời bạn nhập giá trị b: ");
let num3=+prompt("mời bạn nhập giá trị c: ");
let denta=num2*num2-4*num1*num3;
console.log("denta",denta);
let x1=(-num2+Math.sqrt(denta))/2*num1;
console.log("x1",x1);
let x2=(-num2-Math.sqrt(denta))/2*num1;
console.log("x2",x2)