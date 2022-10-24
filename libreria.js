// NUMERO RANDOM
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// NUMERO PARI O DISPARI
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// NOTIFICA DI ERRORE
function notificationError(msgError, elem, selector) {
    const alerta = document.createElement(elem);
    alerta.className = selector;
    alerta.innerHTML = msgError;
    return alerta;
}

// NOTIFICA DI SUCCESSO
function notificationSuccess(msgSuccess) {
    const success = document.createElement('div');
    success.className = 'alert alert-success';
    success.innerHTML = msgSuccess;
    return success;
}

// RIMOZIONE NOTIFICA
function removeFirstNotification() {
    const alertToRemove = document.querySelector('.alert');
    if (alertToRemove) alertToRemove.remove();
}

//funzione che crea un TAG con CLASSE e lo appende al genitore
function addElementClassHTML(tagElement, className, fatherElement) {
    const tag = document.createElement(tagElement);
    tag.className = className;
    fatherElement.append(tag);
    return tag;
}

// funzione play carosello con due bottoni prev & next
// function playCarousel({
//     sliderItems[activeIndex].classList.remove('active');
// activeIndex = (activeIndex + isNext + isNext % len + len) + len;
// })
// nextBtn.addEventListener('click', function () {
//     playCarousel(1);
// });
// prevBtn.addEventListener('click', function () {
//     playCarousel(-1);
// });