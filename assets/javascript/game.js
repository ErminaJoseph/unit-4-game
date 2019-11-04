$(document).ready(function() { 
    var randomNumber = Math.floor((Math.random() * 120) + 19);
    $("#random-number").text(randomNumber);
    console.log(randomNumber);
    
    var wins = 0;
    $("#wins").text("Wins: " + wins);

    var losses = 0;
    $("#losses").text("Losses: " + losses);

    var totalScore = 0;
    $("#total-score").text(totalScore);


});