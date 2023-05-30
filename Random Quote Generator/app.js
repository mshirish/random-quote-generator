const quotes = [
    "Quote 1",
    "Quote 2",
    "Quote 3",
    "Quote 4",
    "Quote 5",
    "Quote 6",
    "Quote 7",
]


// function generateQuote() {
//     var randomIndex = Math.floor(Math.random() * quotes.length); // Generate a random index
//     document.getElementById("quote").innerHTML = quotes[randomIndex]; // Set the quote text
// }

let currentQuote = document.getElementById("quote")
const quoteBtn = document.querySelector("button")


const changeQuote = () => {
    var randomIndex = Math.floor(Math.random() * quotes.length)
    var newQuote = quotes[randomIndex]
    currentQuote.innerHTML = newQuote
}

quoteBtn.addEventListener("click", changeQuote)