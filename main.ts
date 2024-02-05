input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    MotorDriver.ServoTurnAngle(Servo.S0, 90)
    MotorDriver.ServoTurnAngle(Servo.S1, 90)
    basic.pause(2000)
    MotorDriver.ServoStop(Servo.S0)
    MotorDriver.ServoStop(Servo.S1)
})
function servo_rotate (num: number, num2: number) {
    rand = randint(0, 1)
    if (rand == 1) {
        MotorDriver.ServoTurnAngle(Servo.S0, num2)
        MotorDriver.ServoTurnAngle(Servo.S1, num)
    } else {
        MotorDriver.ServoTurnAngle(Servo.S0, num)
        MotorDriver.ServoTurnAngle(Servo.S1, num2)
    }
}
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        # . . . #
        # . . . #
        . # # # .
        . . . . .
        `)
    MotorDriver.ServoTurnAngle(Servo.S0, 0)
    MotorDriver.ServoTurnAngle(Servo.S1, 0)
    basic.pause(2000)
    MotorDriver.ServoStop(Servo.S0)
    MotorDriver.ServoStop(Servo.S1)
})
let rand = 0
MotorDriver.ServoTurnAngle(Servo.S0, 90)
MotorDriver.ServoTurnAngle(Servo.S1, 90)
basic.pause(2000)
MotorDriver.ServoStop(Servo.S0)
MotorDriver.ServoStop(Servo.S1)
basic.showIcon(IconNames.SmallSquare)
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 1070) {
        basic.showIcon(IconNames.SmallHeart)
        servo_rotate(50, 130)
        basic.pause(2000)
        servo_rotate(90, 90)
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(2000)
    }
})
