// Variables
let btn = document.querySelector('.new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: "Some people can’t believe in themselves until someone else believes in them first.",
        person: 'Sean Maguire, Good Will Hunting'
    } ,
    {
        quote:  "It’s only after we’ve lost everything that we’re free to do anything.",
        person: 'Fight Club, Tyler Durden'
    } ,
    {
        quote: "It is not our abilities that show what we truly are… it is our choices. ",
        person: 'Dumbledore, Harry Potter and the Chamber of Secrets'
    } ,
    {
        quote: "Oh yes, the past can hurt. But you can either run from it, or learn from it.",
        person: 'Rafiki, The Lion King'

    } ,
    {
        quote: " If we didn’t do what we loved, we wouldn’t exist.",
        person: 'Adonis, Creed II'
    } ,
    {
        quote: "At some point you’ve got to decide for yourself who you gonna be. Can’t let nobody make that decision for you.",
        person: 'Juan, Moonlight'
    }, 
    {
        quote: "You’re nothing to me until you’re everything.",
        person: 'American Hustle'
    }, 
    {
        quote: "The greatest thing you’ll ever learn is just to love and be loved in return.",
        person: ' Moulin Rouge'
    },
    {
        quote: "Do, or do not. There is no 'try'",
        person: 'Yoda'
    },
    {
        quote: "The man who goes to the gym every single day regardless of how he feels will always beat the man who goes to the gym when he feels like going to the gym.",
        person: 'Andrew Tate'
    }
];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random()* quotes.length);

    quote.innerText = quotes[random]["quote"];
    person.innerText = quotes[random]["person"];
})
