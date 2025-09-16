// Accessing the duck by its ID and logging it to the console
let duck = document.getElementById("duck");
console.log(duck);
// testing if the mouse hovers over the duck
duck.addEventListener("mouseover", function() {
    console.log("The mouse is over the duck!");
    // show an alert when the duck is hovered over
    alert("There's a monster in the woods!");
    let clue = document.getElementById("footer-scr");
    if (clue) {
        clue.style.display = "block";
    }
});

// Accessing the big scrollable world, the footer text, the conclusion text, and the monster by their IDs
let bigworld = document.getElementById("bigworld");
let output = document.getElementById("footer-scr");
let conclusion = document.getElementById("conclusion");
let monster = document.getElementById("shrek");
// When the user scrolls, a clue appears in the footer
bigworld.addEventListener("scroll", (event) => {
    console.log("scrolling");
    output.textContent = "keep scrolling...";
});

// When the user stops scrolling, after 4 seconds, the conclusion and monster appear
let scrolldown = document.getElementById("bigworld");
// Using the event 'scrollend' to detect when scrolling stops
scrolldown.addEventListener("scrollend", (event) => {
    console.log("scrolldown");
        if (scrolldown) {
            setTimeout(() => {
                conclusion.style.display = "block";
                monster.style.display = "block";
            }, 4000);
        }
});
// When the monster is clicked, a reaction image appears
monster.addEventListener("click", function() {
    console.log("The monster has been clicked!");
    // Toggle the reaction image so you get to the end of the interaction
    let reaction = document.getElementById("reaction");
    if (reaction) {
        if (reaction.style.display === "block") {
            reaction.style.display = "none";
        } else {
            reaction.style.display = "block";
        }
    }
reaction.addEventListener("click", function() {
    console.log("The reaction has been clicked!");
    // Hide the reaction image when clicked
    reaction.style.display = "none";
    output.textContent = "The End.";
});
});
