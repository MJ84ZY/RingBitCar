devices.onGamepadButton(MesDpadButtonInfo._4Down, function () {
    RingbitCar.turnright()
    basic.showString("4")
})
devices.onGamepadButton(MesDpadButtonInfo._3Down, function () {
    RingbitCar.turnleft()
    basic.showString("3")
})
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Scissors)
    music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
    basic.pause(200)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(100)
    strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    basic.pause(100)
})
devices.onGamepadButton(MesDpadButtonInfo.BDown, function () {
    RingbitCar.back()
})
input.onButtonPressed(Button.A, function () {
    RingbitCar.forward()
    basic.pause(200)
    RingbitCar.brake()
})
devices.onGamepadButton(MesDpadButtonInfo._2Down, function () {
    basic.showString("2")
})
devices.onGamepadButton(MesDpadButtonInfo.DDown, function () {
    basic.showString("D")
})
devices.onGamepadButton(MesDpadButtonInfo.CDown, function () {
    RingbitCar.brake()
})
devices.onGamepadButton(MesDpadButtonInfo.ADown, function () {
    RingbitCar.forward()
})
devices.onGamepadButton(MesDpadButtonInfo._1Down, function () {
    basic.showString("1")
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showIcon(IconNames.Butterfly)
})
let strip: neopixel.Strip = null
music.setBuiltInSpeakerEnabled(true)
basic.showNumber(0)
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
strip = neopixel.create(DigitalPin.P0, 2, NeoPixelMode.RGB)
basic.forever(function () {
	
})
