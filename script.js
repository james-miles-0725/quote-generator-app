const quotes = [
    "Believe you can and you're halfway there.",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Not all those who wander are lost. - J.R.R. Tolkien",
    "Do or do not. There is no try. - Yoda, Star Wars",
    "It is not our abilities that show what we truly are. It is our choices. - Dumbledore, Harry Potter",
    "Even the smallest person can change the course of the future. - Galadriel, The Lord of the Rings",
    "Happiness can be found even in the darkest of times, if one only remembers to turn on the light. - Dumbledore, Harry Potter",
    "Winter is coming. - Ned Stark, Game of Thrones",
    "A mind needs books as a sword needs a whetstone, if it is to keep its edge. - Tyrion Lannister, Game of Thrones",
    "In the end, we only regret the chances we didn’t take.",
    "The world is full of magic things, patiently waiting for our senses to grow sharper. - W.B. Yeats",
    "To the well-organized mind, death is but the next great adventure. - Dumbledore, Harry Potter",
    "All we have to decide is what to do with the time that is given us. - Gandalf, The Lord of the Rings",
    "When you play the game of thrones, you win or you die. - Cersei Lannister, Game of Thrones",
    "The man who passes the sentence should swing the sword. - Ned Stark, Game of Thrones",
    "Moonlight drowns out all but the brightest stars. - J.R.R. Tolkien",
    "The night is dark and full of terrors. - Melisandre, Game of Thrones",
    "Fear cuts deeper than swords. - Arya Stark, Game of Thrones",
    "I am no man! - Éowyn, The Lord of the Rings",
    "The greatest adventure is what lies ahead. - J.R.R. Tolkien",
    "A wizard is never late, nor is he early, he arrives precisely when he means to. - Gandalf, The Lord of the Rings",
    "It’s the job that’s never started as takes longest to finish. - Samwise Gamgee, The Lord of the Rings",
    "Courage is found in unlikely places. - J.R.R. Tolkien",
    "The fool doth think he is wise, but the wise man knows himself to be a fool. - William Shakespeare",
    "All that glitters is not gold. - William Shakespeare",
    "Though she be but little, she is fierce. - William Shakespeare",
    "We are such stuff as dreams are made on. - William Shakespeare",
    "Brevity is the soul of wit. - William Shakespeare",
    "Hell is empty and all the devils are here. - William Shakespeare",
    "Once you eliminate the impossible, whatever remains, no matter how improbable, must be the truth. - Sherlock Holmes",
    "Elementary, my dear Watson. - Sherlock Holmes",
    "The game is afoot! - Sherlock Holmes",
    "I solemnly swear that I am up to no good. - Harry Potter",
    "Mischief managed. - Harry Potter",
    "I am Groot. - Guardians of the Galaxy",
    "With great power comes great responsibility. - Spider-Man",
    "I find your lack of faith disturbing. - Darth Vader, Star Wars",
    "May the Force be with you. - Star Wars",
    "Inconceivable! - The Princess Bride",
    "As you wish. - The Princess Bride",
    "You keep using that word. I do not think it means what you think it means. - The Princess Bride",
    "Never tell me the odds. - Han Solo, Star Wars",
    "I am the one who knocks. - Walter White, Breaking Bad",
    "The needs of the many outweigh the needs of the few. - Spock, Star Trek",
    "Live long and prosper. - Spock, Star Trek",
    "Resistance is futile. - Star Trek",
    "To infinity and beyond! - Buzz Lightyear, Toy Story",
    "Why so serious? - The Joker, The Dark Knight",
];
  
  function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
  }