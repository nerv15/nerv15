let ground = document.querySelector('.ground');
const amountOfBoxes = 725;
let colors = ['red','green','blue','yellow','purple'];



// append() - указывает что появится внутри элемента к которому вы обращаетесь

for(let i = 0; i < amountOfBoxes;i++) {
    let box = document.createElement('div')
    box.classList.add('box')
    ground.append(box)
    box.addEventListener('mouseover', () => setColor(box))
    box.addEventListener('mouseleave', () => removeColor(box))
}

function setColor(el) {
    el.style.background = `rgb(${rand()}, ${rand()}, ${rand()})`
}

function removeColor(asd) {
    asd.style.background = 'rgb(52, 60, 60)'
}

function rand(){
    let value = Math.floor(Math.random() * 255);

    return value;
}

function randColor() {
    let index = Math.floor(Math.random() * colors.length)
   
    return colors[index]
}

