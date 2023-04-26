import k from '../kaboom'

export default function link(){
    const{vec2} = k
    let bod
    let isNew = true
    const previousPosition = vec2(0,0)
    return{
        add(){
            previousPosition.x = this.pos.x
            previousPosition.y = this.pos.y
        },
        getBody(){
            return bod
        },
        setBody(c){
            bod = c
        },
        moveUpdate(x,y){
            const pos = previousPosition.clone()

            previousPosition.x = x
            previousPosition.y = y

            isNew = false

            this.pos.x = pos.x
            this.pos.y = pos.y

            if(!bod)
            {
                return
            }

            bod.moveUpdate(pos.x, pos.y)
        },
        isNew() {
            return isNew
        }
    }
}