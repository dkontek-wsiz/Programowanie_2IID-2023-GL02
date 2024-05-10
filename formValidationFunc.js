//Funkcja sprawdzająca czy pole jest puste. Gdy jest puste ustawia treść wiadomości w polu z błędem oraz zwraca true
function requiredValidation(field, errorField) {
    //filed.value zawiera wartość wprowadzoną w polu
    //!field.value sprawdza czy pole nie jest nullem albo undefined
    if (!field.value || field.value === '') {
        errorField.innerHTML = 'To pole jest wymagane';
        return true;
    }
    else {
        errorField.innerHTML = '';
        return false;
    }
}

//Funkcja sprawdzająca czy pole spełnia wymaganie co do ilości znaków
//Funkcja przyjmuje parametr minLength (domyślnie ustawiany na 0), który definuje ile znaków jest wymaganych w polu
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

//Funckca sprawdzająca czy format emailu jest poprawny
function emailValidation(field, errorField) {
    //Aby sprawdzić czy format email jest poprawny stosuje się regex. Regex definiuje jakie znaki są wymagane w ciągu znaków
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //Metodą test można sprawdzić czy wartość pola jest zgodna z regexem
    if (!emailRegex.test(field.value)) {
        errorField.innerHTML = 'Proszę podać poprawny adres e-mail.';
        return true;
    }
    else {
        errorField.innerHTML = '';
        return false;
    }
}

//Funkcja sprawdzająca czy hasło spełnia wymagania. Znów wykorzystany jest regex. Regexy można znaleźć w internecie.
function passwordValidation(field, errorField) {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{}|;':",./<>?])[0-9a-zA-Z!@#$%^&*()_+\-=[\]{}|;':",./<>?]{8,}$/;    
    if (!passwordRegex.test(field.value)) {
        errorField.innerHTML = 'Hasło mieć co najmniej 8 znaków i zawierać przynajmniej jedną cyfrę, jedną małą literę i jedną dużą literę.';
        return true;
    }
    else {
        errorField.innerHTML = '';
        return false;
    }
}

//Funckja sprawdzająca czy któreś pole typu radio zostało zaznaczone
function radioRequiredValidation(fields, errorField, errorMessage = '') {
    let result = false;

    fields.forEach(field => {
        result = field.checked || result;
    });

    errorField.innerHTML = result ? '' : errorMessage;

    return !result;
}


function maxLengthValidation(field, errorField, maxLength = 0) {
    if (field.value.length > maxLength) {
        errorField.innerHTML = `To pole musi mieć najwyżej ${maxLength} znaków`;
        return true;
    }
    else {
        errorField.innerHTML = '';
        return false;
    }
}

//Funckja sprawdzjąca wiek
function validAge(field, errorField) {
    //Data dzisiejsza
    const today = new Date();
    //Data wprowadzona w formularzu
    const date = new Date(field.value);

    //Obliczenie wieku
    var age = today.getFullYear() - date.getFullYear();
    var m = today.getMonth() - date.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
        //Odjęcie 1 roku jeśli data urodzin jeszcze nie nastąpiła
        age--;
    }

    errorField.innerHTML = age < 18 ? 'Musisz być pełnoletni' : '';

    return age < 18;
}


//Funkcja sprawdzająca czy hasło jest takie samo
function validConfirmPassword(confirmPasswordField, passwordField, errorField) {
    if (confirmPasswordField.value !== passwordField.value) {
        errorField.innerHTML = 'Hasła nie są takie same';
        return true;
    }
    else {
        errorField.innerHTML = '';
        return false;
    }
}