const form = document.getElementById('form');
const nameField = document.querySelector('[name="name"]');
const nameErrorField = document.createElement('span');

const emailField = document.querySelector('[name="email"]');
const emailErrorField = document.createElement('span');

nameField.addEventListener('input', (event) => {
   if(requiredValidation(nameField)) {
    nameErrorField.innerHTML = "Pole wymagane";
        nameField.after(nameErrorField); 
   }
   else {
    nameErrorField.remove();
   }
});

emailField.addEventListener('input', (event) => {
    if(emailValidation(emailField)) {
        emailErrorField.innerHTML = "Nie prawidłowy format maila";
        emailField.after(emailErrorField); 
    }
    else {
        emailErrorField.remove();
    }
 });

const formError = document.getElementById('error');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    if(requiredValidation(nameField))
    {
        formError.innerHTML = 'Formularz zawiera błędy'
    }
    else {
        formError.innerHTML = '';
    }
});

function requiredValidation(field) {
    if (!field.value || field.value === '') {
        return true;
    }
    else {
        return false;
    }
}

function emailValidation(field) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(field.value)) {
        return true;
    }
    else {
        return false;
    }
}



function Car(mark, model, produtionYear) {
    this.mark = mark;
    this.model = model;
    this.produtionYear = produtionYear;
    this.speed = 0;
    this.increaceSpeed = (value) => {
        this.speed += value;
    }
}

const car1 = new Car('test', 'test', 2021);

const car2 = new Car('test2', 'test2', 2020);

car1.increaceSpeed(10);
car2.increaceSpeed(50);

const cars = [car1, car2];

cars.forEach(element => {
    if(element.produtionYear === 2021) {
        console.log(`${element.mark} + ${element.model}`);
    }
});


const avg = cars.reduce((a, car) => a + car.speed, 0)/ cars.length;
console.log(avg);