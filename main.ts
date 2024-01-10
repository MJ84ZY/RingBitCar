devices.onGamepadButton(MesDpadButtonInfo._4Down, function () {
    InitDirection()
    basic.showArrow(ArrowNames.West)
    RingbitCar.turnright()
})
function Testing () {
    display.rotateTo(display.Direction.LogoToRight)
    basic.showIcon(IconNames.Happy)
}
devices.onGamepadButton(MesDpadButtonInfo._3Down, function () {
    InitDirection()
    basic.showArrow(ArrowNames.East)
    RingbitCar.turnleft()
})
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Scissors)
    bBlueConnected = 1
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    if (bSoundOn) {
        music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
        basic.pause(200)
    }
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
    bBlueConnected = 0
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(100)
})
input.onButtonPressed(Button.A, function () {
    display.rotateTo(display.Direction.UpsideDown)
})
devices.onGamepadButton(MesDpadButtonInfo._2Down, function () {
    InitDirection()
    basic.showArrow(ArrowNames.South)
    RingbitCar.back()
})
devices.onGamepadButton(MesDpadButtonInfo.CDown, function () {
    RingbitCar.brake()
})
function InitDirection () {
    bTop = 0
    bBottom = 0
    bLeft = 0
    bRight = 0
}
devices.onGamepadButton(MesDpadButtonInfo.ADown, function () {
	
})
function Main () {
    music.setBuiltInSpeakerEnabled(true)
    InitInstance()
    basic.showIcon(IconNames.Happy)
    RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
    strip = neopixel.create(DigitalPin.P0, 2, NeoPixelMode.RGB)
    strip.showColor(neopixel.colors(NeoPixelColors.Violet))
}
devices.onGamepadButton(MesDpadButtonInfo._1Down, function () {
    InitDirection()
    basic.showArrow(ArrowNames.South)
    RingbitCar.forward()
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showIcon(IconNames.Butterfly)
})
function InitInstance () {
    bBlueConnected = 0
    bSoundOn = 0
    InitDirection()
}
function ClearLed () {
	
}
let bRight = 0
let bLeft = 0
let bBottom = 0
let bTop = 0
let bSoundOn = 0
let strip: neopixel.Strip = null
let bBlueConnected = 0
Testing()
loops.everyInterval(500, function () {
	
})
basic.forever(function () {
	
})
