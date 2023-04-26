import k from '../kaboom'

export default function MainMenu(){
    const{
        add,
        pos,
        text,
        color, 
        width,
        height,
        origin,
        mouseClick,
        go
    } = k
    add([
        pos(width() * 0.5, height() * 0.5),
        text('Slimey the Worm', 24),
        color(1, 0, 0, 1),
        origin('center'),
    ])

    add([
        pos(200, 190),
        text('click to play!')
    ])

    mouseClick(() => {
        go('instructions')
    }) 
}