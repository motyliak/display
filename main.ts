input.onButtonPressed(Button.A, function () {
    OLED.clear()
    OLED.writeStringNewLine("ahoj MATO")
})
input.onButtonPressed(Button.B, function () {
    OLED.newLine()
    OLED.writeString("Teplota: ")
    OLED.writeNum(input.temperature())
    OLED.newLine()
    OLED.writeString("Osvetlenie: ")
    OLED.writeNum(input.lightLevel())
})
OLED.init(128, 64)
basic.forever(function () {
	
})
