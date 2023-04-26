import k from '../kaboom'

export default function movement() {
  const { vec2, dt } = k
  const direction = vec2(0, 0)
  const speed = 16
  let accumTime = 0

  return {
    update() {
      accumTime += dt()
      if (accumTime < 0.1) {
        return
      }

      accumTime = 0

      if (!this.pos) {
        console.error('missing pos component')
        return
      }

      this.pos.x += direction.x * speed
      this.pos.y += direction.y * speed

      const body = this.getBody()
      if(!body){
          return
      }

      body.moveUpdate(this.pos.x, this.pos.y)
    },
    movement: {
      left() {
        if(direction.x != 1){
          direction.x = -1
          direction.y = 0
        }
      },
      right() {
        if(direction.x != -1){
          direction.x = 1
          direction.y = 0
        }
      },
      up() {
        if(direction.y != 1){
          direction.x = 0
          direction.y = -1
        }
      },
      down() {
        if(direction.y != -1){
          direction.x = 0
          direction.y = 1
        }
      },
    },
  }
}
