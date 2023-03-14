const validateEmail = () => {
    const email = document.getElementById('email');
    const emailError = document.getElementById('email-error');

    if (!email.validity.valid) {
        emailError.textContent = 'Please, enter a valid email address.';
        return false;
    }
    emailError.textContent = '';
    return true;
};

const validateCountry = () => {
    const country = document.getElementById('country');
    const countryError = document.getElementById('country-error');

    if (!country.validity.valid) {
        countryError.textContent = 'Please, select a county from the list.';
        return false;
    }
    countryError.textContent = '';
    return true;
};

const validateZipcode = () => {
    const zipcode = document.getElementById('zipcode');
    const zipcodeError = document.getElementById('zipcode-error');

    if (!zipcode.validity.valid) {
        zipcodeError.textContent = 'Please, enter a valid zip code.';
        return false;
    }
    zipcodeError.textContent = '';
    return true;
};

const validatePassword = () => {
    const password = document.getElementById('password');
    const passwordError = document.getElementById('password-error');
    console.log(password.minLength);

    if (password.validity.tooShort) {
        passwordError.textContent = `Password has to be at least ${password.minLength} characters long.`;
        return false;
    }
    if (password.validity.tooLong) {
        passwordError.textContent = `Password can't be longer than ${password.maxLength} characters.`;
        return false;
    }
    if (password.validity.valueMissing) {
        passwordError.textContent = 'A password is required.';
        return false;
    }
    if (password.validity.valid) {
        passwordError.textContent = '';
        return true;
    }
};

const showHighFive = () => {
    const highFive = document.getElementById('highfive');
    highFive.classList.remove('inactive-modal');
    highFive.classList.add('active-modal');
};

const hideHighFive = () => {
    const highFive = document.getElementById('highfive');
    highFive.classList.add('inactive-modal');
    highFive.classList.remove('active-modal');
};

const validate = () => {
    if (
        validateEmail() &&
        validateCountry() &&
        validateZipcode() &&
        validatePassword()
    ) {
        showHighFive();
    }
};

export {
    validate,
    validateEmail,
    validateCountry,
    validateZipcode,
    validatePassword,
    hideHighFive,
};
