arrayOfQuotes = [
    {
        'author': 'Oscar Wilde',
        'quote': 'Be yourself; everyone else is already taken.'
    },
    {
        'author': 'Frank Zappa',
        'quote': 'So many books, so little time.'
    },
    {
        'author': 'Frank Sinatra',
        'quote': 'The best revenge is massive success.'
    },
    {
        'author': 'Mae West',
        'quote': 'You only live once, but if you do it right, once is enough.'
    },
    {
        'author': 'Nelson Mandela',
        'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {
        'author': 'Mahatma Gandhi',
        'quote': 'Be the change that you wish to see in the world.'
    },
    {
        'author': 'Albert Einstein',
        'quote': 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.'
    },
];
var previousIndex = -1
function generateQuote() {
    do {
        var randomIndex = Math.floor(Math.random() * arrayOfQuotes.length);
    }
    while (previousIndex === randomIndex) {
        previousIndex = randomIndex;
    }
    // while (randomIndex === 0) {
    //     randomIndex =  Number.parseInt((Math.random()*arrayOfQuotes.length + 1))
    // }
    document.getElementById('quoteOutput').innerHTML = `\"${arrayOfQuotes[randomIndex].quote}\"`;
    document.getElementById('authorOutput').innerHTML = `--${arrayOfQuotes[randomIndex].author}`;
}
