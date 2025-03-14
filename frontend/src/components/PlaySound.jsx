const playNavSound = (type) => {
    console.log(`Playing sound: ${type}`)

    const audio = new Audio()
    audio.volume = 0.3

    switch (type) {
        case 'opening':
            audio.src = '/sounds/opening.mp3'
            break;
        case 'hover':
            audio.src = '/sounds/hover.mp3'
        case 'select':
            audio.src = '/sounds/select.mp3'
            break;
        case 'open':
            audio.src = '/sounds/open.mp3'
            break;
        case 'close':
            audio.src = '/sounds/open.mp3'
            break;
    }

    audio.play().catch(e => console.log('Audio play prevented by browser'))
}

export default playNavSound