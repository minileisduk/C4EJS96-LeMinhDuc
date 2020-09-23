console.log('Bài 1');
 console.log('Cách 1');
let a = 5;
let b = 6;
[a , b] = [b , a]
console.log(a , b);

 console.log ('Cách 2');
let a = 5;
let b = 6;
let tempt;

tempt = a;
a = b;
b = tempt;
console.log(a ,b);

console.log('Bài 2');
 let str = ('Hello beauty there');
 let a = str.split("");
 console.log(a);

console.log('Bài 3');
 const a = [4, 5, 7, -8];
 console.log(...a);

console.log('Bài 4');
let shop = ['Jeans', 'Tshirts', 'Sock'];
while(true){
let n = prompt('Hi there, welcome to shop admin panel, what do you want (C,R,U,D)?');
let m = shop.length;
if(n == "r" || n =="R"){
    for(let i = 0; i < m; i++){
        console.log(i + 1 + '.' +shop[i])
    }break;
}else if(n =="c" || n =="C"){
    let cr = prompt('New item')
    shop.push(cr);
    alert ('done');
   console.log(shop)
}else if(n == "u"|| n == "U"){
    let up = prompt('Enter the position you want to update');
    shop[up] = prompt('Enter the new name');
    alert ('done');
    console.log(shop) 
}else if(n == "d"|| n == "D"){
    let dl = prompt('Enter the position you want to delete');
    shop.splice(0, dl);
    console.log(shop);
}else{
    alert ('this command is not supported')
}
}

console.log('Bài 5');
let x = prompt(' Enter a squence of Number, separed by commass (,)');
let y = x.split(',');
let sum = 0;
for( let i = 0 ; i < x.length ; i++){
    sum +=Number(x[i]);
} 
alert('The sum of them is ' + sum);

console.log('Bài 6');
let x = prompt('Enter a squence of number, separated by (,) ')
let y = n.split(',');
let min = y[0];
for(let i = 0; i < y.length ; i++){
    if(Number(y[i])<Number(min)){
        min = y[i];
    }
} 
alert('The smallest number is' + min);

console.log('Bài 7')
let x = ['1','3','5','7','9','100'];
    let y = prompt("Enter a number");
    for (var i=0;i<x.length;i++){
        if (x[i] == y){
            alert (y + " is FOUND in my array at index " +[i] );
            break;
        }
    }
    if(i==x.length){
        alert (y + " is NOT found in my array");
    }

console.log('Bài 9')
const cl = ["red", "gray", "blue", "purple", "cyan"];
    function square() {
      for (var i = 1; i <= 4; i++) {
        fd(20);
        lt(90);
      }
    }
    function square2() {
      for (var i = 1; i <= 4; i++) {
        fd(40);
        lt(90);
      }
    }
    function square3() {
      for (var i = 1; i <= 4; i++) {
        fd(60);
        lt(90);
      }
    }
    function square4() {
      for (var i = 1; i <= 4; i++) {
        fd(80);
        lt(90);
      }
    }
    if (cl == "red") {
      square3();
    }
    if (cl == "gray") {
      square();
    }
    if (cl == "blue") {
      square();
    }
    if (cl == "purple") {
      square2;
    }
    if (cl == "cyan") {
      square4;
    }






