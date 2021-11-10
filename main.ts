input.onButtonPressed(Button.AB, function () {
    music.stopMelody(MelodyStopOptions.All)
    control.reset()
})
basic.showString("Sensor de Luz")
basic.forever(function () {
    if (input.lightLevel() >= 100) {
        music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
        basic.showIcon(IconNames.Happy)
    } else {
        music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
        basic.showIcon(IconNames.Sad)
    }
})

