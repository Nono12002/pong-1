input.onButtonPressed(Button.A, function () {
    if (PaddleA.get(LedSpriteProperty.X) > 0) {
        PaddleA.change(LedSpriteProperty.X, -1)
        PaddleB.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (PaddleA.get(LedSpriteProperty.X) < 3) {
        PaddleA.change(LedSpriteProperty.X, 1)
        PaddleB.change(LedSpriteProperty.X, 1)
    }
})
let half = 0
let PaddleB: game.LedSprite = null
let PaddleA: game.LedSprite = null
PaddleA = game.createSprite(2, 4)
PaddleB = game.createSprite(3, 4)
let Ball = game.createSprite(randint(0, 4), 0)
let DirectionY = 1
let DirectionX = randint(-1, 1)
if (game.score() > 9) {
    if (game.score() > 14) {
        basic.pause(200)
    } else {
        basic.pause(400)
    }
} else {
    basic.pause(500)
}
basic.forever(function () {
    if (half == 0) {
        if (game.score() == 5) {
            game.pause()
            basic.showNumber(game.score())
            basic.pause(500)
            game.resume()
            half = 1
        }
    }
    if (half == 1) {
        if (game.score() == 10) {
            game.pause()
            basic.showNumber(game.score())
            basic.pause(500)
            game.resume()
            half = 2
        }
    }
    if (half == 2) {
        if (game.score() == 15) {
            game.pause()
            basic.showNumber(game.score())
            basic.pause(500)
            game.resume()
            half = 3
        }
    }
    if (game.score() == 20) {
        game.gameOver()
    }
    Ball.change(LedSpriteProperty.X, DirectionX)
    Ball.change(LedSpriteProperty.Y, DirectionY)
    if (Ball.isTouching(PaddleA) || Ball.isTouching(PaddleB)) {
        Ball.change(LedSpriteProperty.X, DirectionX * -1)
        Ball.change(LedSpriteProperty.Y, -1)
        DirectionY = -1
        DirectionX = randint(-1, 1)
        game.addScore(1)
    } else {
        if (Ball.get(LedSpriteProperty.Y) <= 0) {
            DirectionY = 1
            DirectionX = randint(-1, 1)
        } else if (Ball.get(LedSpriteProperty.Y) >= 4) {
            Ball.set(LedSpriteProperty.Blink, 1)
            basic.pause(2000)
            game.gameOver()
        }
        if (Ball.get(LedSpriteProperty.X) <= 0) {
            DirectionX = 1
        } else if (Ball.get(LedSpriteProperty.X) >= 4) {
            DirectionX = -1
        }
        if (game.score() > 9) {
            if (game.score() > 14) {
                basic.pause(200)
            } else {
                basic.pause(400)
            }
        } else {
            basic.pause(500)
        }
    }
})
