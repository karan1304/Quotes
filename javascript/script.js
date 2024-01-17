const quotes=[ {
    text: "Love is not only something you feel, it is something you do.",
    author: "David Wilkerson"
  },
  {
    text: "The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart.",
    author: "Helen Keller"
  },
  {
    text: "To love and be loved is to feel the sun from both sides.",
    author: "David Viscott"
  },
  {
    text: "Love is not about how many days, months, or years you have been together. It's all about how much you love each other every single day.",
    author: "Unknown"
  },
  {
    text: "Love is an endless mystery, for it has nothing else to explain it.",
    author: "Rabindranath Tagore"
  },
  {
    text: "The greatest happiness you can have is knowing that you are loved for who you are and nothing more.",
    author: "Unknown"
  },
  {
    text: "Love is when the other person's happiness is more important than your own.",
    author: "H. Jackson Brown Jr."
  },
  {
    text: "Love is composed of a single soul inhabiting two bodies.",
    author: "Aristotle"
  },
  {
    text: "Love is not finding someone to live with; it's finding someone you can't imagine living without.",
    author: "Rafael Ortiz"
  },
  {
    text: "The best love is the kind that awakens the soul and makes us reach for more, that plants a fire in our hearts and brings peace to our minds.",
    author: "Nicholas Sparks"
  },
  {
    text: "Love is like the wind, you can't see it, but you can feel it.",
    author: "Nicholas Sparks"
  },
  {
    text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
    author: "Lao Tzu"
  },
  {
    text: "Love is an act of endless forgiveness. A tender look which becomes a habit.",
    author: "Peter Ustinov"
  },
  {
    text: "Love is an endless mystery, for it has nothing else to explain it.",
    author: "Rabindranath Tagore"
  },
  {
    text: "Love is an energy that exists of itself. It is its own value.",
    author: "Thornton Wilder"
  },
  {
    text: "Love is the only force capable of transforming an enemy into a friend.",
    author: "Martin Luther King Jr."
  },
  {
    text: "Love is like a friendship caught on fire.",
    author: "Jeremy Taylor"
  },
  {
    text: "In the end, the love you take is equal to the love you make.",
    author: "Paul McCartney"
  },
  {
    text: "Love is the master key that opens the gates of happiness.",
    author: "Oliver Wendell Holmes"
  },
  {
    text: "Love is an untamed force. When we try to control it, it destroys us. When we try to imprison it, it enslaves us. When we try to understand it, it leaves us feeling lost and confused.",
    author: "Paulo Coelho"
  },
  {
    text: "Love is not just looking at each other, it's looking in the same direction.",
    author: "Antoine de Saint-Exupéry"
  },
  {
    text: "To love oneself is the beginning of a lifelong romance.",
    author: "Oscar Wilde"
  },
  {
    text: "Love is the poetry of the senses.",
    author: "Honoré de Balzac"
  },
  {
    text: "Love is an endless mystery, for it has nothing else to explain it.",
    author: "Rabindranath Tagore"
  },
  {
    text: "Love is like the wind, you can't see it but you can feel it.",
    author: "Nicholas Sparks"
  },
  {
    text: "The giving of love is an education in itself.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "Love is a canvas furnished by nature and embroidered by imagination.",
    author: "Voltaire"
  },
  {
    text: "Love is the greatest refreshment in life.",
    author: "Pablo Picasso"
  },
  {
    text: "Love is a game that two can play and both win.",
    author: "Eva Gabor"
  },
  {
    text: "Love is when the desire to be desired takes you so badly that you feel you could die of it.",
    author: "Henri de Toulouse-Lautrec"
  }
];
function getQuote()
{
const randomIndex=Math.floor(Math.random()*quotes.length);
const randomQuote=quotes[randomIndex];
displayQuote(randomQuote);
}

function displayQuote(quote)
{
document.getElementById('quote-text').innerHTML=`"${quote.text}"`;
document.getElementById('quote-author').innerHTML=`-${quote.author}`;
}
getQuote();



