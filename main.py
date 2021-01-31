def on_button_pressed_a():
    OLED.clear()
    OLED.write_string_new_line("ahoj MATO")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    OLED.new_line()
    OLED.write_string("Teplota: ")
    OLED.write_num(input.temperature())
    OLED.new_line()
    OLED.write_string("Osvetlenie: ")
    OLED.write_num(input.light_level())
input.on_button_pressed(Button.B, on_button_pressed_b)

OLED.init(128, 64)

def on_forever():
    pass
basic.forever(on_forever)
