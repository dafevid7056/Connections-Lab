/* ------------- Global variables ------------- */
// Proxy to avoid CORS issues
let proxyUrl = 'https://api.allorigins.win/get?url=';
// Global variables to store image URLs for p5.js
let artworkImageUno = '';
let artworkImageDos = '';
let artworkImageTres = '';

// See if the page already loaded
window.addEventListener('load', (event) => {
    console.log('Page is fully loaded');

    /* -------------------------------------------------------------------------- */
    /*           THIS SECTION HANDLES THE MET API FOR FETCHING THE DATA           */
    /* -------------------------------------------------------------------------- */

    let searchUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/search?q=&hasImages=true';

    fetch(`${proxyUrl}${encodeURIComponent(searchUrl)}`)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            let actualData = JSON.parse(data.contents);
            console.log('Data fetched from API:', actualData);

            let metArray = actualData.objectIDs;
            console.log('Met Array:', metArray);

            // Get three random object IDs
            let firstObjectID = Math.floor(Math.random() * metArray.length);
            let secondObjectID = Math.floor(Math.random() * metArray.length);
            let thirdObjectID = Math.floor(Math.random() * metArray.length);

            let URL1 = `${proxyUrl}${encodeURIComponent('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + metArray[firstObjectID])}`;
            let URL2 = `${proxyUrl}${encodeURIComponent('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + metArray[secondObjectID])}`;
            let URL3 = `${proxyUrl}${encodeURIComponent('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + metArray[thirdObjectID])}`;

            // Fetch first artwork
            fetch(URL1)
                .then(response => {
                    if (response.ok) return response.json();
                    throw new Error('First artwork fetch failed');
                })
                .then(data => {
                    let actualData = JSON.parse(data.contents);
                    console.log('First Artwork Data:', actualData);

                    // Check if image URLs exist and are not empty
                    if (!actualData.primaryImageSmall || actualData.primaryImageSmall === '' || !actualData.primaryImage || actualData.primaryImage === '') {
                        throw new Error('No image available for this artwork');
                    }
                    // Artist name separated from description
                    let name1 = document.getElementById('name1');
                    name1.innerText = actualData.title || 'Unknown Title';
                    let artist1 = document.getElementById('artist1');
                    artist1.innerText = (actualData.artistDisplayName || 'Unknown Artist');
                    let description1 = document.getElementById('description1');
                    description1.innerText = (actualData.objectDate || 'Unknown Date') + ', ' + (actualData.medium || 'Unknown Medium') + ', ' + (actualData.dimensions || 'Unknown Dimensions');
                    // variables for the two images of each artwork
                    artworkImageUno = actualData.primaryImageSmall;
                    window.artworkImageUno = artworkImageUno;
                    // Update the image HTML element to show the fetched low-res image
                    let person1 = document.getElementById('person1');
                    person1.src = artworkImageUno;
                    console.log('First Artwork Image URL:', artworkImageUno);
                })
                .catch(error => {
                    console.error('First artwork failed, using placeholder:', error);
                    artworkImageUno = './Placeholders/eye1.png';
                    window.artworkImageUno = artworkImageUno;

                    let person1 = document.getElementById('person1');
                    person1.src = artworkImageUno;
                    let name1 = document.getElementById('name1');
                    name1.innerText = 'Bambú';
                    let artist1 = document.getElementById('artist1');
                    artist1.innerText = 'Unknown Artist';
                    let description1 = document.getElementById('description1');
                    description1.innerText = '2025, Haters will say this is AI generated, but it´s an ACTUAL photograph, 120cm x 80cm';
                });

            // Fetch second artwork
            fetch(URL2)
                .then(response => {
                    if (response.ok) return response.json();
                    throw new Error('Second artwork fetch failed');
                })
                .then(data => {
                    let actualData = JSON.parse(data.contents);
                    console.log('Second Artwork Data:', actualData);

                    // Check if image URLs exist and are not empty
                    if (!actualData.primaryImageSmall || actualData.primaryImageSmall === '' || !actualData.primaryImage || actualData.primaryImage === '') {
                        throw new Error('No image available for this artwork');
                    }
                    // Artist name separated from description
                    let name2 = document.getElementById('name2');
                    name2.innerText = actualData.title || 'Unknown Title';
                    let artist2 = document.getElementById('artist2');
                    artist2.innerText = actualData.artistDisplayName || 'Unknown Artist';
                    let description2 = document.getElementById('description2');
                    description2.innerText = (actualData.artistDisplayName || 'Unknown Artist') + ', ' + (actualData.objectDate || 'Unknown Date') + ', ' + (actualData.medium || 'Unknown Medium') + ', ' + (actualData.dimensions || 'Unknown Dimensions');
                    // variables for the two images of each artwork
                    artworkImageDos = actualData.primaryImageSmall;
                    window.artworkImageDos = artworkImageDos;
                    // Update the image HTML element to show the fetched low-res image
                    let person2 = document.getElementById('person2');
                    person2.src = artworkImageDos;
                    console.log('Second Artwork Image URL:', artworkImageDos);
                })
                .catch(error => {
                    console.error('Second artwork failed, using placeholder:', error);
                    artworkImageDos = './Placeholders/eye2.png';
                    window.artworkImageDos = artworkImageDos;

                    let person2 = document.getElementById('person2');
                    person2.src = artworkImageDos;
                    let name2 = document.getElementById('name2');
                    name2.innerText = 'Río';
                    let artist2 = document.getElementById('artist2');
                    artist2.innerText = 'Unknown Artist';
                    let description2 = document.getElementById('description2');
                    description2.innerText = '2025, Haters will say this is photoshoped, but it´s an ACTUAL photograph, 120cm x 80cm';
                });

            // Fetch third artwork
            fetch(URL3)
                .then(response => {
                    if (response.ok) return response.json();
                    throw new Error('Third artwork fetch failed');
                })
                .then(data => {
                    let actualData = JSON.parse(data.contents);
                    console.log('Third Artwork Data:', actualData);

                    // Check if image URLs exist and are not empty
                    if (!actualData.primaryImageSmall || actualData.primaryImageSmall === '' || !actualData.primaryImage || actualData.primaryImage === '') {
                        throw new Error('No image available for this artwork');
                    }
                    // Artist name separated from description
                    let name3 = document.getElementById('name3');
                    name3.innerText = actualData.title || 'Unknown Title';
                    let artist3 = document.getElementById('artist3');
                    artist3.innerText = actualData.artistDisplayName || 'Unknown Artist';
                    let description3 = document.getElementById('description3');
                    description3.innerText = (actualData.objectDate || 'Unknown Date') + ', ' + (actualData.medium || 'Unknown Medium') + ', ' + (actualData.dimensions || 'Unknown Dimensions');
                    // variables for the two images of each artwork
                    artworkImageTres = actualData.primaryImageSmall;
                    window.artworkImageTres = artworkImageTres;
                    // Update the image HTML element to show the fetched low-res image
                    let person3 = document.getElementById('person3');
                    person3.src = artworkImageTres;
                    console.log('Third Artwork Image URL:', artworkImageTres);
                })
                .catch(error => {
                    console.error('Third artwork failed, using placeholder:', error);
                    artworkImageTres = './Placeholders/eye3.png';
                    window.artworkImageTres = artworkImageTres;

                    let person3 = document.getElementById('person3');
                    person3.src = artworkImageTres;
                    let name3 = document.getElementById('name3');
                    name3.innerText = 'Río & Bambú';
                    let artist3 = document.getElementById('artist3');
                    artist3.innerText = 'Unknown Artist';
                    let description3 = document.getElementById('description3');
                    description3.innerText = '2025, Haters will say this is fake, but it´s an ACTUAL photograph, 120cm x 80cm';
                });
        })
        .catch(error => {
            console.error('Initial search failed, using all placeholders:', error);
            // If the initial search fails, set all placeholders
            artworkImageUno = './Placeholders/eye1.png';
            artworkImageDos = './Placeholders/eye2.png';  
            artworkImageTres = './Placeholders/eye3.png';
            window.artworkImageUno = artworkImageUno;
            window.artworkImageDos = artworkImageDos;
            window.artworkImageTres = artworkImageTres;
        });

    /* -------------------------------------------------------------------------- */
    /*       REPLACE EVERYTHING WITH PLACEHOLDERS IF THE API IS NOT WORKING       */
    /* -------------------------------------------------------------------------- */
    // // Artwork placeholders
    // artworkImageUno = './Placeholders/eye1.png';
    // artworkImageDos = './Placeholders/eye2.png';
    // artworkImageTres = './Placeholders/eye3.png';
    // // Store in global scope for p5.js
    // window.artworkImageUno = artworkImageUno;
    // window.artworkImageDos = artworkImageDos;
    // window.artworkImageTres = artworkImageTres;
    // // Update the image HTML elements
    // document.getElementById('person1').src = artworkImageUno;
    // document.getElementById('person2').src = artworkImageDos;
    // document.getElementById('person3').src = artworkImageTres;
    // // Update the text placeholders
    // document.getElementById('name1').innerText = 'Bambú';
    // document.getElementById('name2').innerText = 'Río';
    // document.getElementById('name3').innerText = 'Río & Bambú';
    // // Update the description placeholders
    // document.getElementById('artist1').innerText = 'Bambú at the MET';
    // document.getElementById('description2').innerText = 'Río at the MET';
    // document.getElementById('description3').innerText = 'Río & Bambú at the MET';
    // console.log('Placeholders loaded successfully');
});

