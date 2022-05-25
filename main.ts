scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (mySprite.isHittingTile(CollisionDirection.Right) || mySprite.isHittingTile(CollisionDirection.Left)) {
        mySprite.vx = mySprite.vx * -0.5
    }
    if (mySprite.isHittingTile(CollisionDirection.Bottom) && !(controller.left.isPressed() || controller.right.isPressed())) {
        mySprite.vx = 0
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (game.ask("Reset?")) {
        game.reset()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    level += 1
    if (game.ask("Next Level") && level == 1) {
        tiles.setCurrentTilemap(tilemap`level5`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn block`)
    } else if (level == 2) {
        tiles.setCurrentTilemap(tilemap`level0`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn block`)
    } else if (level == 3) {
        game.over(true)
    } else {
    	
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vx = -100
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vx = 0
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vx = 0
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vx = 100
    }
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        jump(jump_power)
    } else {
        mySprite.setImage(img`
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
            `)
        jump_power = 0
    }
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 . . . . . . . . . . 
        . . . 5 5 5 5 . . . . 5 5 . . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 f f f f f f f f f f f f 5 . 
        . 5 f f f f f f f 2 2 f f f 5 . 
        . 5 f f f 2 2 f f f f f f f 5 . 
        . 5 2 2 f f f f f f f f 2 2 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . d d d d d . . . . d d d d d . 
        . d d d d d . . . . d d d d d . 
        d d d d d . . . . . . d d d d d 
        `)
    if (jump_power < 160) {
        jump_power += 7.5
    }
})
function jump (num: number) {
    mySprite.vy += num * -1
    jump_power = 0
    mySprite.setImage(img`
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
        `)
}
let mySprite: Sprite = null
let level = 0
let jump_power = 0
jump_power = 0
level = 0
tiles.setCurrentTilemap(tilemap`level3`)
scene.setBackgroundColor(15)
mySprite = sprites.create(img`
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
tiles.placeOnRandomTile(mySprite, assets.tile`spawn block`)
mySprite.ay = 200
scene.cameraFollowSprite(mySprite)
info.setScore(0)
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(1)
})
