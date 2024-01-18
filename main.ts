// Remark Important Record Time
// 2024-Jan-18 12:35

// 1. How to reset - only have soft reset, 
// won't clear any stored data or configurations made during the program execution.
// 2. How to check lighting neopixel working or not - code added TestNeopixel
// 3. bluetooth connection  problem 989 /988

// constant declare start
const BIT_TOP = 0
const BIT_BOTTOM = 1
const BIT_LEFT = 2
const BIT_RIGHT = 3
// constant declare end

// led pattern start
let ledSingle = `
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
`;

// led pattern end

// variable Declare start
let g_nCurrentDirection = -1
let g_bDirection = [false, false, false, false]

let g_bLogoTouch = false
let g_bSoundOn = false
let g_bBlueConnected = false

let g_strip: neopixel.Strip = null
// variable Declare end

// function Declare start
function InitVariable()
{  
    g_bBlueConnected = false
    g_bSoundOn = false
    g_bLogoTouch = false
}

function InitDirection() 
{
    g_nCurrentDirection=-1
    for (let i = 0; i < 4; i++) 
       g_bDirection[i]=false
}

function SetCurrentDirection(nDirection:number)
{   
    g_nCurrentDirection=nDirection
    for(let i=0; i<4; i++)
        g_bDirection[i] = (i == nDirection) ? true : false
}

function InitInstance() 
{
    InitVariable()
    InitDirection()
    InitMusic()
    InitTextToSpeech()
    InitRingBitCar()
}

function InitRingBitCar()
{
    RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
    g_strip = neopixel.create(DigitalPin.P0, 2, NeoPixelMode.RGB)
    g_strip.showColor(neopixel.colors(NeoPixelColors.Violet))
}

function InitMusic()
{
    // this line needed ? 
    music.setBuiltInSpeakerEnabled(true)
    
    music.setVolume(170)
}

function InitTextToSpeech()
{
    billy.configureVoice(72, 128, 128, 128)
    billy.voicePreset(BillyVoicePreset.LittleRobot)
}

function Reset()
{
    control.reset()
}

function Main() 
{
    InitInstance()
    basic.showIcon(IconNames.Happy)
}

function Menu()
{
    while(1)
    {   
        if(input.buttonIsPressed(Button.A))
        {
        }
        else if(input.buttonIsPressed(Button.B))
        {
        }
        else if(input.buttonIsPressed(Button.AB))
        {
        }
    }
}

function TestFileSystem()
{
    

}

function Testing() 
{
    
    faces.wink(true)
}

function TestNeopixel() {
    g_strip.showColor(neopixel.colors(NeoPixelColors.Blue));
    basic.pause(1000);  // Pause for 1 second
    g_strip.clear();    //  turns off all Neopixels
    g_strip.show();     // display the clear state
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
    billy.say("hello world")
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
    //TestNeopixel()
    //Main()
    //Reset()
    Testing()
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

