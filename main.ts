/**
 * test to send
 */
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_C_DOWN, function () {
    robotbit.MotorRun(robotbit.Motors.M1A, 32)
    basic.pause(1000)
    robotbit.MotorStop(robotbit.Motors.M1A)
    robotbit.MotorRun(robotbit.Motors.M1A, -31)
    basic.pause(2000)
    robotbit.MotorStop(robotbit.Motors.M1A)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_D_DOWN, function () {
    robotbit.Servo(robotbit.Servos.S8, 0)
    basic.pause(500)
    robotbit.Servo(robotbit.Servos.S8, 90)
    basic.pause(500)
    robotbit.Servo(robotbit.Servos.S8, 0)
    basic.pause(1000)
    robotbit.Servo(robotbit.Servos.S8, 180)
    basic.pause(100)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_B_DOWN, function () {
    robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Red))
    robotbit.rgb().show()
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_A_DOWN, function () {
    robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Green))
    robotbit.rgb().show()
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_2_DOWN, function () {
    strip.showRainbow(1, 360)
    for (let index = 0; index < 128; index++) {
        strip.rotate(1)
        strip.show()
        basic.pause(32)
    }
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_1_DOWN, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(100)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
})
let strip: neopixel.Strip = null
basic.showIcon(IconNames.Cow)
robotbit.MotorStopAll()
strip = neopixel.create(DigitalPin.P2, 64, NeoPixelMode.RGB)
strip.setMatrixWidth(8, 0, 0)
strip.setBrightness(32)
strip.clear()
strip.show()
robotbit.rgb().clear()
robotbit.rgb().show()
