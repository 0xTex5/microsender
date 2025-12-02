// Base code made by Git-coder-plus

radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    basic.pause(200);
    basic.clearScreen();
})

radio.setGroup(1);
radio.setTransmitPower(1);

let clientId = 1;

basic.showNumber(clientId);
basic.pause(2000);
basic.clearScreen();

basic.forever(function () {
    radio.sendNumber(clientId);
    basic.pause(200);
})


input.onButtonPressed(Button.A, function () {

})

input.onButtonPressed(Button.B, function () {

})

input.onPinPressed(TouchPin.P1, function() {
    
})
