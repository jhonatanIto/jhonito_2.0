const calculadora = {
    init() {
        this.controllers.displayElements()
        this.controllers.calculatorEngine()
        this.controllers.openCloseButt()
    },
    controllers: {
        displayElements() {
            let el = calculadora.elements

            document.body.appendChild(el.calcPage)
            el.calcPage.appendChild(el.menuCalc)
            el.calcPage.classList.add('calculadoraPage')
            el.menuCalc.appendChild(el.exit)
            el.menuCalc.classList.add('menuCalc')
            el.exit.classList.add('calcExit')
            el.exit.innerHTML = 'X'
            el.calcPage.appendChild(el.container)
            el.container.classList.add('calcContainer')
            el.container.appendChild(el.display)
            el.display.classList.add('calDisplay')
            el.container.appendChild(el.buttonsCalc)
            el.buttonsCalc.classList.add('buttonsCalc')
            el.buttonsCalc.appendChild(el.butC)
            el.butC.classList.add('calcButton')
            el.butC.innerHTML = 'C'
            el.buttonsCalc.appendChild(el.butD)
            el.butD.classList.add('calcButton')
            el.butD.innerHTML = '/'
            el.buttonsCalc.appendChild(el.butM)
            el.butM.classList.add('calcButton')
            el.butM.innerHTML = '*'
            el.buttonsCalc.appendChild(el.butDel)
            el.butDel.classList.add('calcButton')
            el.butDel.innerHTML = '←'
            el.buttonsCalc.appendChild(el.seven)
            el.seven.classList.add('calcButton')
            el.seven.innerHTML = '7'
            el.buttonsCalc.appendChild(el.eight)
            el.eight.classList.add('calcButton')
            el.eight.innerHTML = '8'
            el.buttonsCalc.appendChild(el.nine)
            el.nine.classList.add('calcButton')
            el.nine.innerHTML = '9'
            el.buttonsCalc.appendChild(el.butMinus)
            el.butMinus.classList.add('calcButton')
            el.butMinus.innerHTML = '-'
            el.buttonsCalc.appendChild(el.four)
            el.four.classList.add('calcButton')
            el.four.innerHTML = '4'
            el.buttonsCalc.appendChild(el.five)
            el.five.classList.add('calcButton')
            el.five.innerHTML = '5'
            el.buttonsCalc.appendChild(el.six)
            el.six.classList.add('calcButton')
            el.six.innerHTML = '6'
            el.buttonsCalc.appendChild(el.butP)
            el.butP.classList.add('calcButton')
            el.butP.innerHTML = '+'
            el.buttonsCalc.appendChild(el.one)
            el.one.classList.add('calcButton')
            el.one.innerHTML = '1'
            el.buttonsCalc.appendChild(el.two)
            el.two.classList.add('calcButton')
            el.two.innerHTML = '2'
            el.buttonsCalc.appendChild(el.three)
            el.three.classList.add('calcButton')
            el.three.innerHTML = '3'
            el.buttonsCalc.appendChild(el.dot)
            el.dot.classList.add('calcButton')
            el.dot.innerHTML = '.'
            el.buttonsCalc.appendChild(el.left)
            el.left.classList.add('calcButton')
            el.left.innerHTML = '('
            el.buttonsCalc.appendChild(el.zero)
            el.zero.classList.add('calcButton')
            el.zero.innerHTML = '0'
            el.buttonsCalc.appendChild(el.right)
            el.right.classList.add('calcButton')
            el.right.innerHTML = ')'
            el.buttonsCalc.appendChild(el.equal)
            el.equal.classList.add('calcButton')
            el.equal.classList.add('calcEqual')
            el.equal.innerHTML = '='


        },
        calculatorEngine() {
            let el = calculadora.elements
            let buttons = Array.from(document.getElementsByClassName('calcButton'))
            buttons.map(button => {
                button.addEventListener('click', (e) => {
                    switch (e.target.innerText) {
                        case 'C':
                            el.display.innerText = ''
                            break
                        case "←":
                            if (el.display.innerText) {
                                el.display.innerText = el.display.innerText.slice(0, -1)
                            }
                            break
                        case '=': try {
                            el.display.innerText = eval(el.display.innerText)
                        } catch {
                            el.display.innerText = 'Error!'
                        }
                            break
                        default:
                            el.display.innerText += e.target.innerText




                    }
                })
            })


        },
        openCloseButt() {
            let el = calculadora.elements
            let home = document.getElementById('home')
            let calculatorbut = document.getElementById('calculator')
            el.exit.onclick = () => {
                el.calcPage.style.display = 'none'
                home.style.display = 'flex'
            }
            calculatorbut.onclick = () => {
                el.calcPage.style.display = 'block'
                home.style.display = 'none'
            }

        }

    },
    elements: {
        calcPage: document.createElement('div'),
        menuCalc: document.createElement('div'),
        exit: document.createElement('div'),
        container: document.createElement('div'),
        display: document.createElement('div'),
        buttonsCalc: document.createElement('div'),
        butC: document.createElement('div'),
        butD: document.createElement('div'),
        butM: document.createElement('div'),
        butDel: document.createElement('div'),
        seven: document.createElement('div'),
        eight: document.createElement('div'),
        nine: document.createElement('div'),
        butMinus: document.createElement('div'),
        four: document.createElement('div'),
        five: document.createElement('div'),
        six: document.createElement('div'),
        butP: document.createElement('div'),
        one: document.createElement('div'),
        two: document.createElement('div'),
        three: document.createElement('div'),
        dot: document.createElement('div'),
        left: document.createElement('div'),
        zero: document.createElement('div'),
        right: document.createElement('div'),
        equal: document.createElement('div'),
    }

}
calculadora.init()