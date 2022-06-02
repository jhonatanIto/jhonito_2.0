const wantedPost = {
    init() {
        this.controllers.displayComponents()
        this.controllers.engine()
        this.controllers.exit()
        this.controllers.open()
    },
    controllers: {
        displayComponents() {
            let el = wantedPost.elements

            document.body.appendChild(el.wantedBody)
            el.wantedBody.appendChild(el.wContainer)
            el.wContainer.appendChild(el.wBox)
            el.wContainer.appendChild(el.wCardcontainer)
            el.wContainer.appendChild(el.wExit)

            el.wBox.appendChild(el.wH1)
            el.wBox.appendChild(el.nameCont)
            el.nameCont.appendChild(el.nameKey)
            el.nameCont.appendChild(el.namee)
            el.wBox.appendChild(el.rewardCont)
            el.rewardCont.appendChild(el.rewardKey)
            el.rewardCont.appendChild(el.reward)
            el.wBox.appendChild(el.imgAdressCont)
            el.imgAdressCont.appendChild(el.imgAdressKey)
            el.imgAdressCont.appendChild(el.imgAdress)
            el.wBox.appendChild(el.button)

            el.wCardcontainer.appendChild(el.img)
            el.wCardcontainer.appendChild(el.cardImg)
            el.wCardcontainer.appendChild(el.cardName)
            el.wCardcontainer.appendChild(el.cardReward)

            el.wH1.innerHTML = 'Create your WANTED post'
            el.nameKey.innerHTML = 'Name :'
            el.rewardKey.innerHTML = 'Reward :'
            el.imgAdressKey.innerHTML = 'Image Adress :'
            el.button.innerHTML = 'CREATE'
            el.wExit.innerHTML = 'Exit'
            el.img.src = 'https://claystage.com/wp-content/uploads/one-piece-wanted-poster-template-a3-150dpi.png'



            el.wantedBody.classList.add('wantedBody')
            el.wContainer.classList.add('wContainer')
            el.wBox.classList.add('wBox')
            el.wCardcontainer.classList.add('wCardcontainer')
            el.wExit.classList.add('wExit')
            el.wH1.classList.add('wH1')
            el.nameCont.classList.add('flex')
            el.nameKey.classList.add('key')
            el.namee.classList.add('wInput')
            el.rewardCont.classList.add('flex')
            el.rewardKey.classList.add('key')
            el.reward.classList.add('wInput')
            el.imgAdressCont.classList.add('flex')
            el.imgAdressKey.classList.add('key')
            el.imgAdress.classList.add('wInput')
            el.button.classList.add('wButton')

            el.wCardcontainer.classList.add('wCardContainer')
            el.img.classList.add('wwanted')
            el.cardImg.classList.add('wImgContainer')
            el.cardName.classList.add('naruto')
            el.cardReward.classList.add('recompensa')


        },

        engine() {
            let el = wantedPost.elements

            el.button.onclick = () => {
                let nameVa = el.namee.value
                el.cardName.innerHTML = "" + nameVa.toUpperCase()

                el.cardImg.style.backgroundImage = '' + `url(${el.imgAdress.value})`
                el.cardReward.innerHTML = "" + el.reward.value
            }


        },

        exit() {
            wantedPost.elements.wExit.onclick = () => {
                wantedPost.elements.wantedBody.style.display = 'none'
                document.getElementById('home').style.display = 'flex'
            }
        },
        open() {
            document.getElementById('wantedPost').onclick = () => {
                wantedPost.elements.wantedBody.style.display = 'flex'
                document.getElementById('home').style.display = 'none'
            }
        }

    },
    elements: {
        wantedBody: document.createElement('div'),
        wContainer: document.createElement('div'),
        wBox: document.createElement('div'),
        /////////////inside box////////////////
        wH1: document.createElement('div'),
        nameCont: document.createElement('div'),
        nameKey: document.createElement('div'),
        namee: document.createElement('input'),

        rewardCont: document.createElement('div'),
        rewardKey: document.createElement('div'),
        reward: document.createElement('input'),

        imgAdressCont: document.createElement('div'),
        imgAdressKey: document.createElement('div'),
        imgAdress: document.createElement('input'),
        button: document.createElement('button'),

        wCardcontainer: document.createElement('div'),
        img: document.createElement('img'),
        cardImg: document.createElement('div'),
        cardName: document.createElement('div'),
        cardReward: document.createElement('div'),

        wExit: document.createElement('div'),


    },

}

wantedPost.init()