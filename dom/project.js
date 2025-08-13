let randomNumber=parseInt(Math.random()*100+1)

const input=document.querySelector('#guessField')
const submit=document.querySelector('#subt')
const guessolth=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const loworHi=document.querySelector('.lowOrHi')
const startover=document.querySelector('.resultParas')

let prevguess=[]
let numguess=1
const p=document.createElement('p')
let playgame=true

if(playgame){
  submit.addEventListener('click',(e)=>{
    e.preventDefault()
    const guess=parseInt(input.value)
    validateguess(guess)
  })
}
function validateguess(guess){
    if(isNaN(guess)){
      alert('Please enter a valid Number')
    }
    else if(guess<1){
      alert('Please enter a number greater than 1')
    }
    else if(guess>100){
      alert('Please enter a number less than 100')
    }
    else{
      prevguess.push(guess)
      if(numguess>=10){
        displayguess(guess)
        displaymessage(`Game over.Random number was ${randomNumber}`)
        endgame();
      }else{
        displayguess(guess)
        checkguess(guess)
      }

    }
}
function checkguess(guess){
    if(randomNumber===guess){
      displaymessage(`You guessed it right`)
      endgame();
    }
    else if(guess>randomNumber){
      displaymessage('Number is too high')
    }
    else{
      displaymessage('Number is too low')
    }
}
function displayguess(guess){
    input.value=''
    numguess++
    if(numguess<=11){
      guessolth.innerHTML+=`${guess}  `
    }
    if(numguess<11){
      remaining.innerHTML=`${11-numguess} `
      
    }
    else{
      remaining.innerHTML=`${0} `
    }
}
function displaymessage(message){
    loworHi.innerHTML=`<h2>${message}</h2>`
}
function start(){
    const newgame=document.querySelector('#newGame')
    newgame.addEventListener('click',(e)=>{
      randomNumber = parseInt(Math.random() * 100 + 1);
      numguess=1;
      prevguess=[]
      input.removeAttribute('disabled')
      startover.removeChild(p)
      guessolth.innerHTML=''
      remaining.innerHTML = `${11 - numguess} `;
      playgame=true;
    })
}
function endgame(){
    input.value=''
    input.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML='<h2 id="newGame">Start New Game</h2>'
    startover.appendChild(p)
    playgame=false;
    start();
}
