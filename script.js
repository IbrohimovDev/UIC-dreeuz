let select = document.querySelectorAll('.select')
let selectedTitle = document.querySelectorAll('.select-title')
let selectMenu = document.querySelectorAll('.select-menu')
let selectMenuItems = document.querySelectorAll('.select-items')
let chevron = document.querySelectorAll('.selectChevron')

select.forEach(item => {
    item.onclick = (e) => {
        console.log('Click',e.target)
        if (item.classList.contains('active')) {
            item.classList.remove('active')
            console.log('active removed')
        }else {
            item.classList.add('active')
            console.log('active added')
        }
    }
})

selectMenuItems.forEach( item => { item 
    item.onclick = () => {
        selectedTitle.innerText = item.innerText
    }
})




const root = document.getElementById('sliders')

for (let i = 0; i < 3; i++) {
    const carusel = document.createElement('div')
    carusel.classList.add('carusel')
    root.append(carusel)

    const track = document.createElement('div')
    track.classList.add('slide-track')
    track.classList.add('relative')
    track.style.display = 'flex'
    carusel.append(track)

    for (let j = 1; j <= 15; j++) {

        const slide = document.createElement('div')
        slide.classList.add('slide')
        track.append(slide)

        const image = document.createElement("img");
        image.setAttribute("src", "images/" + j + ".jpg");
        image.src="./assets/images/slider/sliderperson.png"
        slide.append(image)
    }

}


