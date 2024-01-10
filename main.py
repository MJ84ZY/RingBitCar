def on_gamepad_button__4_down():
    InitDirection()
    basic.show_arrow(ArrowNames.WEST)
    RingbitCar.turnright()
devices.on_gamepad_button(MesDpadButtonInfo._4_DOWN, on_gamepad_button__4_down)

def Testing():
    display.rotate_to(display.Direction.LOGO_TO_RIGHT)
    basic.show_icon(IconNames.HAPPY)

def on_gamepad_button__3_down():
    InitDirection()
    basic.show_arrow(ArrowNames.EAST)
    RingbitCar.turnleft()
devices.on_gamepad_button(MesDpadButtonInfo._3_DOWN, on_gamepad_button__3_down)

def on_bluetooth_connected():
    global bBlueConnected
    basic.show_icon(IconNames.SCISSORS)
    bBlueConnected = 1
    strip.show_color(neopixel.colors(NeoPixelColors.GREEN))
    if bSoundOn:
        music.start_melody(music.built_in_melody(Melodies.RINGTONE), MelodyOptions.ONCE)
        basic.pause(200)
bluetooth.on_bluetooth_connected(on_bluetooth_connected)

def on_bluetooth_disconnected():
    global bBlueConnected
    basic.show_icon(IconNames.SAD)
    bBlueConnected = 0
    strip.show_color(neopixel.colors(NeoPixelColors.RED))
    basic.pause(100)
bluetooth.on_bluetooth_disconnected(on_bluetooth_disconnected)

def on_button_pressed_a():
    display.rotate_to(display.Direction.UPSIDE_DOWN)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gamepad_button__2_down():
    InitDirection()
    basic.show_arrow(ArrowNames.SOUTH)
    RingbitCar.back()
devices.on_gamepad_button(MesDpadButtonInfo._2_DOWN, on_gamepad_button__2_down)

def on_gamepad_button_cdown():
    RingbitCar.brake()
devices.on_gamepad_button(MesDpadButtonInfo.CDOWN, on_gamepad_button_cdown)

def InitDirection():
    global bTop, bBottom, bLeft, bRight
    bTop = 0
    bBottom = 0
    bLeft = 0
    bRight = 0

def on_gamepad_button_adown():
    pass
devices.on_gamepad_button(MesDpadButtonInfo.ADOWN, on_gamepad_button_adown)

def Main():
    global strip
    music.set_built_in_speaker_enabled(True)
    InitInstance()
    basic.show_icon(IconNames.HAPPY)
    RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
    strip = neopixel.create(DigitalPin.P0, 2, NeoPixelMode.RGB)
    strip.show_color(neopixel.colors(NeoPixelColors.VIOLET))

def on_gamepad_button__1_down():
    InitDirection()
    basic.show_arrow(ArrowNames.SOUTH)
    RingbitCar.forward()
devices.on_gamepad_button(MesDpadButtonInfo._1_DOWN, on_gamepad_button__1_down)

def on_logo_touched():
    basic.show_icon(IconNames.BUTTERFLY)
input.on_logo_event(TouchButtonEvent.TOUCHED, on_logo_touched)

def InitInstance():
    global bBlueConnected, bSoundOn
    bBlueConnected = 0
    bSoundOn = 0
    InitDirection()
def ClearLed():
    pass
bRight = 0
bLeft = 0
bBottom = 0
bTop = 0
bSoundOn = 0
strip: neopixel.Strip = None
bBlueConnected = 0
Testing()

def on_every_interval():
    pass
loops.every_interval(500, on_every_interval)

def on_forever():
    pass
basic.forever(on_forever)
