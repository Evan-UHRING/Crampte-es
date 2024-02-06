function explore() {
    const outcome = Math.random();
    if (outcome < 0.5) {
        alert("You explore the area and find a hidden chest with valuable loot! You feel lucky.");
        window.location.href = "tiltedtower.html";
    } else {
        alert("As you explore, you encounter an enemy player! You engage in a battle but are defeated.");
        window.location.href = "gameover.html";
    }
}

function runAway() {
    alert("You decide to run away from Loot Lake. You're still lost in the Fortnite world.");
    window.location.href = "saltySprings.html";
}

function scamScar() {
    alert("You attempt to scam the Ultimate Noob's Scar, but he sees through your deception and attacks you! You barely escape with your life.");
    window.location.href = "gameover.html";
}

function giveShields() {
    alert("You decide to give the Ultimate Noob some Splash Shields. He's grateful and gives you some valuable information about escaping the goofiness curse.");
    window.location.href = "tomatoTown.html";
}

function ridePlane() {
    alert("You decide to ride the plane found in the tower. You soar through the skies, feeling the thrill of freedom!");
    window.location.href = "escape.html";
}

function searchBuilding() {
    alert("You choose to search the building further, but find nothing of interest. You continue your journey.");
    window.location.href = "pleasantpark.html";
}
