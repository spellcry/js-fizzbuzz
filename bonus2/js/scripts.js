const grigliaElement = document.querySelector('.griglia');

for(let i = 0; i<100; i++){
    const cellaWrapperElement = document.createElement('div');
    cellaWrapperElement.classList.add('cella-wrapper');
    const cellaElement = document.createElement('div');
    cellaElement.classList.add('cella');
    cellaWrapperElement.append(cellaElement);
    const frontElement = document.createElement('div');
    frontElement.classList.add('front');
    cellaElement.append(frontElement);
    const backElement = document.createElement('div');
    backElement.classList.add('back');
    cellaElement.append(backElement);
    const number = i + 1;
    let message = "";
    if ( number % 3 === 0 ) {
        message += 'Fizz';
        backElement.classList.add('multiplo-3');
    }
    if ( number % 5 === 0 ) {
        message += 'Buzz';
        backElement.classList.add('multiplo-5');
    }
    if ( ( number % 3 !=0 ) && ( number % 5 != 0 ) ) {
        message = number;
    }
    frontElement.append(number);
    backElement.append(message);
    grigliaElement.append(cellaWrapperElement);
}