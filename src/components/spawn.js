import k from '../kaboom'
import randomPositioner from '../utils/randomPositioner'

export default function spawn(){
    const {
        wait,
        add,
        pos,
        rect,
        sprite,
        origin
    } = k
    return{
        spawn(){
            wait(0.2, () => {
                add([
                    pos(randomPositioner()),
                    sprite('cookie'),
                    origin('center'),
                    'food'
                ])
            })
        }
    }
}