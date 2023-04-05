"use strict"

const firstName = document.querySelector('.first-name__input');
const lastName = document.querySelector('.last-name__input');
const promptFirstName = document.querySelector('.prompt-firstname');
const promptLastName = document.querySelector('.prompt-lastname');
const promptEmail= document.querySelector('.prompt-email');
const promptPassword = document.querySelector('.prompt-password');
const promptPasswordConfirm = document.querySelector('.prompt-passwordconfirm');
const promptBirthDay = document.querySelector('.prompt-birthday');

const checkValidClass = () => {
    const formInput = Array.from(document.querySelectorAll('.form__input'));
    const formButton = document.querySelector('.form-button');
    const result = formInput.filter(item => {
        if(item.classList.contains('valid')) return item;
    })

    if(formInput.length === result.length) {
        formButton.classList.remove('disabled');
    } else {
        formButton.classList.add('disabled');
    }
}

const addingPrompt = value => {
    value.style.display = 'block';
}

const removePrompt = value => {
    value.style.display = 'none';
}

const addingValidate = value => {
    value.classList.remove('invalid');
    value.classList.add('valid');
}

const removeValidate = value => {
    value.classList.remove('valid');
    value.classList.add('invalid');
}

const validateName = name => {
    const regex = /^[а-яА-ЯёЁ-]{1,25}$/;
    return regex.test(name);
}

const onInputName = name => {
    if (validateName(name.value)) {
        addingValidate(name)
        if(name.classList.contains('first-name__input')) removePrompt(promptFirstName);
        else removePrompt(promptLastName);
     } else {
        removeValidate(name)
        if(name.classList.contains('first-name__input')) addingPrompt(promptFirstName);
        else addingPrompt(promptLastName)
     }

     checkValidClass();
}


firstName.addEventListener('input', () => onInputName(firstName))
lastName.addEventListener('input', () => onInputName(lastName))

const email = document.querySelector('.email__input');

const validateEmail = email => {
    const regex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    return regex.test(email);
  }

 const onInputEmail = () => {
     if (validateEmail(email.value)) {
        addingValidate(email);
        removePrompt(promptEmail);
     }
     else {
        removeValidate(email);
        addingPrompt(promptEmail);
     }

     checkValidClass();
     
 }

email.addEventListener('input', onInputEmail);

const birthDay = document.querySelector('.birth-day__input');

const checkDate = () => {
    const valueBirthDay = birthDay.value.split('-');
    const date = new Date();
    const presentYear = date.getFullYear();
    const year = +valueBirthDay[0];
     
    if(!(year < 1900 || year > presentYear)) {
        if(!((presentYear - year) < 18)) {
            addingValidate(birthDay);
            removePrompt(promptBirthDay);
        }
    } else {
        removeValidate(birthDay)
        addingPrompt(promptBirthDay);
    }
    
    checkValidClass();
 
}
 
birthDay.addEventListener('input', checkDate)
 

const password = document.querySelector('.password__input');
const passwordConfirm = document.querySelector('.password-confirm__input');

const validatePassword = password => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}

const onInputPassword = () => {
    if (validatePassword(password.value)) {
        addingValidate(password);
        removePrompt(promptPassword);
    }
    else {
        removeValidate(password);
        addingPrompt(promptPassword)
    }
    checkValidClass();
}

password.addEventListener('input', onInputPassword);


const onInputPasswordConfirm = () => {
    console.log(passwordConfirm.value)
    if(password.value === passwordConfirm.value) {
        addingValidate(passwordConfirm)
        removePrompt(promptPasswordConfirm);
    }
    else {
        removeValidate(passwordConfirm);
        addingPrompt(promptPasswordConfirm)
    }
    checkValidClass();
    
}


passwordConfirm.addEventListener('input', onInputPasswordConfirm);










