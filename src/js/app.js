console.log('app worked');

const btn = document.querySelector('#btn');
btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    alert('App worked!');
})