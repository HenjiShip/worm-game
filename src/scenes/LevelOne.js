import k from '../kaboom'

const LevelOne = [
  '===============================',
  '=                             =',
  '=                             =',
  '=                             =',
  '=                             =',
  '=                             =',
  '=                             =',
  '=                             =',
  '=                             =',
  '=                             =',
  '=                             =',
  '=                             =',
  '=                             =',
  '=                             =',
  '=                             =',
  '=                             =',
  '===============================',
]

const characters = {
    'a': {
        sprite: 'cookie'
    }
}

export default function Level() {
  k.addLevel(LevelOne, {
    width: 16.7,
    height: 20.2,
    pos: k.vec2(6, 6),
    '=': [
        k.sprite('breadWalls'),
        k.origin('center'),
        k.scale(1),
        'wall'
    ],

    any(ch) {
        if (characters[ch]) {
            return [
                k.sprite('cookie'),
                k.solid(),
                "character",
                {
                    msg: characters[ch],
                },
            ];
        }
    }
  })
}
