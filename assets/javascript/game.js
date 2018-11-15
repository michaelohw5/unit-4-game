$(document).ready(function () {
    // variables
    var goalNum; //number that user aims for, also displayed
    var userNum; //users number thats displayed on the screen
    var gem1; //first gem
    var gem2; //2nd gem
    var gem3; //3rd gem
    var gem4; //4th gem

    //rand number generator
    var randNumGen = function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
    } //works cuz copy pasta

    // assign random numbers to goalNum, and all gems
    var assignNums = function () {
        goalNum = randNumGen(19, 120);
        gem1 = randNumGen(1, 12);
        gem2 = randNumGen(1, 12);
        gem3 = randNumGen(1, 12);
        gem4 = randNumGen(1, 12);
    } // works 11.15 10am

    var displayGoal = function () {

    }


    //play
    var play = function () {
        assignNums();
    }

    play();
});