const slotLookup = {
    ichigo: {
        imageUrl: 'placeholder.png'
    },
    naruto: {
        imageUrl: 'placeholder.png'
    },
    luffy: {
       imageUrl: 'placeholder.png'
    }
}

//state variables 
let slots;

const slotEl = {
    slotOne: {
        borderEl: document.querySelector('#slot1')
        imgEl: document.querySelector('#slot1 img')
    },
    slotTwo: {
        borderEl: document.querySelector('#slot2')
        imgEl: document.querySelector('#slot2 img')
    },
    slotThree: {
        borderEl: document.querySelector('#slot3')
        imgEl: document.querySelector('#slot3 img')
    }
}
//initialize state variables
function init() {
    slots = {
        slotOne: "ichigo",
        slotTwo: "naruto",
        slotThree: "luffy"
    };
    render();
}

function render() {

}

const slotChoices ["1", "2", "3"]
const randChoice = Math.floor(Math.random()*slotChoices.length);
