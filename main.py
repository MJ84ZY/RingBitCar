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
    basic.pause(200)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
    basic.pause(200)
})
devices.onGamepadButton(MesDpadButtonInfo.BDown, function () {
    basic.showString("B")
    RingbitCar.back()
})
input.onButtonPressed(Button.A, function () {
    RingbitCar.forward()
    basic.pause(5000)
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
    basic.showString("C")
})
devices.onGamepadButton(MesDpadButtonInfo.ADown, function () {
    basic.showString("A")
    RingbitCar.forward()
})
devices.onGamepadButton(MesDpadButtonInfo._1Down, function () {
    basic.showString("1")
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showIcon(IconNames.Butterfly)
})
basic.showNumber(0)
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
let strip = neopixel.create(DigitalPin.P0, 2, NeoPixelMode.RGB)
basic.forever(function () {
    basic.showNumber(6)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(100)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(100)
})
