$(document).ready(function () {
    // variables
    var goalNum; //number that user aims for, also displayed
    var userNum = 0; //users number thats displayed on the screen
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

    var resetDisplay = function() {
        var tempScore = $("#score").text();
        tempScore = parseInt(tempScore);
        tempScore += userNum;
        $("#score").text(tempScore);
    }

    //======click functions======
    $("#gem1").click(function() {
        userNum += gem1;
        resetDisplay();
        console.log(gem1);
    });

    $("#gem2").click(function() {
        userNum += gem2;
        resetDisplay();
        console.log(gem2);
    });

    $("#gem3").click(function() {
        userNum += gem3;
        resetDisplay();
        console.log(gem3);
    });

    $("#gem4").click(function() {
        userNum += gem4;
        resetDisplay();
        console.log(gem4);
    });
    
    
    //======click function end======
    
    //display current goalNum onto the screen
    var initializeDisplay = function () {
        var goalText = $("#goal").text();
        var scoreText = 0;
        goalText += goalNum;
        scoreText += parseInt(userNum);
        $("#goal").text(goalText);
        $("#score").text(scoreText);
    } // seems to work

    var initGame = function() {
        assignNums();
        initializeDisplay();
    }
    //======play======
    var play = function () {
        initGame();
        console
    }

    play();
});