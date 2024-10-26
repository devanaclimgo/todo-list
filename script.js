const quotes = [
  {
    "quote": "The only way most people recognize their limits is by trespassing on them.",
    "source": "Tom Morris"
  },
  {
    "quote": "Goals transform a random walk into a chase.",
    "source": "Mihaly Csikszentmihalyi"
  },
  {
    "quote": "We do not need magic to transform our world. We carry all the power we need inside ourselves already. We have the power to imagine better.",
    "source": "J. K. Rowling"
  },
  {
    "quote": "It is impossible to go through life without trust: That is to be imprisoned in the worst cell of all, oneself.",
    "source": "Graham Greene"
  },
  {
    "quote": "He who asks is a fool for five minutes, but he who does not ask remains a fool forever.",
    "source": "Chinese Proverb"
  },
  {
    "quote": "The roots of true achievement lie in the will to become the best that you can become.",
    "source": "Harold Taylor"
  },
  {
    "quote": "A friend is a gift you give yourself.",
    "source": "Robert Louis Stevenson"
  },
  {
    "quote": "You can't stay in your corner of the Forest waiting for others to come to you. You have to go to them sometimes.",
    "source": "Pooh's Little Instruction Book,"
  },
  {
    "quote": "The Past is to be respected and acknoledged, but not to be worshiped. It is our future in which we will find our greatness.",
    "source": "Pierre Trudeau"
  },
  {
    "quote": "Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you.",
    "source": "Princess Diana"
  },
]

function randomQuote() {
  let random = quotes[Math.floor(Math.random() * quotes.length)]
  quotation.innerText = `"${random.quote}"`
  source.innerText = random.source
}

randomQuote()