let meds = document.getElementById("takemeds");
let puke = document.getElementById("pukemeds");
let alpha = document.getElementById("character");
let conclusion = document.getElementById("conclusion");

meds.addEventListener("click", function () {
    console.log("The meds button has been clicked!");
    if (alpha) {
        let current = parseFloat(alpha.style.opacity) || 1;
        let newOpacity = Math.max(0, current - 0.2);
        alpha.style.opacity = newOpacity;
        if (newOpacity <= 0) {
            meds.disabled = true;
            if (conclusion) {
                conclusion.style.display = "block";
            }
        }
        puke.disabled = false;
    }
});

puke.addEventListener("click", function () {
    console.log("The puke button has been clicked!");
    if (alpha) {
        let current = parseFloat(alpha.style.opacity) || 0;
        let newOpacity = Math.min(1, current + 0.2);
        alpha.style.opacity = newOpacity;
        if (newOpacity >= 1) {
            puke.disabled = true;
        }
        meds.disabled = false;
    }
});