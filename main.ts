input.onButtonPressed(Button.A, function () {
    OLED.clear()
    OLED.writeStringNewLine("ahoj MUMAK")
})
input.onButtonPressed(Button.B, function () {
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
basic.forever(function () {
	
})
