function tester () {
    basic.showLeds(`
        # # # # #
        # . # . #
        # # # # #
        # . # . #
        # # # # #
        `)
}
tester()
let strip = neopixel.create(DigitalPin.P5, 18, NeoPixelMode.RGB)
strip.clear()
basic.forever(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(200)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(200)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(200)
})
