let x = 0
basic.forever(function () {
    x = 0
    for (let y = 0; y <= 4; y++) {
        led.plot(x, y)
        basic.pause(1000)
        x += 1
    }
    x = 4
    for (let y = 0; y <= 4; y++) {
        led.plot(x, y)
        basic.pause(1000)
        x = x - 1
    }
    basic.clearScreen()
})
