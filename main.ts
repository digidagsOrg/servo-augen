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
MotorDriver.ServoTurnAngle(Servo.S0, 0)
MotorDriver.ServoTurnAngle(Servo.S1, 0)
