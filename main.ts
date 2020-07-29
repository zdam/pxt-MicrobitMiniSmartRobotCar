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

    //% block
    export function flashStrip() {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.pause(200)
        basic.pause(200)
    }

    //% block
    export function emptyTemplate() {
        
    }

    //% block
    export function newOne() {
        basic.showLeds(`
            # . . . #
            # . . . #
            # # # # #
            # . # . #
            # # # # #
            `)    
    }
    

    //% block
    export function moveForward() {
        PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, 67)
        PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 100, 67)
        PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, 67)
        PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 100, 67)
    }

    //% block
    export function moveBackwards() {
        PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 100, 67)
        PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 50, 67)
        PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 100, 67)
        PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 50, 67)
    }    

    //% block
    export function stopMoving() {
        PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, 67)
        PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 0, 67)
        PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, 67)
        PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 0, 67)        
    }    

    //% block
    export function turnLeft() {
        PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, 67)
        PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 50, 67)
        PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, 67)
        PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 100, 67)        
    }

    //% block
    export function turnRight() {
        PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, 0, 67)
        PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, 100, 67)
        PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, 67)
        PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 50, 67)        
    }    

}


