const select = document.getElementById('breeds');
const card = document.querySelector('.card'); 
const form = document.querySelector('form');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------
function fetchData(url) {
    return fetch(url)
        .then( response => response.json() )
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
function generateImage(data) {
    console.log(data);
    const html = `
        <img src='${data}'>
    `;
    card.innerHTML = html;
}

function generateOptions(data) {
    const options = data.map(item => {
        return `<option value="${item}">${item}</option>`;
    }).join("");

    select.innerHTML = options;
}

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------



// ------------------------------------------
//  POST DATA
// ------------------------------------------

