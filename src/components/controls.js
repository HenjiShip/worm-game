import k from '../kaboom'

export default function controls(){
    const{ keyPress, mouseDown } = k
    return{
        add(){
            keyPress('left', () => {
                this.movement.left()
            })

            keyPress('right', () => {
                this.movement.right()
            })

            keyPress('up', () => {
                this.movement.up()
            })

            keyPress('down', () => {
                this.movement.down()
            })
        }
    }
}