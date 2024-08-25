const but = document.querySelector('.submit');
const text = document.querySelector('p');

but.addEventListener('click', outputQuote);

function randomNum() {
    const num = Math.floor(Math.random() * quotes.length);
    return quotes[num];
}

function outputQuote() {
    const quote = randomNum();
    text.innerText = `${quote.text}`
}

document.querySelector(".copy").addEventListener("click", function() {
    navigator.clipboard.writeText(document.querySelector("p").innerText).then(function() {
        console.log('Text copied to clipboard');
    }).catch(function(error) {
        console.error('Error:', error);
    });
});


// const api = 'https://type.fit/api/quotes'
// but.addEventListener('click', () => {
//     console.log('click');
//     getAPI();
// })

// function getAPI() {
//     var category = 'happiness'
//     $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
//     headers: { 'X-Api-Key': 'YOUR_API_KEY'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });

// };

