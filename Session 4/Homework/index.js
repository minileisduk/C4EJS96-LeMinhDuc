// Bài 1 
const product = {
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white',
    };
    // for (let x in product) {
    // console.log(x);
    // };

// console.log('Bài 1.1');
// console.log('x là property');
// console.log('Bài 1.2');
console.log('x is property')
    for(let prop in product){
      console.log(prop+': '+product[prop])
    }

// Bài 2 
const task = {
    subject: 'Implement login feature',
    createdBy: 'Hoang Ngoc Duc',
    assignTo: 'Nguyen Phuong Nam',
    dueDate: '2019-10-08T18:00:24+0000',
    expectedHours: 0.5,
    };
let {subject, dueDate, assignTo} = task;
console.log(subject, dueDate, assignTo);

// Bài 3  (chưa xong)

// Bài 4 (chưa xong)
//4.1
alert ('Hi there, this is dev dictionary');
let word = prompt('Enter a key word');
let dictionary = {
    debug: 'The process of figuring out why your program has a certain error and how to fix it',
    done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
    defect: 'The formal word for ‘error’',
    pm: 'The short version of Project Manager, the person in charge of the final result of a project',
    uiux: 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels',
}
let {debug, done, defect, pm, uiux} = dictionary;
for( let x in dictionary){
if(x = word){
alert (x + ': '+ dictionary[x])
}else{
    alert ('we could not find your word: ' + word)
}
};
// 4.2

// Bài 5
// 5.1 (chưa xong)
let phone1 = {
    name: 'Xiaomi portable charger 20000mah',
    brand: 'Xiaomi',
    price: 428,
    color: 'white',
    category: 'charger',
};
let phone2 = {
    name: 'VSmart Active 1',
    brand: 'VSmart',
    price: 5487,
    color: 'black',
    category: 'phone',
};
let phone3 = {
    name: 'IPhone X',
    brand: 'Apple',
    price: 21490,
    color: 'gray',
    category: 'phone',
};
let phone4 = {
    name: 'Samsung Galaxy A9',
    brand: 'Samsung',
    price: 8490,
    color: 'blue',
    category: 'phone',
};
let phone = [];
phone.push(phone1);
phone.push(phone2);
phone.push(phone3);
phone.push(phone4)

// console.log(phone)

// 5.2
 for (let i = 0; i<phone.length; i++){
     let x = prompt(enter position)
     if (x == 0){
         console.log(phone1)
    }else if( x == 1){
         console.log(phone2)
    }else if (x==2){
        console.log(phone3)
    }else{
        console.log(phone4)
    }
 }

