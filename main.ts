controller.down.onEvent(ControllerButtonEvent.Released, function () {
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
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom) && !(0 < jump_power)) {
        mySprite.vx = -100
        left = true
    } else if (0 < jump_power) {
        mySprite.vx = 0
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vx = 0
        right = false
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vx = 0
        left = false
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom) && !(0 < jump_power)) {
        mySprite.vx = 100
        right = true
    } else if (0 < jump_power) {
        mySprite.vx = 0
    }
})
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
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
    mySprite.vx += num * (0.5 * jumpDirection(right, left))
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
function jumpDirection (bool: boolean, bool2: boolean) {
    if (bool && bool2) {
        return 0
    } else if (bool) {
        return -1
    } else {
        return -1
    }
}
let right = false
let left = false
let mySprite: Sprite = null
let jump_power = 0
jump_power = 0
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
tiles.placeOnTile(mySprite, tiles.getTileLocation(11, 98))
mySprite.ay = 200
scene.cameraFollowSprite(mySprite)
