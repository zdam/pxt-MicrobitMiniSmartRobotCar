//% color="#AA278D" weight=100
namespace bottyboy {

    let strip = neopixel.create(DigitalPin.P5, 18, NeoPixelMode.RGB)
    strip.clear()

    //% block
    export function showLeds() {
        basic.showLeds(`
            # # # # #
            # . # . #
            # # # # #
            # . # . #
            # # # # #
            `)
    }

    export function flashStrip() {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.pause(200)
        basic.pause(200)
    }


}


