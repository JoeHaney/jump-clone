scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (mySprite.isHittingTile(CollisionDirection.Right) || mySprite.isHittingTile(CollisionDirection.Left)) {
        mySprite.vx = mySprite.vx * -0.5
    }
    if (mySprite.isHittingTile(CollisionDirection.Bottom) && !(controller.left.isPressed() || controller.right.isPressed())) {
        mySprite.vx = 0
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (game.ask("Next level?")) {
        level += 1
        if (level == 1) {
            tiles.setCurrentTilemap(tilemap`level5`)
            tiles.placeOnRandomTile(mySprite, assets.tile`spawn block`)
        } else if (level == 2) {
            tiles.setCurrentTilemap(tilemap`level0`)
            tiles.placeOnRandomTile(mySprite, assets.tile`spawn block`)
        } else if (level == 3) {
            game.over(false)
        }
    } else if (game.ask("Reset?")) {
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
        tiles.setCurrentTilemap(tilemap`level14`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn block`)
    } else {
        game.over(true)
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
function Mod_Jump (num: number) {
    if (controller.up.isPressed()) {
        mySprite.vy += num * -1.1
    } else if (controller.down.isPressed()) {
        mySprite.vy += num * -0.9
    } else {
        mySprite.vy += num * -1
    }
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
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vx = 100
    }
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        if (Modular_Jump) {
            Mod_Jump(jump_power)
        } else {
            jump(jump_power)
        }
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
let Modular_Jump = false
let level = 0
let jump_power = 0
jump_power = 0
level = 0
scene.setBackgroundColor(15)
tiles.setCurrentTilemap(tilemap`level3`)
if (game.ask("Do you want to enable", "Control Mode?")) {
    Modular_Jump = true
}
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
game.onUpdateInterval(10, function () {
    if (controller.A.isPressed()) {
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
        if (jump_power < 165) {
            jump_power += 5
        }
    }
})
