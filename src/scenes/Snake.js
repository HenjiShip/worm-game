import k from '../kaboom'

import movement from '../components/movement'
import controls from '../components/controls'
import spawn from '../components/spawn'
import randomPositioner from '../utils/randomPositioner'
import link from '../components/link'
import Level from './LevelOne'
import swipe from '../components/swipe'

export default function Snake(){
    
    const {
        add,
        pos,
        origin,
        overlaps,
        destroy,
        sprite,
        scale,
        go,
        text,
        color
        // camShake
    } = k

    let score = 0

    const spawner = add([
        spawn(),
        go('main-menu')
    ])
    
    const scoreText = add([
        pos(16,16),
        text(`Score: ${score}`),
        color(1,1,1,1)
    ])

    let end = add([
        sprite('slimey'),
        pos(randomPositioner()),
        scale(1),
        origin('center'),
        movement(),
        controls(),    
        swipe(),
        link(),
        Level(),
        'head'
    ])

    spawner.spawn()

    var colors = 1

    overlaps('head', 'food', (head, food) => {
        colors += 1
        ++score 
        scoreText.text = `Score: ${score}`

        var colorPick = 'bodyBeige'
        if(colors % 2){
            colorPick = 'bodyOrange'
        }
        else{
            colorPick = 'bodyBeige'
        }

        destroy(food)
        // camShake(1)
        const newBody = add([
            pos(end.pos.x, end.pos.y),
            sprite(colorPick),
            origin('center'),
            link(),
            'body'
        ])

        end.setBody(newBody)
        
        end = newBody

        spawner.spawn()

        overlaps('head', 'body', (head, body) => {
            if(body.isNew()){
                return
            }
            k.camShake(8)
            destroy(head)
            const newHead = add([
                sprite('slimey'),
                scale(1),
                pos(head.pos.x, head.pos.y),
                origin('center')
            ])
            k.wait(2.5, () => {
                go('game-over')
            })    
        })
    })  
    k.collides('head', 'wall', (head, wall) => {
            
        k.camShake(8)
        destroy(head)
        const newHead = add([
            sprite('slimey'),
            scale(1),
            pos(head.pos.x, head.pos.y),
            origin('center')
        ])
        k.wait(2.5, () => {
            go('game-over')
        })  
    })
    

}