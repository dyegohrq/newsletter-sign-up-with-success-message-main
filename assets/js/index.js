const form = document.getElementById('form')
const articleSuccess = document.getElementById('success')
const signUp = document.getElementById('sign_up')
const email = document.getElementById('email')
const emailSpan = document.getElementById('email-span')
const button = document.getElementById('button')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInput()
})

function checkInput() {
    const emailValue = email.value;

    if (emailValue === '') {
        setErrorfor(email, 'Fill in this field!')
    } else if (!isEmail(emailValue)) {
        setErrorfor(email, 'Valid email required')
    } else {
        setSuccessFor(email)
    }
}

function setErrorfor(input, message) {
    const formControl = input.parentElement;
    const span = formControl.querySelector('span')

    formControl.classList.add('invalid')
    span.innerHTML = message
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    const emailValue = email.value;

    formControl.classList.remove('invalid')
    signUp.style.display = 'none';
    articleSuccess.style.display = 'flex'
    emailSpan.innerHTML = emailValue
}

button.addEventListener('click', () => {
    signUp.style.display = 'flex';
    articleSuccess.style.display = 'none'
    email.value = ''
    email.focus()
})

function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}