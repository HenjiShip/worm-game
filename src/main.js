import k from './kaboom'

import MainMenu from './scenes/MainMenu'
import Snake from './scenes/Snake'
import GameOver from './scenes/GameOver'
import Instructions from './scenes/Instructions'
// import swipe from './components/swipe'

// swipe()

k.loadSprite('breadWalls', './assets/breadWalls.png')
k.loadSprite('bodyOrange', './assets/bodyOrange.png')
k.loadSprite('bodyBeige', './assets/bodyBeige.png')
k.loadSprite('slimey', './assets/slimey.png')
k.loadSprite('cookie', './assets/cookie.png')

k.scene('main-menu', MainMenu)
k.scene('instructions', Instructions)
k.scene('snake', Snake)
k.scene('game-over', GameOver)

k.start('snake')