/* -------------------------------------------------------------------------- */
/*          THIS SECTION HANDLES THE DROPDOWNS AND THE SUBMIT BUTTON          */
/* -------------------------------------------------------------------------- */

// These variables store the values of the dropdown menus and the options that have been used
let select1 = document.getElementById('select1');
let select2 = document.getElementById('select2');
let select3 = document.getElementById('select3');
// I need to set an initial value for each 'select' so that the user knows what to do and which options are available for each character
select1.value = 'bang';
select2.value = 'marry';
select3.value = 'kill';
// These variables store the selected options and the button that submits the choices
let submitted = document.getElementById('submitButton');
let usedOptions = [];
// This function checks if all three dropdowns have a value and if the values are unique (no duplicates)
function updateSubmitButton() {
    if (select1.value && select2.value && select3.value) {
        usedOptions = [select1.value, select2.value, select3.value];

        // Count unique values - if it equals 3, no duplicates
        let uniqueCount = 0;
        usedOptions.forEach(option => {
            // Claude helped me with this logic approach. It uses indexOf and lastIndexOf which are methods that return the first and last index of a specific value in an array. If both are the same, it means the value is unique. If it's different, it means the value is duplicated because the value appears on one index and then again on another index.
            if (usedOptions.indexOf(option) === usedOptions.lastIndexOf(option)) {
                uniqueCount++;
            }
        });
        // Again, Claude helped me with this logic approach. The button is enabled only if there are three unique values, because the last 'if' statement added 1 to the count for each unique value. If the counter didn't arrive at 3, it means there were duplicates.
        submitted.disabled = (uniqueCount !== 3);
    } else {
        submitted.disabled = true;
    }
}
// Initial check to disable the button
select1.addEventListener('change', updateSubmitButton);
select2.addEventListener('change', updateSubmitButton);
select3.addEventListener('change', updateSubmitButton);

