// variable Declare start
let g_bLogoTouch = false
let g_bRight = false
let g_bLeft = false
let g_bBottom = false
let g_bTop = false
let g_bSoundOn = false
let g_bBlueConnected = false

let g_strip: neopixel.Strip = null
// variable Declare end

// function Declare start
function InitVariable()
{   InitDirection()

    g_bBlueConnected = false
    g_bSoundOn = false
    g_bLogoTouch = false
}

function InitDirection() 
{
    g_bTop = false
    g_bBottom = false
    g_bLeft = false
    g_bRight = false
}

function InitInstance() 
{
    InitVariable()
}

function InitRingBitCar()
{

}

function InitMusic()
{

}

function Main() 
{
    music.setBuiltInSpeakerEnabled(true)
    InitInstance()
    basic.showIcon(IconNames.Happy)
    RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
    g_strip = neopixel.create(DigitalPin.P0, 2, NeoPixelMode.RGB)
    g_strip.showColor(neopixel.colors(NeoPixelColors.Violet))
}

function Testing() 
{
    
}

// function Declare end

// controller function start
devices.onGamepadButton(MesDpadButtonInfo._1Down, function () 
{
    InitDirection()
    basic.showArrow(ArrowNames.South)
    RingbitCar.forward()
})

devices.onGamepadButton(MesDpadButtonInfo._2Down, function () 
{
    InitDirection()
    basic.showArrow(ArrowNames.South)
    RingbitCar.back()
})

devices.onGamepadButton(MesDpadButtonInfo._3Down, function ()
{
    InitDirection()
    basic.showArrow(ArrowNames.East)
    RingbitCar.turnleft()
})

devices.onGamepadButton(MesDpadButtonInfo._4Down, function () 
{
    InitDirection()
    basic.showArrow(ArrowNames.West)
    RingbitCar.turnright()
})

devices.onGamepadButton(MesDpadButtonInfo.ADown, function () 
{

})

devices.onGamepadButton(MesDpadButtonInfo.BDown, function () 
{

})

devices.onGamepadButton(MesDpadButtonInfo.CDown, function () 
{
    RingbitCar.brake()
})

devices.onGamepadButton(MesDpadButtonInfo.DDown, function ()
{

})
// controller function end

// bluetooth connection start
bluetooth.onBluetoothConnected(function () 
{
    basic.showIcon(IconNames.Scissors)
    g_bBlueConnected = true
    g_strip.showColor(neopixel.colors(NeoPixelColors.Green))
    if (g_bSoundOn) {
        music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
        basic.pause(200)
    }
})

bluetooth.onBluetoothDisconnected(function () 
{
    basic.showIcon(IconNames.Sad)
    g_bBlueConnected = false
    g_strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(100)
})
// bluetooth connection end

// Sensor input start
input.onButtonPressed(Button.A, function () 
{
    music.setVolume(288)
    billy.say("hello 123")
    display.rotateTo(display.Direction.UpsideDown)
})

input.onButtonPressed(Button.B, function () 
{
	
})

input.onGesture(Gesture.Shake, function () 
{
    music.play(music.createSoundExpression(WaveShape.Square, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})

input.onLogoEvent(TouchButtonEvent.Touched, function () 
{
    g_bLogoTouch = !(g_bLogoTouch)
    basic.showIcon(IconNames.Butterfly)
})
// Sensor input end

// Loop start
loops.everyInterval(500, function () 
{

})

basic.forever(function () 
{

})
// Loop End

/// Main Logic
//Testing()
Main()

