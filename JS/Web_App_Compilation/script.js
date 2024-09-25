const quotes = [
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      quote: "The best way to predict the future is to create it.",
      author: "Peter Drucker"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      quote: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt"
    }
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.querySelector(".quote").textContent = `"${randomQuote.quote}"`;
    document.querySelector(".author").textContent = randomQuote.author;
  }