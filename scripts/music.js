const musicApp = {
    init() {
        this.controllers.createDisplay()
        this.controllers.exit()
        this.controllers.open()
        this.controllers.generator()
    },
    controllers: {
        createDisplay() {
            let el = musicApp.elements

            el.body.appendChild(el.musicBody)
            el.musicBody.appendChild(el.header)
            el.musicBody.appendChild(el.menu)

            el.menu.appendChild(el.style)
            el.menu.appendChild(el.happy)
            el.menu.appendChild(el.sad)
            el.menu.appendChild(el.chill)
            el.menu.appendChild(el.angry)

            el.musicBody.appendChild(el.buttonCont)
            el.buttonCont.appendChild(el.button)

            el.musicBody.appendChild(el.center)
            el.center.appendChild(el.result)
            el.result.appendChild(el.chords)
            el.result.appendChild(el.bpm)
            el.chords.appendChild(el.chor)
            el.chords.appendChild(el.chords2)

            el.musicBody.appendChild(el.exit)
            el.musicBody.appendChild(el.footer)


            el.musicBody.classList.add('musicBody')
            el.header.innerHTML = 'Music Generator'
            el.header.classList.add('mheader')
            el.menu.classList.add('menu')
            el.style.innerHTML = 'STYLE:'
            el.style.classList.add('style')
            el.happy.innerHTML = 'Happy'
            el.happy.classList.add('moods', 'happy')
            el.sad.innerHTML = 'Sad'
            el.sad.classList.add('moods', 'sad')
            el.chill.innerHTML = 'Chill'
            el.chill.classList.add('moods', 'chill')
            el.angry.innerHTML = 'Angry'
            el.angry.classList.add('moods', 'angry')


            el.button.innerHTML = 'GENERATE'
            el.button.classList.add('mButton')
            el.buttonCont.classList.add('buttonCont')

            el.center.classList.add('center')
            el.result.classList.add('resultContainer')
            el.chords.classList.add('chords')
            el.chor.classList.add('chor')
            el.chor.innerHTML = 'Your song chords sequence :'

            el.bpm.classList.add('bpm')

            el.exit.innerHTML = 'EXIT'
            el.exit.classList.add('mExit')

            el.footer.innerHTML = 'Created by Jhonatan Ito'
            el.footer.classList.add('footer')

        },
        exit() {
            musicApp.elements.exit.onclick = () => {
                musicApp.elements.musicBody.style.display = 'none'
                let home = document.getElementById('home')
                home.style.display = 'flex'
            }
        },
        open() {
            let but = document.getElementById('musicButton')
            but.onclick = () => {
                let index = document.getElementById('home')
                musicApp.elements.musicBody.style.display = 'flex'
                index.style.display = 'none'
            }
        },
        generator() {
            let el = musicApp.elements

            let progSad = ["C - Am - F - G", "C - Em - F - G", "C - Am - Dm - G", "Am - Am/G - D/F# - F"]
            let sadBpm = ["60", "80", "55", "65", "70", "75"]
            let sadBpmLength = sadBpm.length
            let sadLength = progSad.length


            let proghapp = ["F - G - A - C", "C - D - E - G", "G - A - B - D", "A - B - C# - E", "D - E - F# - A"]
            let happBpm = ["85", "100", "80", "95", "90", "110"]
            let happL = proghapp.length
            let happBpmL = happBpm.length


            let progChill = ["C#m7 - F#m7 - A - B", "A - F#m - D - E7 - A", "Am - FM7 - E", "A# - Cm - Gm - D#"]
            let chillL = progChill.length
            let chillBpm = ["60", "80", "85", "65", "70", "75"]
            let chillBpmL = chillBpm.length


            let progAngry = ["D5 - F5 - Bb5 - C5", "C - Am - Em - G", "Am - Bm/A - G/A - F/A", "B# - Gb - B# - Ab - Db"]
            let angryL = progAngry.length
            let angryBpm = ["115", "100", "120", "95", "125", "130"]
            let angryBpmL = angryBpm.length


            el.button.onclick = () => {
                if (el.button.id == "happy") {

                    let randomhapp = Math.floor(Math.random() * happL)
                    let randomBpm = Math.floor(Math.random() * happBpmL)
                    el.chords2.innerHTML = proghapp[randomhapp]
                    el.bpm.innerHTML = happBpm[randomBpm] + "BPM"
                    el.button.style.backgroundColor = "white"
                    el.result.style.backgroundColor = "rgb(255, 237, 75)"
                }

                else if (el.button.id == "sad") {
                    let randomSad = Math.floor(Math.random() * sadLength)
                    let randomBpm = Math.floor(Math.random() * sadBpmLength)
                    el.chords2.innerHTML = progSad[randomSad]
                    el.bpm.innerHTML = sadBpm[randomBpm] + "BPM"
                    el.button.style.backgroundColor = "white"
                    el.result.style.backgroundColor = "rgb(114, 205, 221)"
                }
                else if (el.button.id == "chill") {
                    let randomChill = Math.floor(Math.random() * chillL)
                    let randomBpm = Math.floor(Math.random() * chillBpmL)
                    el.chords2.innerHTML = progChill[randomChill]
                    el.bpm.innerHTML = sadBpm[randomBpm] + "BPM"
                    el.button.style.backgroundColor = "white"
                    el.result.style.backgroundColor = "rgb(255, 215, 240)"
                }
                else if (el.button.id == "angry") {
                    let randomAngry = Math.floor(Math.random() * angryL)
                    let randomBpm = Math.floor(Math.random() * angryBpmL)
                    el.chords2.innerHTML = progAngry[randomAngry]
                    el.bpm.innerHTML = angryBpm[randomBpm] + "BPM"
                    el.button.style.backgroundColor = "white"
                    el.result.style.backgroundColor = "rgb(216, 23, 23)"
                }
            }

            el.happy.onclick = () => {
                el.button.style.borderColor = "rgb(255, 237, 75)"
                el.button.style.backgroundColor = "rgb(255, 237, 75)"
                el.button.id = "" + "happy"
            }

            el.sad.onclick = () => {

                el.button.style.borderColor = "rgb(114, 205, 221)"
                el.button.style.backgroundColor = "rgb(114, 205, 221)"
                el.button.id = "" + "sad"
            }

            el.chill.onclick = () => {
                el.button.style.borderColor = "rgb(255, 215, 240)"
                el.button.style.backgroundColor = "rgb(255, 215, 240)"
                el.button.id = "sad"
                el.button.id = "" + "chill"
            }
            el.angry.onclick = () => {
                el.button.style.borderColor = "rgb(216, 23, 23)"
                el.button.style.backgroundColor = "rgb(216, 23, 23)"
                el.button.id = "" + "angry"
            }

        }
    },

    elements: {
        body: document.body,
        musicBody: document.createElement('div'),
        header: document.createElement('div'),
        menu: document.createElement('div'),
        /////////////divs inside the menu/////////////
        style: document.createElement('div'),
        happy: document.createElement('div'),
        sad: document.createElement('div'),
        chill: document.createElement('div'),
        angry: document.createElement('div'),
        buttonCont: document.createElement('div'),
        /////////////div inside buttonCont//////////
        button: document.createElement('div'),
        center: document.createElement('div'),
        /////////////div inside center////////////
        result: document.createElement('div'),
        /////////////div inside result////////////
        chords: document.createElement('div'),
        bpm: document.createElement('div'),
        /////////////div inside chords////////////
        chor: document.createElement('div'),
        chords2: document.createElement('div'),

        exit: document.createElement('div'),
        footer: document.createElement('div'),

    }
}
musicApp.init()

