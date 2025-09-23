// See if the page already loaded
window.addEventListener('load', (event) => {
    console.log('Page is fully loaded');
    // Find the objects that are portraits and also have images from the Met API. This is done using a query with the '?' character and parameters separated by '&'
    fetch('https://collectionapi.metmuseum.org/public/collection/v1/search?q=portraits&hasImages=true/')
        // Fetch the data from the API and convert it to JSON
        .then(response => response.json())
        // Handle the data from the API
        .then(data => {
            // Check if data is received correctly. What data is the webpage loading?
            console.log('Data fetched from API:', data);
            // Create an array of the object IDs
            let metarray = data.objectIDs;
            console.log('Met Array:', metarray);
            // Get a random object ID from the array. I need to do this three times for the game to work
            let firstObjectID = Math.floor(Math.random() * metarray.length);
            console.log('First Random Object ID:', metarray[firstObjectID]);
            let URL1 = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/' + metarray[firstObjectID];
            console.log('First Object URL:', URL1);

            let secondObjectID = Math.floor(Math.random() * metarray.length);
            console.log('Second Random Object ID:', metarray[secondObjectID]);
            let URL2 = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/' + metarray[secondObjectID];
            console.log('Second Object URL:', URL2);

            let thirdObjectID = Math.floor(Math.random() * metarray.length);
            console.log('Third Random Object ID:', metarray[thirdObjectID]);
            let URL3 = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/' + metarray[thirdObjectID];
            console.log('Third Object URL:', URL3);

            fetch(URL1)
                // Fetch the data from the API and convert it to JSON. I always forget what this does, so I need to add it again every time.
                .then(response => response.json())
                // Using the data from the API I can now change the content of the image the heading and the paragraph that holds the artwork, the title and the description needed to fill the HTML tags.
                .then(data => {
                    let name1 = document.getElementById('name1');
                    name1.innerText = data.title;
                    let description1 = document.getElementById('description1');
                    description1.innerText = data.artistDisplayName + ', ' + data.objectDate + ', ' + data.medium + ', ' + data.dimensions;
                    let artworkImageUno = data.primaryImageSmall;
                    let person1 = document.getElementById('person1');
                    person1.src = artworkImageUno;
                    console.log('First Artwork Image URL:', artworkImageUno);
                })

            fetch(URL2)
                // Fetch the data from the API and convert it to JSON. I always forget what this does, so I need to add it again every time.
                .then(response => response.json())
                // Using the data from the API I can now change the content of the image the heading and the paragraph that holds the artwork, the title and the description needed to fill the HTML tags. This is the second one.
                .then(data => {
                    let name2 = document.getElementById('name2');
                    name2.innerText = data.title;
                    let description2 = document.getElementById('description2');
                    description2.innerText = data.artistDisplayName + ', ' + data.objectDate + ', ' + data.medium + ', ' + data.dimensions;
                    let artworkImageDos = data.primaryImageSmall;
                    let person2 = document.getElementById('person2');
                    person2.src = artworkImageDos;
                    console.log('Second Artwork Image URL:', artworkImageDos);
                })

            fetch(URL3)
                // Fetch the data from the API and convert it to JSON. I always forget what this does, so I need to add it again every time.
                .then(response => response.json())
                // Using the data from the API I can now change the content of the image the heading and the paragraph that holds the artwork, the title and the description needed to fill the HTML tags. This is the third one.
                .then(data => {
                    let name3 = document.getElementById('name3');
                    name3.innerText = data.title;
                    let description3 = document.getElementById('description3');
                    description3.innerText = data.artistDisplayName + ', ' + data.objectDate + ', ' + data.medium + ', ' + data.dimensions;
                    let artworkImageTres = data.primaryImageSmall;
                    let person3 = document.getElementById('person3');
                    person3.src = artworkImageTres;
                    console.log('Third Artwork Image URL:', artworkImageTres);
                })
                .catch(error => {
                    console.error('Error fetching artwork image:', error);
                });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});