let tiengui=+prompt("mời bạn nhập số tiền gửi: ");
let thanggui=+prompt("mời bạn nhập số tháng gửi: ");
let lainam=4.3/100;
let laithang=lainam/12;
let tienlai=tiengui*laithang*thanggui;
console.log(` số tiền lãi nhận là: ${tienlai.toLocaleString("vi-VN", {style: "currency",currency: "VND"})}`);