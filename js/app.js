const select = document.getElementById('breeds');
const card = document.querySelector('.card'); 
const form = document.querySelector('form');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------
fetch(
    'https://dog.ceo/api/breeds/image/random'
).then(
     response => response.json()
).then (
    data => generateImage(data.message)
);

fetch(
    'https://dog.ceo/api/breeds/list'
).then (
    response => response.json()
).then(
    data => generateOptions(data.message)
);

// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------
function generateImage(data) {
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

