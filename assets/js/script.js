const cardArray = [
    {
        name: 'fries',
        img:'../assets/images/fries.png',
    },
    {
        name: 'cheeseburger',
        img:'../assets/images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img:'../assets/images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img:'../assets/images/ice-cream.png',
    },
    {
        name: 'pizza',
        img:'../assets/images/pizza.png',
    },
    {
        name: 'milkshake',
        img:'../assets/images/milkshake.png',
    },
    {
        name: 'fries',
        img:'../assets/images/fires.png',
    },
    {
        name: 'cheeseburger',
        img:'../assets/images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img:'../assets/images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img:'../assets/images/ice-cream.png',
    },
    {
        name: 'pizza',
        img:'../assets/images/pizza.png',
    },
    {
        name: 'milkshake',
        img:'../assets/images/milkshake.png',
    }
]

// To sort an array randomly. 
cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')

const cardsChosen = []
const cardsChosenIds = []

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
    console.log('check for match!')
    if(cardsChosen[0] === cardsChosen[1]){
        alert("You've found a match !")
        cards[cardsChosenIds[0]].setAttribute('src', '../assets/images/white.png')
    }
}


function flipCard(){
    //this would retrieve any element details clicked(data-id) 
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    console.log('clicked', cardId)
    this.setAttribute('src' , cardArray[cardId].img)
    if(cardsChosen.length === 2){
        setTimeout( checkMatch, 500)
    }
}