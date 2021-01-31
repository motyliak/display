input.onButtonPressed(Button.A, function on_button_pressed_a() {
    OLED.clear()
    OLED.writeStringNewLine("ahoj MATO")
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    OLED.newLine()
    OLED.writeString("Teplota: ")
    OLED.writeNum(input.temperature())
    OLED.newLine()
    OLED.writeString("Osvetlenie: ")
    OLED.writeNum(input.lightLevel())
})
OLED.init(128, 64)
basic.forever(function on_forever() {
    
})
