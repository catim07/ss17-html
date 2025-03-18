let num = +prompt("mời bạn nhập một số: ");
let sqrt=Math.sqrt(num);
let dapAn=(sqrt===Math.floor(sqrt)) ? ` số bạn nhập là số chính phương` : ` số bạn vừa nhập ko phải là số chính phương`;
console.log(dapAn);