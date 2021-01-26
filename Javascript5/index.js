let Quotes = [
    {
        text : 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
        author : '- Nelson Mandela'
    },
    {
        text : 'Every generation has its defining works, more than 300,000 people work to put that one man on the moon and millions of volunteers immunize children around the world against polio and millions of more people built the Hoover Dam and the other great projects and now it\'s our generation turn to do great things, now I know maybe you\'re thinking I don\'t know how to build a dam and I don\'t know how to get million people involved in anything. Well, let me tell you a secret no one does when they begin. Ideas don\'t come out fully formed they only become clear as you work on them, you just have to get started.',
        author : '- Mark Zukerberg'
    },
    {
        text : 'It\'s ok to have your eggs in one basket as long as you control what happens to the basket.',
        author : '- Elon Musk'
    },
    {
        text : 'The way to get started is to quit talking and begin doing.',
        author : '- Walt Disney'
    },
    {
        text : 'Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking.',
        author : '- Steve Jobs'
    },
    {
        text : 'If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success.',
        author : '- James Cameron'
    },
    {
        text : 'Life is what happens when you\'re busy making other plans.',
        author : '- John Lennon'
    },
    {
        text : 'Spread love everywhere you go. Let no one ever come to you without leaving happier',
        author : '- Mother Teresa'
    },
    {
        text : 'Always remember that you are absolutely unique. Just like everyone else.',
        author : '- Margaret Mead'
    },
    {
        text : 'The future belongs to those who believe in the beauty of their dreams.',
        author : '- Eleanor Roosevelt'
    },
    {
        text : 'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
        author : '- Benjamin Franklin'
    }
];

let button = document.querySelector('.button');
let quote = document.querySelector('.quote');
let namee = document.querySelector('.quote_author');


button.addEventListener('click', function(){

    let number = Math.floor(Math.random()*Quotes.length);
    console.log(number)
    let quoteText = Quotes[number].text;
    console.log(quoteText)
    let quoteAuthor = Quotes[number].author;
    console.log(quoteAuthor)

    quote.innerText = quoteText ;
    namee.innerText = quoteAuthor;

});



