


const first = document.querySelector('.first')
const second = document.querySelector('.second')
const button = document.querySelector('.button')
const numbers = document.querySelectorAll('.first .numbers p')
const span = document.querySelector('.second .chosen span')



numbers.forEach(number => {
  number.addEventListener('click', () => {
    numbers.forEach(anotherNumber => {
      anotherNumber.style.backgroundColor = 'var(--clr-medium-grey)'
      anotherNumber.style.color = 'var(--clr-light-grey)'
      anotherNumber.classList.remove('clicked')
    })

    number.style.backgroundColor = 'var(--clr-primary-orange)'
    number.style.color = 'var(--clr-white)'
    number.classList.add('clicked')
    const clicked = document.querySelector('.clicked')
    span.innerText = clicked.innerText
    console.log(span.innerText)
  })
})




let change = true
button.addEventListener('click', () => {
  
  if(change)  {
    first.style.display = 'none'
    second.style.display = 'block'
    
  } else  {
    first.style.display = 'block'
    second.style.display = 'none'
  
  }
})