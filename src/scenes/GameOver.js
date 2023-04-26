import k from '../kaboom'

export default function GameOver(){
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
        text('Game Over', 24),
        color(1, 0, 0, 1),
        origin('center')
    ])

    add([
        pos(180, 190),
        text('Click to try again!')
    ])

    mouseClick(() => {
        go('snake')
    }) 
}