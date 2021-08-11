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
    source : "Mark Twain"
  },
  {
    quote : "The best revenge is massive success.",
    source : "Frank Sinatra"
  },
  {
    quote : "I walk slowly but never backwards.",
    source : "Abraham Lincoln" 
  },
  {
    quote : "Life is not measured by the number of reaths we take, but by the moments that take our breath away",
    source : "Maya Angelou"
  },
  {
    quote : "The path to success is to take massive determined action.",
    source : "Tony Robbins"
  },
  {
    quote : "A strong positive self-image is the best possible preparation for success.",
    source : "Dr. Joyce Brothers"
  },
  {
    quote : "There are no traffic jams along the extra mile.",
    source : "Roger Stauback"
  },
  {
    quote : "I attribute my success to this: I never took nor gave any excuses.",
    source : "Florence Nightingale"
  },
  {
    quote : "It is never too late to be what you might have been.",
    source : "George Eliot"
  },
  {
    quote : "It is not the strongest species that survive, nor the most intelligent, but the most responsive to change.",
    source : "Charles Darwin"
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
 * `printQuote` function
***/

function printQuote () {
  let quoteObject = getRandomQuote();
  let myQuoteString = `<p class="quote"> ${quoteObject.quote} </p>
                      <p class="source"> ${quoteObject.source} </p>`;
  document.getElementById('quote-box').innerHTML = myQuoteString;
  return
}

let statString = document.querySelector('#stat-string');


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);