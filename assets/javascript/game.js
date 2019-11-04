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

    var ruby = Math.floor((Math.random() * 12) + 1);
    console.log(ruby);

    $("#ruby").on("click", function() {
        totalScore = totalScore + ruby;
    });

    var sapphire = Math.floor((Math.random() * 12) + 1);
    console.log(sapphire);
    $("#sapphire").on("click", function() {
        totalScore = totalScore + sapphire;
    });


    var amethyst = Math.floor((Math.random() * 12) + 1);
    console.log(amethyst);
    $("#amethyst").on("click", function() {
        totalScore = totalScore + amethyst; 
    });


    var garnet = Math.floor((Math.random() * 12) + 1);
    console.log(garnet);
    $("#garnet").on("click", function() { 
        totalScore = totalScore + garnet;
    });

    if (totalScore === randomNumber) {
        wins++;
        randomNumber = Math.floor((Math.random() * 120) + 19);
        ruby = Math.floor((Math.random() * 12) + 1);
        sapphire = Math.floor((Math.random() * 12) + 1);
        amethyst = Math.floor((Math.random() * 12) + 1);
        garnet = Math.floor((Math.random() * 12) + 1);
        totalScore = 0;
    } else if (totalScore > randomNumber) {
        losses++;
        randomNumber = Math.floor((Math.random() * 120) + 19);
        ruby = Math.floor((Math.random() * 12) + 1);
        sapphire = Math.floor((Math.random() * 12) + 1);
        amethyst = Math.floor((Math.random() * 12) + 1);
        garnet = Math.floor((Math.random() * 12) + 1);
        totalScore = 0;
    }

    
});