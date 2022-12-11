import Notiflix from 'notiflix';

const refForm = document.querySelector("form");
const refInputs = document.querySelectorAll("input");
const delayRef = refInputs[0];
const stepRef =  refInputs[1];
const amountRef = refInputs[2];
const btnSubmit= document.querySelector("button");
// btnSubmit.addEventListener('click', createPromise);

// let getEl = selector => document.querySelector(selector);
// getEl('.form')

// const Promise = new Promise((resolve, reject) => { 
 function createPromise(position, delay) {
    let promise =  new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;

      setTimeout(() => {
      if (shouldResolve) {   
       resolve({ position, delay});
      } 
       reject({ position, delay});
     }, delay);
      });
      return promise;
    };
// }, delay);
     
  // };

refForm.addEventListener("input", () => {
  let delay = parseInt(delayRef.value);
  let step = parseInt(stepRef.value);
  let amount = parseInt(amountRef.value);

 refForm.addEventListener("submit", (event) =>{
   event.preventDefault();
   console.log(delay, step, amount)
  for (let i = 1; i <= amount; i+=1) {
   createPromise(i, delay)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  })
     .finally(() => {
       refForm.reset();
       delay = 0;
       step = 0;
       amount = 0;
     }); 
  delay += step
    };
 })
}); 
