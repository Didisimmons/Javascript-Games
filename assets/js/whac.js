const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.getElementById('time-left')
const score = document.getElementById('score')

let result = 0
let hitPosition 
let currentTime = 60
let timeId = null

function randomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')
    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if(square.id == hitPosition){
            result ++
            score.textContent = result
            hitPosition = null
        }
    })
})

function moveMole(){
    timeId = setInterval(randomSquare, 600)
}
moveMole()

function countDown(){
    currentTime --
    timeLeft.innerHTML = currentTime

    if (currentTime == 0){
        clearInterval(countDownTimerId)
        clearInterval(timeId)
        alert('Gameover ! Your final score is ' + result)
    }
   
}
let countDownTimerId = setInterval(countDown, 1000)
