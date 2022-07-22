const grigliaElement = document.querySelector('.griglia');

for(let i = 0; i<100; i++){
    const cellaElement = document.createElement('div');
    cellaElement.classList.add('cella');
    const number = i + 1;
    let message = "";
    if ( number % 3 === 0 ) {
        message += 'Fizz';
        cellaElement.classList.add('multiplo-3');
    }
    if ( number % 5 === 0 ) {
        message += 'Buzz';
        cellaElement.classList.add('multiplo-5');
    }
    if ( ( number % 3 !=0 ) && ( number % 5 != 0 ) ) {
        message = number;
    }
    cellaElement.append(message);
    grigliaElement.append(cellaElement);
}