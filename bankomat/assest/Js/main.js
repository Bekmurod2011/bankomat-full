let start = document.querySelector('.start'),
    secondPage = document.querySelector('.second-page'),
    thirdPage = document.querySelector('.third-page'),
    fourthPage = document.querySelector('.fourth-page'),
    fivethPage = document.querySelector('.fiveth-page')


secondPage.style.display = 'none'
fourthPage.style.display = 'none'
fivethPage.style.display = 'none'
thirdPage.style.display = 'none'

start.addEventListener('click', () => {
    thirdPage.style.display = 'block'
    start.style.display = 'none'
})

let but = document.querySelectorAll('.but'),
    inp = document.querySelector('.inp'),
    enter = document.querySelector('.enter')


enter.addEventListener('click', () => {
    if(inp.value == '123456789' || inp.value == '20112106') {
        fourthPage.style.display = 'block'
        thirdPage.style.display = 'none'
    }else {
        alert('Your password is error. Please try again')
        inp.value = ''
    }
})

let seeBalance = document.querySelector('.see-balance'),
    seeSolve = document.querySelector('.see-solve'),
    balance = document.querySelector('.balance'),
    solve = document.querySelector('.solve'),
    h1 = document.querySelector('h1'),
    h2 = document.querySelector('h2'),
    back = document.querySelector('.back'),
    back_2 = document.querySelector('.back-2')

h1.value = 1000000;


h1.innerHTML = `Your balance: ${h1.value}`

seeBalance.addEventListener('click', () => {
    fivethPage.style.display = 'block'
    fourthPage.style.display = 'none'
    h1.style.display = 'block'
})

back.addEventListener('click', () => {
    fourthPage.style.display = 'block'
    fivethPage.style.display = 'none'
})

seeSolve.addEventListener('click', () => {
    secondPage.style.display = 'block'
    fourthPage.style.display = 'none'
})

back_2.addEventListener('click', () => {
    fourthPage.style.display = 'block'
    secondPage.style.display = 'none'
})

let money100 = document.querySelector('.money100'),
    money200 = document.querySelector('.money200'),
    money300 = document.querySelector('.money300'),
    money400 = document.querySelector('.money400'),
    money500 = document.querySelector('.money500'),
    money600 = document.querySelector('.money600'),
    money700 = document.querySelector('.money700'),
    money800 = document.querySelector('.money800'),
    money900 = document.querySelector('.money900')

money100.addEventListener('click', () => {
    h1.innerHTML = `Your balance: ${1000000 - 100000}`
    h1.innerHTML = `Your balance: ${900000 - 100000}`
    h1.innerHTML = `Your balance: ${800000 - 100000}`
    h1.innerHTML = `Your balance: ${700000 - 100000}`
    h1.innerHTML = `Your balance: ${600000 - 100000}`
    h1.innerHTML = `Your balance: ${500000 - 100000}`
    h1.innerHTML = `Your balance: ${400000 - 100000}`
    h1.innerHTML = `Your balance: ${300000 - 100000}`
    h1.innerHTML = `Your balance: ${200000 - 100000}`
    h1.innerHTML = `Your balance: ${100000 - 100000}`
    alert("Tabriklaymiz! Hisobingizdan muvaffaqiyatli pul yechildi.")
    secondPage.style.display = 'none'
    start.style.display = 'block'
    inp.value = ''
})

money200.addEventListener('click', () => {
    h1.innerHTML = `Your balance: ${1000000 - 200000}`
    h1.innerHTML = `Your balance: ${90000 - 200000}`
    h1.innerHTML = `Your balance: ${80000 - 200000}`
    h1.innerHTML = `Your balance: ${70000 - 200000}`
    h1.innerHTML = `Your balance: ${60000 - 200000}`
    h1.innerHTML = `Your balance: ${50000 - 200000}`
    h1.innerHTML = `Your balance: ${40000 - 200000}`
    h1.innerHTML = `Your balance: ${30000 - 200000}`
    h1.innerHTML = `Your balance: ${20000 - 200000}`
    alert("Tabriklaymiz! Hisobingizdan muvaffaqiyatli pul yechildi.")
    secondPage.style.display = 'none'
    start.style.display = 'block'
    inp.value = ''
})

