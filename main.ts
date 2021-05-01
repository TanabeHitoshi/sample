let x = 0
let y = 0
basic.forever(function () {
    for (let k = 0; k <= 9; k++) {
        x = randint(0, 4)
        y = randint(0, 4)
        led.plot(x, y)
        basic.pause(1000)
    }
    basic.clearScreen()
})
