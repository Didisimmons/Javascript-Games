const cardArray = [
    {
        name: 'fries',
        img:'assets/images/fries.png',
    },
    {
        name: 'cheeseburger',
        img:'assets/images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img:'assets/images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img:'assets/images/ice-cream.png',
    },
    {
        name: 'pizza',
        img:'assets/images/pizza.png',
    },
    {
        name: 'milkshake',
        img:'assets/images/milkshake.png',
    },
    {
        name: 'fries',
        img:'assets/images/fries.png',
    },
    {
        name: 'cheeseburger',
        img:'assets/images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img:'assets/images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img:'assets/images/ice-cream.png',
    },
    {
        name: 'pizza',
        img:'assets/images/pizza.png',
    },
    {
        name: 'milkshake',
        img:'assets/images/milkshake.png',
    }
]

// To sort an array randomly. 
cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const scoreDisplay = document.querySelector('#result')
const backgoundGame = document.body.style.backgroundColor = "#FBEAFF"; 
let cardsChosen = []
let cardsChosenIds = []

// how many matches we have 
const cardsWon = []

function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', '../assets/images/blank.png')
        card.setAttribute('data-id', i) // give each card a unique data-id
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard();

function checkMatch(){
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    if (optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', '../assets/images/blank.png')
        cards[optionTwoId].setAttribute('src', '../assets/images/blank.png')
        alert("You've clicked the same image")
    }

    if(cardsChosen[0] == cardsChosen[1]){
        alert("You've found a match !")
        cards[optionOneId].setAttribute('src', '../assets/images/white.png')
        cards[optionTwoId].setAttribute('src', '../assets/images/white.png')
        // remove event listener from card already matched. 
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        // push cards matched to array
        cardsWon.push(cardsChosen)
    } else{
        cards[optionOneId].setAttribute('src', '../assets/images/blank.png')
        cards[optionTwoId].setAttribute('src', '../assets/images/blank.png')
        alert('Sorry try again!')
    }
    scoreDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length/2){
        scoreDisplay.innerHTML = 'Congratulations you got them all!'

    }
}

function flipCard(){
    //this would retrieve any element details clicked(data-id) 
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log('clicked', cardId)
    this.setAttribute('src' , cardArray[cardId].img)
    if(cardsChosen.length === 2){
        setTimeout( checkMatch, 500)
    }
}