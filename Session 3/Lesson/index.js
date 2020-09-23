                    // Init
let favorite_movie = ['mot', 'hai', 'ba', 'bon'];
console.log (favorite_movie);
                    
                    // create
let newMovie = prompt('newMovie');
favorite_movie.push (newMovie);
console.log (favorite_movie);
                    
                    // read
let i = prompt('movie position');
console.log(favorite_movie[i]);
                    
                    // update
favorite_movie[0] = prompt('movieTitle');
console.log(favorite_movie);

let i = prompt('position');
favorite_movie[i] = prompt('new movieTitle');
console.log(favorite_movie);
                   
                    // delete
let i = prompt('position to delete');
favorite_movie.splice(i, 1);
console.log(favorite_movie);

let i = prompt('position to delete');
let n = prompt('number of items to delete');
favorite_movie.splice(i, n);
console.log(favorite_movie);

                    // read all
let array = ['Batman', 'Up', 'Attack on titans', 'My boss my hero'];

// let n = array.length;
// for (let i = 0; i < n; i++){
//     console.log(array[i])
// };

// let n = array.length / 2;
// for (let i = 0; i < n;i++){
//     console.log(array[i])
// }

let n = array.length;
let m = '. ';
for (let i = 0; i < n; i++){
    console.log(i + 1 + m + array[i])
};
                    // update all
let n = array.length;
for (let i = 0; i < n ; i++){
    array[i] = array[i].toLowerCase();
}
console.log(array);

                    // While 

while (true){
    let n = prompt ('register your username');
    if (n.length > 15){
        alert ('Your user name is too long');
    }else{
        alert ('Good username');
        break;
        
    }
};

while (true){
    let n = prompt ('How many legs does a spider have? \n \ 1. None\n \ 2. 4 legs \n \ 3. 8 legs\n \ 4. 12 legs');
    if (n == 3){
        alert('Bravo, you are correct');
        break;
    }else if (n == 1, 2, 4){
        alert('Good luck next time');
    }else{
        alert('Invalide choice, the answer must be 1, 2, 3 or 4');
    }
};







