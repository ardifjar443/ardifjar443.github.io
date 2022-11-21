const scriptURL = 'https://script.google.com/macros/s/AKfycbyyzFTcUzBWdEswUiiLJIT15F_MbX5At44Wc4ZN0LzriKyuixjtiu9uCChQrpcU7vOb/exec';
const form = document.forms['form'];
const btnkirim = document.querySelector('.btn-kirim');
const btnloading = document.querySelector('.btn-loading');
const myalert = document.querySelector('.my-alert');


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
            myalert.classList.toggle('d-none');
            form.reset();
            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.mesimage.pngsage))
})