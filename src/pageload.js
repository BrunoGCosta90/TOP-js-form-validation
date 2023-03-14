import {
    hideHighFive,
    validate,
    validateCountry,
    validateEmail,
    validatePassword,
    validateZipcode,
} from './form-validation';

const pageload = () => {
    const form = document.createElement('form');
    form.classList.add('form');
    document.body.appendChild(form);

    const emailField = document.createElement('input');
    emailField.classList.add('form-inputs');
    emailField.type = 'email';
    emailField.placeholder = 'E-mail';
    emailField.required = true;
    emailField.id = 'email';
    emailField.addEventListener('focusout', validateEmail);
    form.appendChild(emailField);

    const emailError = document.createElement('div');
    emailError.id = 'email-error';
    emailError.classList.add('error-div');
    form.appendChild(emailError);

    const countryField = document.createElement('select');
    countryField.classList.add('form-inputs');
    countryField.required = true;
    countryField.id = 'country';
    countryField.addEventListener('focusout', validateCountry);
    form.appendChild(countryField);

    const placeholderOption = document.createElement('option');
    placeholderOption.textContent = 'Pick a country...';
    placeholderOption.value = '';
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    countryField.appendChild(placeholderOption);

    const countryBR = document.createElement('option');
    countryBR.textContent = 'Brazil';
    countryBR.value = 'Brazil';
    countryField.appendChild(countryBR);

    const countryUS = document.createElement('option');
    countryUS.textContent = 'United States';
    countryUS.value = 'United States';
    countryField.appendChild(countryUS);

    const countryCA = document.createElement('option');
    countryCA.textContent = 'Canada';
    countryCA.value = 'Canada';
    countryField.appendChild(countryCA);

    const countryError = document.createElement('div');
    countryError.id = 'country-error';
    countryError.classList.add('error-div');
    form.appendChild(countryError);

    const zipCodeField = document.createElement('input');
    zipCodeField.classList.add('form-inputs');
    zipCodeField.type = 'text';
    zipCodeField.placeholder = 'Zip Code';
    zipCodeField.required = true;
    zipCodeField.id = 'zipcode';
    zipCodeField.addEventListener('focusout', validateZipcode);
    form.appendChild(zipCodeField);

    const zipCodeError = document.createElement('div');
    zipCodeError.id = 'zipcode-error';
    zipCodeError.classList.add('error-div');
    form.appendChild(zipCodeError);

    const passwordField = document.createElement('input');
    passwordField.classList.add('form-inputs');
    passwordField.type = 'password';
    passwordField.placeholder = 'Password';
    passwordField.required = true;
    passwordField.id = 'password';
    passwordField.minLength = 8;
    passwordField.maxLength = 32;
    passwordField.addEventListener('focusout', validatePassword);
    form.appendChild(passwordField);

    const passwordError = document.createElement('div');
    passwordError.id = 'password-error';
    passwordError.classList.add('error-div');
    form.appendChild(passwordError);

    const btn = document.createElement('button');
    btn.classList.add('form-inputs');
    btn.type = 'button';
    btn.id = 'btn';
    btn.textContent = 'Register';
    btn.addEventListener('click', validate);
    form.appendChild(btn);

    // high five modal for correct inputs
    const highFive = document.createElement('div');
    highFive.id = 'highfive';
    highFive.classList.add('inactive-modal');
    document.body.appendChild(highFive);
    const message = document.createElement('div');
    message.textContent = 'High five!';
    highFive.appendChild(message);
    const okBtn = document.createElement('button');
    okBtn.textContent = 'Yeah!';
    okBtn.type = 'button';
    okBtn.addEventListener('click', hideHighFive);
    highFive.appendChild(okBtn);
};

export default pageload;
