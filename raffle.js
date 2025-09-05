const inputField = document.querySelector('#input-field');

document.addEventListener('DOMContentLoaded', () => {

    inputField.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            raffle()
        }
    });
});


function raffle() {
    const name = inputField.value.trim()

    const existingResult = document.querySelector('h2')
    if (existingResult) existingResult.remove()

    const existingImg = document.querySelector('img');
    if (existingImg) existingImg.remove();


    const textResult = document.createElement('h2')


    if (name.includes("dance")) {
        textResult.textContent = `YOU WON! WOOOH.`
        document.body.appendChild(textResult)
        const prize = document.createElement('img')
        prize.src = './images/boyle_rocks.gif'
        document.body.appendChild(prize)
        inputField.value = ""
    } else {
        textResult.textContent = `Hello, ${name}. You did not win the raffle.`
        document.body.appendChild(textResult)
    }

    inputField.value = ""
}
