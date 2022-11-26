const scriptURL =
    'https://script.google.com/macros/s/AKfycbwaCi0prWnW8qFTYjbgD9-8JzDBuPk2mWWGsPYiWAjrh1XsOFVd_2NaDORwXwtD0AGa/exec';
const form = document.forms['form'];
const btnkirim = document.querySelector('.btn-kirim');
const btnloading = document.querySelector('.btn-loading');
const myalert = document.querySelector('.my-alert')

// // navbar
// const navLinks = document.querySelectorAll('.nav-item')
// const menuToggle = document.getElementById('navbarSupportedContent')
// const bsCollapse = new bootstrap.Collapse(menuToggle)
// navLinks.forEach((l) => {
//     l.addEventListener('click', () => {
//         bsCollapse.toggle()
//     })
// })
// // end navbar

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
            myalert.classList.toggle('d-none');
        })
        .catch(error => console.error('Error!', error.mesimage.pngsage))
})