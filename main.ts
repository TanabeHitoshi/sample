basic.forever(function () {
    for (let x = 0; x <= 9; x++) {
        for (let y = 0; y <= 4; y++) {
            led.plot(x, y)
            basic.pause(1000)
        }
    }
    basic.clearScreen()
})
