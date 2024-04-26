function requiredValidation(field, errorField) {
    if (!field.value || field.value === '') {
        //field.setCustomValidity('To pole jest wymagane');
        errorField.innerHTML = 'To pole jest wymagane';
        return true;
    }
    else {
        //field.setCustomValidity('');
        errorField.innerHTML = '';
        return false;
    }
}

function minLengthValidation(field, errorField, minLength = 0) {
    if (field.value.length < minLength) {
        errorField.innerHTML = `To pole musi mieć conajmniej ${minLength} znaków`;
        return true;
    }
    else {
        errorField.innerHTML = '';
        return false;
    }
}


const nameField = document.querySelector("#name");
const nameErrorField = document.querySelector("#nameError");

nameField.addEventListener('input', () => {
    requiredValidation(nameField, nameErrorField);
 });

const genderFileds = document.getElementsByName('gender');

let checkedGender;
genderFileds.forEach(field => {
    field.addEventListener('change', () => {
        let result = false;
    genderFileds.forEach(field => {
        result = field.checked || result;
        
        
    });

    checkedGender = field.value;
    });
});

const emailField = document.querySelector("[name='email']");
const emailErrorField = document.querySelector("#emailError");
emailField.addEventListener('input', () => {
    if(!requiredValidation(emailField, emailErrorField))
    {
        if(!minLengthValidation(emailField, emailErrorField, 2)) {
            emailValidation(emailField, emailErrorField);
        }
    }
});

function emailValidation(field, errorField) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(field.value)) {
         //field.setCustomValidity("Proszę podać poprawny adres e-mail.");
        errorField.innerHTML = 'Proszę podać poprawny adres e-mail.';
        return true;
    }
    else {
        //field.setCustomValidity('');
        errorField.innerHTML = '';
        return false;
    }
}