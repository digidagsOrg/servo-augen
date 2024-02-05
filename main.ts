input.onButtonPressed(Button.A, function () {
    MotorDriver.ServoTurnAngle(Servo.S0, 80)
    MotorDriver.ServoTurnAngle(Servo.S1, 100)
})
function servo_rotate (num: number, num2: number) {
    rand = randint(0, 1)
    if (rand == 1) {
        MotorDriver.ServoTurnAngle(Servo.S0, num2)
        MotorDriver.ServoTurnAngle(Servo.S1, num)
        basic.showNumber(1)
    } else {
        MotorDriver.ServoTurnAngle(Servo.S0, num)
        MotorDriver.ServoTurnAngle(Servo.S1, num2)
        basic.showNumber(0)
    }
}
let rand = 0
MotorDriver.ServoTurnAngle(Servo.S0, 80)
MotorDriver.ServoTurnAngle(Servo.S1, 100)
basic.pause(2000)
MotorDriver.ServoStop(Servo.S0)
MotorDriver.ServoStop(Servo.S1)
basic.showIcon(IconNames.SmallSquare)
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 1070) {
        basic.showIcon(IconNames.SmallHeart)
        servo_rotate(60, 120)
        basic.pause(2000)
        servo_rotate(80, 100)
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(2000)
    }
})
