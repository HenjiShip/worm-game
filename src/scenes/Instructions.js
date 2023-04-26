import k from '../kaboom'

export default function Instructions(){
    const{
        add,
        pos,
        text,
        width,
        height,
        mouseClick,
        go
    } = k
    add([
        pos(50,20),
        text('How to play: ')
    ])

    add([
        pos(60,40),
        text('Arrow keys to move around')
    ])

    add([
        pos(50,70),
        text('Goal: ')
    ])

    add([
        pos(60,90),
        text('You want to collect as much food to feed slimey')
    ])

    add([
        pos(60,110),
        text('without hitting himself or the walls!')
    ])

    add([
        pos(60, 180),
        text('Click again to start! ->')
    ])
    

    mouseClick(() => {
        go('snake')
    }) 
}