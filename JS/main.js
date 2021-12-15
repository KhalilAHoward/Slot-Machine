
//slots
const slot1 = document.querySelector('#slot1')
const slot2 = document.querySelector('#slot2')
const slot3 = document.querySelector('#slot3')
const slotChoices = ["1", "2", "3"]

function randChoice() {
    let number=Math.floor(Math.random()*slotChoices.length);
    console.log(number)
    return slotChoices[number];
}

function slotSpin () {
    const option1 = randChoice()
    const option2 = randChoice()
    const option3 = randChoice()

    slot1.innerText = option1
    slot2.innerText = option2
    slot3.innerText = option3
}

slotSpin()
