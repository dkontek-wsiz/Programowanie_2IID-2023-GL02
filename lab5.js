function zad1() {
    const age = prompt('Podaj wiek');

    if(age >= 18)
    {
        console.log('Jesteś pełnoletni');
    }
    else
    {
        console.log('Jesteś nie pełnoletni');
    }

    console.log(age >= 18? 'Jesteś pełnoletni': 'Jesteś nie pełnoletni')
}



const array = [];

for(let i = 0; i <= 100; i+=3) {
    array.push(i / 2 + i % 2);
}

let sum = 0;

array.forEach(item => 
    sum = sum + item);

let sum2 =0;
for(let i = 0; i < array.length; i++) {
    sum2 += array[i];
}
    
console.log(sum);
console.log(sum2);

console.log(array.reduce((a, b) => a + b, 0));

console.log(array.filter( x=> x%2 === 0));
console.log(array.map( x=> x * 3));

console.log(array.findIndex(x => x === (9 / 2 + 9 % 2)));

console.log(array.reduce((a, b) => a + b, 0) / array.length);

console.log(Math.max(...array));

console.log(array.filter( x=> x === 0).length);

const fib = [0, 1];

for(let i = 2; i <= 100; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
}

console.log(fib);