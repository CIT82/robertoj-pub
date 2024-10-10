// console.log('connected')
// const FORM = document.getElementById('form')
// const SENT = document.getElementById('sent')

// FORM.addEventListener('submit', function (e) {
//     e.preventDefault()
//     const name = e.target.name.value
//     const emial = e.target.email.value
//     const subject = e.target.subject.value
//     const message = e.target.message.value
//     const p = document.createElement('p')
//     p.textContent = `Hello ${name} thanks for your message ${message}`
//     SENT.appendChild(p)
//     FORM.reset();
// })


console.log('connected');
const FORM = document.querySelector('form');
const SENT = document.createElement('div');
SENT.id = 'sent';
document.querySelector('.col-md-8').appendChild(SENT);

FORM.addEventListener('submit', function (e) {
    e.preventDefault();

    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const p = document.createElement('p');
    p.textContent = `Hello ${fname} ${lname}, thanks for your message: "${message}"`;
    SENT.innerHTML = '';
    SENT.appendChild(p);

    FORM.reset();
});