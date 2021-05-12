input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
})
input.onButtonPressed(Button.AB, function () {
    music.stopAllSounds()
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
})
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
})
