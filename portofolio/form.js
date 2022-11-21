const scriptURL = 'https://script.google.com/macros/s/AKfycbwpF4qdgCx8zP-6vJYqvmDTmniehIOyziK6VBEAVmTW7y5UVV1R2uKQV2fY94vor5UHIQ/exec';
const form = document.forms['mail-portofolio'];
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