scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (mySprite.isHittingTile(CollisionDirection.Right) || mySprite.isHittingTile(CollisionDirection.Left)) {
        mySprite.vx = mySprite.vx * -0.5
    }
    if (mySprite.isHittingTile(CollisionDirection.Bottom) && !(controller.left.isPressed() || controller.right.isPressed())) {
        mySprite.vx = 0
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    // True to speedRun, false to play normally
    if (!(true)) {
        tiles.placeOnTile(mySprite, spawnPoint)
    } else {
        game.reset()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    level += 1
    if (game.ask("Next Level") && level == 1) {
        tiles.setCurrentTilemap(tilemap`level5`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn block`)
        spawnPoint = mySprite.tilemapLocation()
    } else if (level == 2) {
        tiles.setCurrentTilemap(tilemap`level0`)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn block`)
        spawnPoint = mySprite.tilemapLocation()
    } else if (level == 3) {
        tiles.setCurrentTilemap(tilemap`level14`)
        info.startCountdown(30)
        tiles.placeOnRandomTile(mySprite, assets.tile`spawn block`)
        spawnPoint = mySprite.tilemapLocation()
    } else {
        game.over(true)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vx = -100
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    if (spawnPoint.row < row) {
        tiles.placeOnTile(mySprite, spawnPoint)
    } else {
        game.over(false)
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`flag`, function (sprite, location) {
    spawnPoint = location
})
info.onCountdownEnd(function () {
    coulumn = 0
    row += -1
    for (let index = 0; index < 12; index++) {
        tiles.setTileAt(tiles.getTileLocation(coulumn, row), assets.tile`myTile9`)
        tiles.setWallAt(tiles.getTileLocation(coulumn, row), false)
        coulumn += 1
    }
    info.startCountdown(10)
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
            . 5 f f f f f f f 9 9 f f f 5 . 
            . 5 f f f 9 9 f f f f f f f 5 . 
            . 5 9 9 f f f f f f f f 9 9 5 . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . . d d d . . . . . . d d d . . 
            . . d d d . . . . . . d d d . . 
            . . d d d . . . . . . d d d . . 
            . d d d d . . . . . . d d d d . 
            `)
        jump_power = 0
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    level = 3
    tiles.setCurrentTilemap(tilemap`level14`)
    info.startCountdown(30)
    tiles.placeOnRandomTile(mySprite, assets.tile`spawn block`)
    spawnPoint = mySprite.tilemapLocation()
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
        . 5 f f f f f f f 9 9 f f f 5 . 
        . 5 f f f 9 9 f f f f f f f 5 . 
        . 5 9 9 f f f f f f f f 9 9 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . d d d . . . . . . d d d . . 
        . . d d d . . . . . . d d d . . 
        . . d d d . . . . . . d d d . . 
        . d d d d . . . . . . d d d d . 
        `)
}
let coulumn = 0
let spawnPoint: tiles.Location = null
let row = 0
let mySprite: Sprite = null
let level = 0
let jump_power = 0
jump_power = 0
level = 0
scene.setBackgroundColor(15)
tiles.setCurrentTilemap(tilemap`level3`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 . . . . . . . . . . 
    . . . . 5 5 . . . . . 5 5 . . . 
    . . . . 5 5 . . . . . 5 5 . . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 f f f f f f f f f f f f 5 . 
    . 5 f f f f f f f 9 9 f f f 5 . 
    . 5 f f f 9 9 f f f f f f f 5 . 
    . 5 9 9 f f f f f f f f 9 9 5 . 
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
row = 255
spawnPoint = mySprite.tilemapLocation()
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
            . 5 f f f f f f f 9 9 f f f 5 . 
            . 5 f f f 9 9 f f f f f f f 5 . 
            . 5 9 9 f f f f f f f f 9 9 5 . 
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
game.onUpdateInterval(100, function () {
    info.changeScoreBy(1)
})
