
let banKinh = +prompt("Nhập vào bán kính của hình trụ:");
let chieuCao = +prompt("Nhập vào chiều cao của hình trụ:");
let chuViDay = 2 * Math.PI * banKinh;
let dienTichXungQuanh = chuViDay * chieuCao;
let dienTichToanPhan = dienTichXungQuanh + 2 * Math.PI * Math.pow(banKinh, 2);
let theTich = Math.PI * Math.pow(banKinh, 2) * chieuCao;
console.log(`chu vi đáy: ${chuViDay.toFixed(2)}`);
console.log(`diện tích xung quanh: ${dienTichXungQuanh.toFixed(2)}`);
console.log(`diện tích toàn phần: ${dienTichToanPhan.toFixed(2)}`);
console.log(`thể tích hình trụ: ${theTich.toFixed(2)}`);
