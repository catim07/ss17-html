let banKinh = +prompt("Nhập vào bán kính của hình cầu:");
let theTich = (4 / 3) * Math.PI * banKinh * banKinh * banKinh;
let dienTichBeMat = 4 * Math.PI * banKinh * banKinh;
let chuViLonNhat = 2 * Math.PI * banKinh;
console.log(`thể tích hình cầu: ${theTich.toFixed(2)}`);
console.log(`diện tích bề mặt hình cầu: ${dienTichBeMat.toFixed(2)}`);
console.log(`chu vi lớn nhất của hình cầu: ${chuViLonNhat.toFixed(2)}`);