/* -------------------- EVENT WHEN THE BUTTON IS CLICKED -------------------- */

// This event listener hides the character section and shows the p5js canvas section when the button is clicked. It also starts the p5js sketch.
document.getElementById('submitButton').addEventListener('click', function () {
    // Hide the character selection section
    document.getElementById('character-selection').style.display = 'none';
    document.getElementById('instructions').style.display = 'none';
    // Show the p5js canvas section
    document.getElementById('canvas-section').style.display = 'block';
    document.getElementById('step2').style.display = 'block';
    // After the button is clicked, each character's selection is stored. The one that got 'Marry' will be displayed as the result image and text.
    // Create arrays to make it easier to work with
    let selects = [select1, select2, select3];
    // Using the small versions to avoid CORS issues with p5.js loadImage
    let images = [
        artworkImageUno,
        artworkImageDos,
        artworkImageTres
    ];
    let names = [
        document.getElementById('name1').innerText,
        document.getElementById('name2').innerText,
        document.getElementById('name3').innerText
    ];
    let artists = [
        document.getElementById('artist1').innerText,
        document.getElementById('artist2').innerText,
        document.getElementById('artist3').innerText
    ];
    
    let descriptions = [
        document.getElementById('description1').innerText,
        document.getElementById('description2').innerText,
        document.getElementById('description3').innerText
    ];
    // Store results in variables
    let marriedImage, bangedImage, killedImage;
    let marriedName, bangedName, killedName;
    let marriedArtist, bangedArtist, killedArtist;
    let marriedDescription, bangedDescription, killedDescription;
    
    // Loop through each selection
    for (let i = 0; i < selects.length; i++) {
        if (selects[i].value === 'marry') {
            marriedImage = images[i];
            marriedName = names[i];
            marriedArtist = artists[i];
            marriedDescription = descriptions[i];
        } else if (selects[i].value === 'bang') {
            bangedImage = images[i];
            bangedName = names[i];
            bangedArtist = artists[i];
            bangedDescription = descriptions[i];
        } else if (selects[i].value === 'kill') {
            killedImage = images[i];
            killedName = names[i];
            killedArtist = artists[i];
            killedDescription = descriptions[i];
        }
    }
    // Store in global scope for p5.js
    window.marriedImage = marriedImage;
    window.bangedImage = bangedImage;
    window.killedImage = killedImage;
    window.marriedName = marriedName;
    window.bangedName = bangedName;
    window.killedName = killedName;
    window.marriedArtist = marriedArtist;
    window.bangedArtist = bangedArtist;
    window.killedArtist = killedArtist;
    window.marriedDescription = marriedDescription;
    window.bangedDescription = bangedDescription;
    window.killedDescription = killedDescription;
    console.log('Global variables set:');
    console.log('Images:', window.marriedImage, window.bangedImage, window.killedImage);
    console.log('Names:', window.marriedName, window.bangedName, window.killedName);
    console.log('Descriptions:', window.marriedDescription, window.bangedDescription, window.killedDescription);
    // If all goes well and the button is clicked, start the p5.js sketch
    startMySketch();
});