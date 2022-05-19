tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 . . . . . . . . . . 
    . . . . 5 5 . . . . . 5 5 . . . 
    . . . . 5 5 . . . . . 5 5 . . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 f f f f f f f f f f f f 5 . 
    . 5 f f f f f f f 2 2 f f f 5 . 
    . 5 f f f 2 2 f f f f f f f 5 . 
    . 5 2 2 f f f f f f f f 2 2 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . . d d d . . . . . . d d d . . 
    . . d d d . . . . . . d d d . . 
    . . d d d . . . . . . d d d . . 
    . d d d d . . . . . . d d d d . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
