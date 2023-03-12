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
    form.appendChild(emailField);

    const countryField = document.createElement('select');
    countryField.classList.add('form-inputs');
    countryField.required = true;
    emailField.id = 'country';
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

    const zipCodeField = document.createElement('input');
    zipCodeField.classList.add('form-inputs');
    zipCodeField.type = 'text';
    zipCodeField.placeholder = 'Zip Code';
    zipCodeField.required = true;
    zipCodeField.id = 'zipcode';
    form.appendChild(zipCodeField);

    const passwordField = document.createElement('input');
    passwordField.classList.add('form-inputs');
    passwordField.type = 'password';
    passwordField.placeholder = 'Password';
    passwordField.required = true;
    passwordField.id = 'password';
    form.appendChild(passwordField);

    const btn = document.createElement('button');
    btn.classList.add('form-inputs');
    btn.type = 'button';
    btn.id = 'btn';
    btn.textContent = 'Register';
    form.appendChild(btn);
};

export default pageload;
