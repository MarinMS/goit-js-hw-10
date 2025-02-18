import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const delayInput = form.querySelector('input[name="delay"]');
const stateRadio = form.querySelector('input[name="state"]');

form.addEventListener('submit', event => {
  event.preventDefault();
  const delay = Number(delayInput.value);
  const state = form.querySelector('input[name="state"]:checked').value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.success({
        title: '',
        message: `Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
      console.log(`✅ Fulfilled promise in ${delay}ms`);
    })
    .catch(delay => {
      iziToast.error({
        title: '',
        message: `Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
      console.log(`❌ Rejected promise in ${delay}ms`);
    });
});
