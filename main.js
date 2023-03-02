const popupEmail = document.querySelector('#popup-email');
const popupBtn = document.querySelector('.popup-btn');
const errorTxt = document.querySelector('.error-txt')
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


popupEmail.addEventListener('change', function () {
    let emailValue = popupEmail.value;
    popupBtn.disabled = false;
    if (emailValue.match(emailPattern) ) {
        popupBtn.disabled = false;
        popupEmail.style.borderColor = '#f3ce00';
        errorTxt.style.display = 'none'
    }else{
        popupBtn.disabled = true
        popupEmail.style.borderColor = 'red';
        errorTxt.style.display = 'block'
        errorTxt.innerHTML ='Введите корректный Email'
    }
})
popupEmail.addEventListener('focus', function () {
    popupEmail.style.borderColor = '#f3ce00';
    errorTxt.style.display = 'none'
    popupBtn.disabled = false;
})

popupBtn.addEventListener("click",function () {
    let emailValue = popupEmail.value;
    popupBtn.disabled = false;
    if (emailValue.match(emailPattern) ) {
        popupBtn.disabled = false;
        popupEmail.style.borderColor = '#f3ce00';
        errorTxt.style.display = 'none'
    }else if (emailValue === '') {
        popupBtn.disabled = true;
        popupEmail.style.borderColor = 'red';
        errorTxt.style.display = 'block'
        errorTxt.innerHTML ='Введите Ваш Email'
    }
    else{
        popupBtn.disabled = true
        errorTxt.innerHTML ='Введите корректный Email'
    }
})
