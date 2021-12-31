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
bluetooth.setTransmitPower(7)
strip = neopixel.create(DigitalPin.P2, 64, NeoPixelMode.RGB)
strip.setMatrixWidth(8, 0, 0)
strip.setBrightness(32)
strip.clear()
strip.show()
robotbit.rgb().clear()
robotbit.rgb().show()
basic.forever(function () {
	
})
