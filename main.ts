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
    bBlueConnected = true
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    if (bSoundOn) {
        music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
        basic.pause(200)
    }
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
    bBlueConnected = false
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
    bTop = false
    bBottom = false
    bLeft = false
    bRight = false
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
    bLogoTouch = !(bLogoTouch)
    basic.showIcon(IconNames.Butterfly)
})
function InitInstance () {
    bBlueConnected = false
    bSoundOn = false
    bLogoTouch = false
    InitDirection()
}
function ClearLed () {
	
}
let bLogoTouch = false
let bRight = false
let bLeft = false
let bBottom = false
let bTop = false
let bSoundOn = false
let strip: neopixel.Strip = null
let bBlueConnected = false
Testing()
loops.everyInterval(500, function () {
	
})
basic.forever(function () {
	
})
