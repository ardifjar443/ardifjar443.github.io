const scriptURL2 =
    'https://script.google.com/macros/s/AKfycbwaCi0prWnW8qFTYjbgD9-8JzDBuPk2mWWGsPYiWAjrh1XsOFVd_2NaDORwXwtD0AGa/exec';
const form2 = document.forms['form2'];
const btnkirim2 = document.querySelector('.btn-kirim2');
const btnloading2 = document.querySelector('.btn-loading2');
let popupkontak = document.getElementById("popupkontak");
let popupthanks = document.getElementById("popupthanks");


function openPopupKontak() {
    popupkontak.classList.add("open-popupkontak")
}

function closePopupKontak() {
    popupkontak.classList.remove("open-popupkontak")
}

function closePopupThanks() {
    popupthanks.classList.remove("open-popupthanks")
}


form2.addEventListener('submit', e => {
    e.preventDefault()
    // klik
    // loading
    btnloading2.classList.toggle('d-none');
    btnkirim2.classList.toggle('d-none');
    fetch(scriptURL2, {
            method: 'POST',
            body: new FormData(form2)
        })
        .then(response => {
            btnloading2.classList.toggle('d-none');
            btnkirim2.classList.toggle('d-none');
            form2.reset();
            console.log('Success!', response)
            popupkontak.classList.remove("open-popupkontak")
            popupthanks.classList.add("open-popupthanks")
        })
        .catch(error => console.error('Error!', error.mesimage.pngsage))
})