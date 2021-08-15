/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote : "To succeed in life, you need two things: ignorance and confidence.",
    source : "Mark Twain",
    tags: "Inspirational"
  },
  {
    quote : "The best revenge is massive success.",
    source : "Frank Sinatra",
    tags: "Inspirational"
  },
  {
    quote : "I walk slowly but never backwards.",
    source : "Abraham Lincoln",
    tags: "Inspirational" 
  },
  {
    quote : "Life is not measured by the number of breaths we take, but by the moments that take our breath away",
    source : "Maya Angelou",
    tags: "Inspirational"
  },
  {
    quote : "She will not be able to resist these pearls.",
    source : "Dustin Henderson",
    year: 2017,
    citation: "Stranger Things, Stranger Things Season 2: Chapter One",
    tags: "Funny"
  },
  {
    quote : "People say you should have something to fall back on, but if I'm falling, I want to fall forward, not prepare to fall back.",
    source : "Denzel Washington",
    year: 2008,
    citation: "Oprah's interview with Denzel Washington",
    tags: "Inspirational"
  },
  {
    quote : "You know nothing, Jon Snow.",
    source : "Ygritte",
    citation: "Game of Thrones",
    tags: "Funny"
  },
  {
    quote : "I attribute my success to this: I never took nor gave any excuses.",
    source : "Florence Nightingale",
    tags: "Inspirational"
  },
  {
    quote : "He who would accomplish little need sacrifice little; he who would achieve much must sacrifice much. He who would attain highly must sacrifice greatly",
    source : "James Allen",
    Year: 1903,
    citation: "As a Man Thinketh",
    tags: "Inspirational"
  },
  {
    quote : "Mr. Gorbachev, tear down this wall.",
    source : "Ronald Regan",
    year: 1987,
    tags: "Politics"
  }
]

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  const randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum]
}

/***
 * `randomBackground` function
***/

function randomBackground () {
  let color = '#';
  color += Math.random().toString(16).slice(2,8);
  return color
}

/***
 * `printQuote` function
***/

  function printQuote () {
    let quoteObject = getRandomQuote();
    let bgColor = randomBackground();
    let myQuoteString = `<p class="quote"> ${quoteObject.quote} </p>
                          <p class="source"> ${quoteObject.source}`;
    if (quoteObject.citation) {
      myQuoteString += `<span class="citation">${quoteObject.citation}</span>`
    };
    if (quoteObject.year) {
      myQuoteString += `<span class="year">${quoteObject.year}</span>`
    };
    if (quoteObject.tags) {
      myQuoteString += `, <span class="tags">${quoteObject.tags}</span>`
    };
    myQuoteString += "</p>";
    document.getElementById('quote-box').innerHTML = myQuoteString;
    document.querySelector('body').style.backgroundColor = bgColor;
    console.log(bgColor)
    return
  }

  setInterval(()=>{printQuote();}, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);