input.onButtonPressed(Button.A, function () {
    OLED.clear()
    OLED.writeStringNewLine("ahoj MUMAK")
    OLED.drawRectangle(
    0,
    20,
    40,
    40
    )
})
input.onButtonPressed(Button.B, function () {
    OLED.clear()
    OLED.newLine()
    OLED.writeString("Teplota: ")
    OLED.writeNum(input.temperature())
    OLED.newLine()
    OLED.writeString("Osvetlenie: ")
    OLED.writeNum(input.lightLevel())
    OLED.newLine()
    OLED.writeString("Kompas:")
    OLED.writeNum(input.compassHeading())
})
OLED.init(128, 64)
for (let index = 0; index <= 100; index++) {
    OLED.drawLoading(index)
}
for (let index = 0; index <= 3; index++) {
    OLED.newLine()
}
OLED.writeStringNewLine("Stlac A alebo B")
basic.forever(function () {
	
})
