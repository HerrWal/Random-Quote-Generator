/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/* In this project. We are going to build a web aplication that is going to display a random quote each time the button is clicked from
 a selection of quotes. Also it will display a random quote in intervals of ten seconds. Each time a quote is shjowed it will also change
 the color of the background.*/

/* This is done with mainly two functions: A random quote picker that is going to pick a quote from an array of objects and a function
 that is going to call this information the first function and print it to the page after evaluating its properties.*/


/*** 
 * This is the quotes array. It is composed of objects that have quote, source and tag properties. Some of them have additional properties,
 * year and citation.
 ***/

 const quotes = [{
	quote: "To succeed in life, you need two things: ignorance and confidence.",
	source: "Mark Twain",
	tags: "Inspirational"
}, {
	quote: "The best revenge is massive success.",
	source: "Frank Sinatra",
	tags: "Inspirational"
}, {
	quote: "I walk slowly but never backwards.",
	source: "Abraham Lincoln",
	tags: "Inspirational"
}, {
	quote: "Life is not measured by the number of breaths we take, but by the moments that take our breath away",
	source: "Maya Angelou",
	tags: "Inspirational"
}, {
	quote: "She will not be able to resist these pearls.",
	source: "Dustin Henderson",
	year: 2017,
	citation: "Stranger Things, Stranger Things Season 2: Chapter One",
	tags: "Funny"
}, {
	quote: "People say you should have something to fall back on, but if I'm falling, I want to fall forward, not prepare to fall back.",
	source: "Denzel Washington",
	year: 2008,
	citation: "Oprah's interview with Denzel Washington",
	tags: "Inspirational"
}, {
	quote: "You know nothing, Jon Snow.",
	source: "Ygritte",
	citation: "Game of Thrones",
	tags: "Funny"
}, {
	quote: "I attribute my success to this: I never took nor gave any excuses.",
	source: "Florence Nightingale",
	tags: "Inspirational"
}, {
	quote: "He who would accomplish little need sacrifice little; he who would achieve much must sacrifice much. He who would attain highly must sacrifice greatly",
	source: "James Allen",
	Year: 1903,
	citation: "As a Man Thinketh",
	tags: "Inspirational"
}, {
	quote: "Mr. Gorbachev, tear down this wall.",
	source: "Ronald Regan",
	year: 1987,
	tags: "Politics"
}];


/***
 * This is the getRandomQuote function. Its purpose is to pick an element of the array and return it.
 ***/

function getRandomQuote() {
	const randomNum = Math.floor(Math.random() * quotes.length); //This variable contains the result of the random number formula
	return quotes[randomNum] // And the function here will return the element at the index value of the randomNum
};


/***
 * The following is the randomBackground function. It contains a formula that return a hexagecimal color code.
 ***/

function randomBackground() {
	let color = '#'; //Hash character and then...
	color += Math.random().toString(16).slice(2, 8); // ...we add a formula to the variable (I had to look this up online, link below)
	// https://stackoverflow.com/questions/47906161/math-random-tostring-slice-is-not-a-function-in-javascript#47906193
	// Answer #2, dont even know how I got there. 
	return color
};


/***
 * Lastly, this is the printQuote function. It will call the getRandomQuote function evaluate the returned object and build a string of 
 * HTML elements to print in the browser. 
 ***/

function printQuote() {
	let quoteObject = getRandomQuote(); // The getRandomQuote is called and stored
	let bgColor = randomBackground(); //The randomBackground is called and stored
  //The following is the variable to turn the quote objects into the string of HTML code
	let myQuoteString = `<p class="quote"> ${quoteObject.quote} </p>
                        <p class="source"> ${quoteObject.source}`;
  // Below is evaluated wether the object has additional properties and if they have, to add them to the string
	if (quoteObject.citation) {
		myQuoteString += `<span class="citation">${quoteObject.citation}</span>`
	};
	if (quoteObject.year) {
		myQuoteString += `<span class="year">${quoteObject.year}</span>`
	};
	if (quoteObject.tags) {
		myQuoteString += `, <span class="tags">${quoteObject.tags}</span>`
	};
	myQuoteString += "</p>"; // The closing tag for the paragraph
  // And then we print them out on the browser using the methods that I learned.
	document.getElementById('quote-box').innerHTML = myQuoteString;
	document.querySelector('body').style.backgroundColor = bgColor;
	return //return the data
};

/***
 * This function will change the quote every 10 seconds
 ***/

setInterval(() => {
	printQuote();
}, 10000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);