                 // Object Init
    let movie = {
        title: 'The Dark night rises',
        year: 2012,
        rate: 8.4,
    };
    console.log(movie);

                 //  Object read
// Bài 1
// Cách 1
console.log(movie.title);
console.log(movie.year);
console.log(movie.rate);

// Cách 2
console.log(movie['title']);
console.log(movie['year']);
console.log(movie['rate']);

// Bài 2
let favorite = ['Sport', 'Lol', 'Bts'];
for (let i = 0; i<favorite.length; i++){
    favorite[i] = favorite[i].toUpperCase();
};
console.log(favorite);

// Bài 3
let x = 5;
let y = prompt('Enter a number');

                 // Object upadte
let movie = {
    title: 'The Dark night rises',
    year: 2012,
    rate: 8.4,
};
// Bài 1
// a
movie.rate = 8.7;
console.log(movie);
// b
movie.rate += 0.5 ;
console.log(movie)
// Bài 2
let x = prompt('What do you want to update?');
movie.title = (x);
console.log(movie);

                 //  Object create
let movie = {
    title: 'The Dark night rises',
    year: 2012,
    rate: 8.4,
};
let x = prompt('What do you want to update?');
if(x == null || x == undefined){
    alert(x + 'is not exist in our data, we will add new');
    let y = prompt('Enter the new data');
    movie.x = y
}else{
    alert(x + ' is exist in our data')
}

                 // Array and Object
let movie1 = {
    title: 'mot',
    year: 2001,
    rate: 01,
};

let movie2 = {
    title: 'hai',
    year: 2002,
    rate: 02,
};

let movie3 = {
    title: 'ba',
    year: 2003,
    rate: 03,
};

let movie = [];
movie.push(movie1);
movie.push(movie2);
movie.push(movie3);
// 1
console.log(movie[0]);
// 2
console.log(movie[2].title);
// 3
for( let i = 0; i < movie.length; i++){
    console.log(movie[i]);
}
// 4
movie3.rate += 0.7;
console.log(movie)

                 //Array  cotaining Object
let movie1 = {
    title: 'mot',
    year: 2001,
    character: '01'
};

let movie2 = {
    title: 'hai',
    year: 2002,
    character: '02'
};

let movie3 = {
    title: 'ba',
    year: 2003,
    character: ['03']
};

let movie = [];
movie.push(movie1);
movie.push(movie2);
movie.push(movie3);
// 1
for( let i = 0; i < movie.length; i++){
    console.log(movie[i]);
}
// 2 (chưa xong)

                 //Object and array mix
 let movie1 = {
    title: 'mot',
    year: 2001,
    character: '01'
};

let movie2 = {
    title: 'hai',
    year: 2002,
    character: '02'
};

let movie3 = {
    title: 'ba',
    year: 2003,
    character: ['03']
};
let movie = [];
movie.push(movie1);
movie.push(movie2);
movie.push(movie3);
// 1
for( let i = 0; i < movie.length; i++){
    console.log(movie[i]);
}













 

