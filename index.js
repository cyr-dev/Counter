const counterDisplay = document.querySelector('#counter')

let counter = 0;
counterDisplay.textContent =  counter


const btnIncrease = document.querySelector('.increase-btn')

const btnDecrease = document.querySelector('.decrease-btn')

const reset = document.querySelector('.reset')

btnIncrease.addEventListener('click', (e) => {
  counter++
  if(counterDisplay.classList.contains('color')) {
    counterDisplay.classList.remove('color')
  }
  counterDisplay.textContent = counter
})

btnDecrease.addEventListener('click', (e) => {
  counter--
  if(counterDisplay.classList.contains('color'))
  counterDisplay.classList.remove('color')
  counterDisplay.textContent = counter
})

reset.addEventListener('click', ()=> {
  counter = 0;
  counterDisplay.textContent = counter
  counterDisplay.classList.add('color')
})


