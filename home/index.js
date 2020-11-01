//$('.carousel').carousel();
// MATCH DIV JAVASCRiPT

    var dt = new Date();
    var day = dt.getDate();
    var hor = dt.getHours();

    //considering a match day on NOV 2 and NOV 3
    //the starting time is 7:30 pm
    //the team logo will change 12 hours before the game

    //console.log(day);
    //console.log(hor)

    //semi
    if (day == 5 && hor >= 5) {
        document.getElementById("team1").style.backgroundImage = "url('kkr.jpg')";
    }

    if (day == 5 && hor >= 5) {
        document.getElementById("team2").style.backgroundImage = "url('dc.png')";
    }
    
    //final
    if (day == 8 && hor >= 5) {
        document.getElementById("team1").style.backgroundImage = "url('MI.jpg')";
    }

    if (day == 8 && hor >= 5) {
        document.getElementById("team2").style.backgroundImage = "url('RCB.jpg')";
    }

    //loosers
    if (day == 31 && hor >= 5) {
        document.getElementById("team1").style.backgroundImage = "url('MI.jpg')";
    }

    if (day == 31 && hor >= 5) {
        document.getElementById("team2").style.backgroundImage = "url('RCB.jpg')";
    }
    
