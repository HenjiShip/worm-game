import k from '../kaboom'

//this is to make sure the randomly spawned food does not land on a half tile
export default function randomPositioner(tileW = 16, tileH = 16){
    const{
        vec2,
        width,
        height,
        rand
    } = k

    const totalx = Math.floor((width()-16) / tileW)
    const totaly = Math.floor((height()-16)/ tileH)

    const x = (Math.floor(rand(2, totalx))* tileW + (tileW * 0.5))
    const y = (Math.floor(rand(2, totaly))* tileH + (tileW * 0.5)) 

    return vec2(x, y)
}