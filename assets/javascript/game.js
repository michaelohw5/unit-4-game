$(document).ready(function () {
    // variables
    var goalNum; //number that user aims for, also displayed
    var userNum = 0; //users number thats displayed on the screen
    var numWin = 0;
    var numLose = 0;
    var scoreElem = $("#score");
    var goalElem = $("#goal");
    var winElem = $("#wins");
    var loseElem = $("#losses");
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

    var resetDisplay = function(score) {
        scoreElem.text(score);
        winElem.text(numWin);
        loseElem.text(numLose);
    }

    var scoreChecker = function() {
        if(userNum > goalNum) {
            numLose++;
            alert("YOU LOSE");
            initGame();
        }
        else if (userNum === goalNum) {
            numWin++;   
            alert("YOU WIN");
            initGame();
        }
    }

    //======click functions======
    $("#gem1").click(function() {
        console.log(gem1);
        userNum += gem1;
        resetDisplay(userNum);
        scoreChecker();
    });

    $("#gem2").click(function() {
        console.log(gem2);
        userNum += gem2;
        resetDisplay(userNum);
        scoreChecker();
    });

    $("#gem3").click(function() {
        console.log(gem3);
        userNum += gem3;
        resetDisplay(userNum);
        scoreChecker();
    });

    $("#gem4").click(function() {
        console.log(gem4);
        userNum += gem4;
        resetDisplay(userNum);
        scoreChecker();
    });
    
    
    //======click function end======
    
    //display current goalNum onto the screen
    var initializeDisplay = function () {
        var goalText = 0;
        var scoreText = 0;
        userNum = 0;
        goalText += goalNum;
        scoreText += userNum;
        winElem.text(numWin);
        loseElem.text(numLose);
        goalElem.text(goalText);
        scoreElem.text(scoreText);
    } // seems to work

    var initGame = function() {
        assignNums();
        initializeDisplay();
    }
    //======play======
    var play = function () {
        initGame();
    }

    play();
});