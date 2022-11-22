const scriptURL =
    'https://script.google.com/macros/s/AKfycbwaCi0prWnW8qFTYjbgD9-8JzDBuPk2mWWGsPYiWAjrh1XsOFVd_2NaDORwXwtD0AGa/exec';
const form = document.forms['form'];
const btnkirim = document.querySelector('.btn-kirim');
const btnloading = document.querySelector('.btn-loading');
let popup2 = document.getElementById("popup2");
let popup3 = document.getElementById("popup3");

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

function openPopup() {
    popup2.classList.add("open-popup2")
}

function closePopup() {
    popup2.classList.remove("open-popup2")
}

function closePopup2() {
    popup3.classList.remove("open-popup3")
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
            popup2.classList.remove("open-popup2")
            popup3.classList.add("open-popup3")
        })
        .catch(error => console.error('Error!', error.mesimage.pngsage))
})