money300.addEventListener('click', () => {
    h1.innerHTML = `Your balance: ${1000000 - 300000}`
    h1.innerHTML = `Your balance: ${900000 - 300000}`
    h1.innerHTML = `Your balance: ${800000 - 300000}`
    h1.innerHTML = `Your balance: ${700000 - 300000}`
    h1.innerHTML = `Your balance: ${600000 - 300000}`
    h1.innerHTML = `Your balance: ${500000 - 300000}`
    h1.innerHTML = `Your balance: ${400000 - 300000}`
    h1.innerHTML = `Your balance: ${300000 - 300000}`
    alert("Tabriklaymiz! Hisobingizdan muvaffaqiyatli pul yechildi.")
    secondPage.style.display = 'none'
    start.style.display = 'block'
    inp.value = ''
})

money400.addEventListener('click', () => {
    h1.innerHTML = `Your balance: ${1000000 - 400000}`
    h1.innerHTML = `Your balance: ${900000 - 400000}`
    h1.innerHTML = `Your balance: ${800000 - 400000}`
    h1.innerHTML = `Your balance: ${700000 - 400000}`
    h1.innerHTML = `Your balance: ${600000 - 400000}`
    h1.innerHTML = `Your balance: ${500000 - 400000}`
    h1.innerHTML = `Your balance: ${400000 - 400000}`
    alert("Tabriklaymiz! Hisobingizdan muvaffaqiyatli pul yechildi.")
    secondPage.style.display = 'none'
    start.style.display = 'block'
    inp.value = ''
})

money500.addEventListener('click', () => {
    h1.innerHTML = `Your balance: ${1000000 - 500000}`
    h1.innerHTML = `Your balance: ${900000 - 500000}`
    h1.innerHTML = `Your balance: ${800000 - 500000}`
    h1.innerHTML = `Your balance: ${700000 - 500000}`
    h1.innerHTML = `Your balance: ${600000 - 500000}`
    h1.innerHTML = `Your balance: ${500000 - 500000}`
    alert("Tabriklaymiz! Hisobingizdan muvaffaqiyatli pul yechildi.")
    secondPage.style.display = 'none'
    start.style.display = 'block'
    inp.value = ''
})

money600.addEventListener('click', () => {
    h1.innerHTML = `Your balance: ${1000000 - 600000}`
    h1.innerHTML = `Your balance: ${900000 - 600000}`
    h1.innerHTML = `Your balance: ${800000 - 600000}`
    h1.innerHTML = `Your balance: ${700000 - 600000}`
    h1.innerHTML = `Your balance: ${600000 - 600000}`
    alert("Tabriklaymiz! Hisobingizdan muvaffaqiyatli pul yechildi.")
    secondPage.style.display = 'none'
    start.style.display = 'block'
    inp.value = ''
})

money700.addEventListener('click', () => {
    h1.innerHTML = `Your balance: ${1000000 - 700000}`
    h1.innerHTML = `Your balance: ${900000 - 700000}`
    h1.innerHTML = `Your balance: ${800000 - 700000}`
    h1.innerHTML = `Your balance: ${700000 - 700000}`
    alert("Tabriklaymiz! Hisobingizdan muvaffaqiyatli pul yechildi.")
    secondPage.style.display = 'none'
    start.style.display = 'block'
    inp.value = ''
})

money800.addEventListener('click', () => {
    h1.innerHTML = `Your balance: ${1000000 - 800000}`
    h1.innerHTML = `Your balance: ${900000 - 800000}`
    h1.innerHTML = `Your balance: ${800000 - 800000}`
    alert("Tabriklaymiz! Hisobingizdan muvaffaqiyatli pul yechildi.")
    secondPage.style.display = 'none'
    start.style.display = 'block'
    inp.value = ''
})

let cancel = document.querySelector('.cancel')

cancel.addEventListener('click', () => {
    secondPage.style.display = 'none'
    start.style.display = 'block'
});