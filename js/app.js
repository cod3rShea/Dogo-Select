const select = document.getElementById('breeds');
const card = document.querySelector('.card'); 
const form = document.querySelector('form');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------
function fetchData(url) {
    return fetch(url)
        .then(
            checkStatus
        )
        .then( 
            response => response.json() 
        ).catch(
            error => console.log('Looks like there was an error', error)
        );
}

fetchData(
    'https://dog.ceo/api/breeds/image/random'
).then (
    data => generateImage(data.message)
);

fetchData(
    'https://dog.ceo/api/breeds/list'
).then(
    data => generateOptions(data.message)
);


// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------
function checkStatus(response) {
    if (response.ok) {
        return Promise.resolve(response);
    } else {
        return Promise.reject( new Error(response.statusText) );
    }
}

function generateImage(data) {
    const html = `
        <img class="img-responsive" src='${data}' alt>
        <p>Click to view images of ${select.value}</p>
    `;
    console.log(data);
    card.innerHTML = html;
}

function generateOptions(data) {
    const options = data.map(item => {
        return `<option value="${item}">${item}</option>`;
    }).join("");

    select.innerHTML = options;
}

function fetchBreedImage() {
    const breed = select.value;
    const img = card.querySelector('img');
    const p = card.querySelector('p');

    fetchData(
        `https://dog.ceo/api/breed/${breed}/images/random`
    ).then(
        data => {
            img.src = data.message;
            img.alt = breed;
            p.textContent = `Click to view more ${breed}s.`;
        }
    );
}

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------
select.addEventListener("change",  fetchBreedImage);
card.addEventListener("click",  fetchBreedImage);


// ------------------------------------------
//  POST DATA
// ------------------------------------------

