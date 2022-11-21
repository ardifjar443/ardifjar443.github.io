const scriptURL =
    'https://script.google.com/macros/s/AKfycbyyzFTcUzBWdEswUiiLJIT15F_MbX5At44Wc4ZN0LzriKyuixjtiu9uCChQrpcU7vOb/exec';
const form = document.forms['form'];
const btnkirim = document.querySelector('.btn-kirim');
const btnloading = document.querySelector('.btn-loading');
let popup = document.getElementById("popup");
let popup2 = document.getElementById("popup2");


function openPopup() {
    popup.classList.add("open-popup")
}

function closePopup() {
    popup.classList.remove("open-popup")
}

function closePopup2() {
    popup2.classList.remove("open-popup2")
}


form.addEventListener('submit', e => {
    e.preventDefault()
    // klik
    // loading
    btnloading.classList.toggle('d-none');
    btnkirim.classList.toggle('d-none');
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            btnloading.classList.toggle('d-none');
            btnkirim.classList.toggle('d-none');
            form.reset();
            console.log('Success!', response)
            popup.classList.remove("open-popup")
            popup2.classList.add("open-popup2")
        })
        .catch(error => console.error('Error!', error.mesimage.pngsage))
})