console.log('Bài 1');
console.log('1. Var là cách khai báo biến nhưng cũ hơn let \n \
   Const là cách khai báo biến duy trì giá trị không đổi, có một số điểm tương đồng với let');
console.log('2. Điểm khác biệt giữa let và var là: \n \
let không đi xuyên được scope nhưng var lại có thể');
console.log('3. Điểm khác biệt giữa let và const là: \n \
biến trong let có thể thay đổi trong tương lai nhưng const thì không thể thay đổi được');

console.log('Bài 2');
console.log('1. Kiểu boolean chỉ có hai giá trị: true và false.');
console.log('2. Boolean thường được sử dụng để lưu trữ các giá trị có / không: true có nghĩa là “có, đúng” và false nghĩa là “không, không chính xác”.');

console.log('Bài 3a');
for (i = 0; i < 7; i++)
{console.log(i)};

console.log('Bài 3b');
let x = prompt ("Enter a number");
for (i = 0; i < x; i++){
   console.log(i)
};

console.log('Bài 3c');
let n = prompt ("Enter n");
for (i = 3; i < n; i++){
   console.log(i)
};

console.log('Bài 3d');
let c = prompt ("Enter c");
let n = prompt ("Enter n");
for (c; c < n; c++){
   console.log(c)
};

console.log('Bài 3e');
let c = parseInt (prompt ("Enter c"));
let n = parseInt (prompt ("Enter n"));
let x = 3;
for (c; c < n; c += x){
   console.log(c)
};

console.log('Bài 3f');
let c = parseInt (prompt ("Enter c"));
let n = parseInt (prompt ("Enter n"));
let s = parseInt (prompt ("Enter s"));
for (c; c < n; c += s){
   console.log(c)
};

console.log('Bài 4');
let x = parseInt (prompt ("Enter x"));
let result=1;
for(let i=1 ; i <= a ; i++){
    result*=i;
}
alert("the factorial is " +result);

console.log('Bài 5');
let x = parseInt (prompt ("How old are you?"));
if ( x < 14){
   alert ("You are not old enough to view this content")
} else {
   alert ("Enjoy!")
};

console.log('Bài 6');
let x = parseInt (prompt ("Enter a number"));
if (0 <= x <= 9);
let a = 9/2;
if (x < a){
   alert ("lower half of 9")
} else{
   alert ("higher half of 9")
};

console.log('Bài 7');
let x = parseInt (prompt ("Enter a number"));
let y = parseInt (prompt ("Enter another number"));
if ((-x/0)<=x<=(x/0));
let a = y/2;
if (x<a){
   alert ("lower half of " + y)
} else {
   alert ("higher half of " + y)
};

console.log('Bài 8');
let x = parseInt (prompt ("Enter a number"));
if (x % 2 == 0){
   alert ("số chẵn")
} else{
   alert("số lẻ")
};

console.log('Bài 11a');
for (i=1; i <= 4; i++){
   fd(100);
   rt(90);
};


console.log('Bài 11b');
for (i=1; i<= 3; i++){
   fd(100);
   rt(120);
};

console.log("Bài 11c");
for (i=1; i <= 5; i++) {
    fd(50)
    rt(72)
  };

console.log('Bài 11d');
for (i=1; i<=6; i++){
   fd(100);
   rt(60)
};

console.log('Bài 12');
let x = parseInt(prompt('Số cạnh của đa giác'));
for(let i=1 ; i<=x ; i++){
    fd(1);
    rt(360/x);
};

console.log('Bài 13');
let x =prompt("Số đa giác bạn muốn ");
for(let y=1 ; y<=x ; y++){
    for( let z=1; z<= i+2 ;z++){
        fd(100);
        rt(360/(z+2)); 
        
    }
}
