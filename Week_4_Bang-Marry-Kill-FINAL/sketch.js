/* -------------------------------------------------------------------------- */
/*                             P5JS SKETCH SECTION                            */
/* -------------------------------------------------------------------------- */

// According to Claude, for the p5js sketch to run after the submit button is clicked, it needs to be in a function of its own. This is the reason for the inclusion of 'startMySketch()' below.
function startMySketch() {
    console.log('sketch starting!');
/* ------- This creates a new p5js sketch in a contained instance mode ------ */
    new p5(function(p) {
        // Variables to hold images
        let imagenMarried, imagenBanged, imagenKilled;
        // this will evaluate the state of a for loop I'll use later. The values will be 0 = married, 1 = banged, 2 = killed
        let currentState = 0;
        let downloadButton;
        // iPhone width
        let canvasWidth = 375;
        // iPhone height
        let canvasHeight = 812;
        // Preload function to load images taken from global variables set in script.js
        p.preload = function() {
            console.log('preload - checking URLs:');
            imagenMarried = p.loadImage(window.marriedImage);
            imagenBanged = p.loadImage(window.bangedImage);
            imagenKilled = p.loadImage(window.killedImage);
        };
/* ---------------------------------- SETUP --------------------------------- */
        p.setup = function() {
            console.log('setup running!');
            let myCanvas = p.createCanvas(canvasWidth, canvasHeight);
            myCanvas.parent("canvas-section");
            // Create download button with matching styles
            downloadButton = p.createButton('Download Wallpaper');
            downloadButton.parent("canvas-section");
            downloadButton.mousePressed(downloadImage);
            
            // Style to match the main page button
            downloadButton.style('font-family', 'Amiamie-Regular, Arial, sans-serif');
            downloadButton.style('color', '#333');
            downloadButton.style('background', 'white');
            downloadButton.style('font-size', '16px');
            downloadButton.style('border', '1px solid #ccc');
            downloadButton.style('width', '160px');
            downloadButton.style('padding', '12px 20px');
            downloadButton.style('cursor', 'pointer');
            downloadButton.style('transition', 'background-color 0.3s ease');
            downloadButton.style('margin', '20px auto');
            downloadButton.style('display', 'block');
        };
/* ---------------------------------- DRAW ---------------------------------- */
        p.draw = function() {
            p.background(20, 20, 30); // Dark background
            // This evaluates if the background should be the married, banged or killed image for the wallpaper.
            if (currentState === 0) {
                drawMarriedState();
            } else if (currentState === 1) {
                drawBangedState();
            } else if (currentState === 2) {
                drawKilledState();
            }
        };
/* ----------------- Bang, married, killed states functions ----------------- */
        function drawMarriedState() {
            if (imagenMarried) {
                // Calculate proportional width to fill canvas height
                let imgHeight = canvasHeight;
                let aspectRatio = imagenMarried.width / imagenMarried.height;
                let imgWidth = imgHeight * aspectRatio;
                let x = (canvasWidth - imgWidth) / 2;
                let y = 0;
                // Show the image
                p.image(imagenMarried, x, y, imgWidth, imgHeight);
                // Title and description - bottom right corner
                let padding = 20;
                p.fill(255);
                p.textAlign(p.RIGHT);
                p.textFont('Interlope-Regular');
                p.textSize(26);
                p.text('🤵🏻‍♂️ 👰🏼‍♀️', canvasWidth - padding, canvasHeight - padding - 90);
                p.textSize(20);
                p.text(window.marriedName, canvasWidth - padding, canvasHeight - padding - 60);
                p.textSize(18);
                p.text('by ' + window.marriedArtist, canvasWidth - padding, canvasHeight - padding - 35);
                p.textSize(11);
                p.text(window.marriedDescription, canvasWidth - padding, canvasHeight - padding);
            }
        }

        function drawBangedState() {
            if (imagenBanged) {                
                // Calculate proportional width to fill canvas height
                let imgHeight = canvasHeight;
                let aspectRatio = imagenBanged.width / imagenBanged.height;
                let imgWidth = imgHeight * aspectRatio;
                let x = (canvasWidth - imgWidth) / 2;
                let y = 0;
                // Show the image
                p.image(imagenBanged, x, y, imgWidth, imgHeight);
                // Title and description - bottom right corner
                let padding = 20;
                p.fill(255);
                p.textAlign(p.RIGHT);
                p.textFont('Sligoil-Micro');
                p.textSize(26);
                p.text('💋 🥵', canvasWidth - padding, canvasHeight - padding - 90);
                p.textSize(20);
                p.text(window.bangedName, canvasWidth - padding, canvasHeight - padding - 60);
                p.textSize(18);
                p.text('by ' + window.bangedArtist, canvasWidth - padding, canvasHeight - padding - 35);
                p.textSize(11);
                p.text(window.bangedDescription, canvasWidth - padding, canvasHeight - padding);
            }
        }

        function drawKilledState() {
            if (imagenKilled) {
                // Calculate proportional width to fill canvas height
                let imgHeight = canvasHeight;
                let aspectRatio = imagenKilled.width / imagenKilled.height;
                let imgWidth = imgHeight * aspectRatio;
                let x = (canvasWidth - imgWidth) / 2;
                let y = 0;
                // Show the image
                p.image(imagenKilled, x, y, imgWidth, imgHeight);
                // Title and description - bottom right corner
                let padding = 20;
                p.fill(255);
                p.textAlign(p.RIGHT);
                p.textFont('Basteleur-Moonlight');
                p.textSize(26);
                p.text('🪦 🪦', canvasWidth - padding, canvasHeight - padding - 110);
                p.textSize(20);
                p.text(window.killedName, canvasWidth - padding, canvasHeight - padding - 80);
                p.textSize(18);
                p.text('by ' + window.killedArtist, canvasWidth - padding, canvasHeight - padding - 55);
                p.textSize(11);
                p.text(window.killedDescription, canvasWidth - padding, canvasHeight - padding - 25);
            }
        }

        function downloadImage() {
            // Generate filename based on current state
            let filename = '';
            if (currentState === 0) filename = 'married-wallpaper.png';
            else if (currentState === 1) filename = 'banged-wallpaper.png';
            else filename = 'killed-wallpaper.png';
            
            p.saveCanvas(filename);
            
            // Progress to next state
            currentState++;
            if (currentState > 2) {
                // Reset or hide button
                downloadButton.html('All Downloads Complete');
                downloadButton.attribute('disabled', '');
            }
        }

        p.mousePressed = function() {
            // Optional: Add some interactive effect
            p.fill(255, 255, 0, 100);
            p.ellipse(p.mouseX, p.mouseY, 30, 30);
        };
    });
}