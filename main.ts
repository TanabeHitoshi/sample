basic.forever(function () {
    for (let y = 0; y <= 9; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plot(x, y)
            basic.pause(1000)
        }
    }
    basic.clearScreen()
})
