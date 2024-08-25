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
        console.log('Цитата скопирована');
    }).catch(function(error) {
        console.error('Ошибка :/ :', error);
    });
});
