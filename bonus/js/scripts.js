const grigliaElement = document.querySelector('.griglia');

for(let i = 0; i<100; i++){
    const cellaElement = document.createElement('div');
    const number = i + 1;
    let message = "";
    if ( number % 3 === 0 ) {
        message += 'Fizz';
    }
    if ( number % 5 === 0 ) {
        message += 'Buzz';
    }
    if ( ( number % 3 !=0 ) && ( number % 5 != 0 ) ) {
        message = number;
    }
    console.log(message);
}