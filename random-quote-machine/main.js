const quotes = [
  {
    id: 1,
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    id: 2,
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    id: 3,
    quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    author: "Steve Jobs"
  },
  {
    id: 4,
    quote: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt"
  },
  {
    id: 5,
    quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: "Oprah Winfrey"
  },
  {
    id: 6,
    quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: "James Cameron"
  },
  {
    id: 7,
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    id: 8,
    quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa"
  },
  {
    id: 9,
    quote: "When you reach the end of your rope, tie a knot in it and hang on.",
    author: "F.D. Roosevelt"
  },
  {
    id: 10,
    quote: "Always remember that you are absolutely unique. Just like everyone else.",
    author: "Margaret Mead"
  }
]

const getRandomVal = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let quotesLength = quotes.length,
    randVal = getRandomVal(0, quotesLength, true),
    cur = -1

window.addEventListener("DOMContentLoaded", (event) => {
  let text = document.querySelector("#text span"),
      author = document.querySelector("#author span"),
      newQuote = document.querySelector("#new-quote"),
      tweetQuote = document.querySelector("#tweet-quote")

  text.innerHTML = quotes[randVal].quote
  author.innerHTML = quotes[randVal].author
  
  newQuote.addEventListener("click", (e) => {
    e.preventDefault()
    randVal = getRandomVal(0, quotesLength)
    while(randVal === cur) {
      randVal = getRandomVal(0, quotesLength)
    }
    cur = randVal
    text.innerHTML = quotes[randVal].quote
    author.innerHTML = quotes[randVal].author
  })

  tweetQuote.setAttribute("href", "https://twitter.com/intent/tweet");

  tweetQuote.addEventListener("click", (e) => {
    let tweet = 'https://twitter.com/intent/tweet?hashtags=quote&related=underscoDe&text=' + encodeURI(text.innerHTML+"\n"+author.innerHTML);
    window.open(tweet, '_top');
  })

})