/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("quotes").insert([
    {
      quotes_id: 1,
      quote:
        "Do not take life too seriously. You will never get out of it alive.",
      author: "Elbert Hubbard",
    },
    {
      quotes_id: 2,
      quote:
        "If you do not tell the truth about yourself you cannot tell it about other people.",
      author: "Virginia Woolf",
    },
    {
      quotes_id: 3,
      quote: "Dance first. Think later. It's the natural order.",
      author: "Samuel Beckett",
    },
    {
      quotes_id: 4,
      quote:
        "A good master leads you to the true master within. Only that master, who is your own higher self, can adequately answer all questions.",
      author: "Ming-Dao Deng",
    },
    {
      quotes_id: 5,
      quote:
        "Follow your heart, listen to your inner voice, stop caring about what others think.",
      author: "Roy T. Bennett",
    },
    {
      quotes_id: 6,
      quote:
        "Successful people are always looking for opportunities to help others. Unsuccessful people are always asking, 'What's in it for me?'",
      author: "Brian Tracy",
    },
    {
      quotes_id: 7,
      quote:
        "How you think when you lose determines how long it will be until you win.",
      author: "Gilbert Chesterton",
    },
    {
      quotes_id: 8,
      quote: "Each day provides it's own gifts.",
      author: "Marcus Aurelius",
    },
    {
      quotes_id: 9,
      quote:
        "The health of nations is more important than the wealth of nations.",
      author: "Will Rogers",
    },
    {
      quotes_id: 10,
      quote:
        "You don't have to move mountains. You'll change the world simply by being a warm, kind-hearted human being.",
      author: "Anita Krizzan",
    },
    {
      quotes_id: 11,
      quote:
        "The more you lose yourself in something bigger than yourself, the more energy you will have.",
      author: "Norman Vincent Peale",
    },
    {
      quotes_id: 12,
      quote:
        "Obstacles can't stop you. Problems can't stop you. Most of all, other people can't stop you. Only you can stop you.",
      author: "Jeffrey Gitomer",
    },
    {
      quotes_id: 13,
      quote:
        "One reason so few of us achieve what we truly want is that we never direct our focus; we never concentrate our power.",
      author: "Tony Robbins",
    },
    {
      quotes_id: 14,
      quote: "The temptation to give up is strongest just before victory.",
      author: "Zen Proverb",
    },
    {
      quotes_id: 15,
      quote: "Love is the expression of one's values.",
      author: "Ayn Rand",
    },
    {
      quotes_id: 16,
      quote:
        "The secret of life is to fall seven times and to get up eight times.",
        author:"Paulo Coelho",
    },
    {
      quotes_id: 17,
      quote:
        "Life is ten percent what you experience and ninety percent how you respond to it.",
        author:"Dorothy M. Neddermeyer",
    },
    {
      quotes_id: 18,
      quote:
        "There is no limit to the amount of good you can do if you don't care who gets the credit.",
      author: "Ronald Reagan",
    },
    {
      quotes_id: 19,
      quote: "We're responsible for everything that happens to us.",
      author: "Yanni",
    },
    {
      quotes_id: 20,
      quote: "The most courageous act is still to think for yourself. Aloud.",
      author: "Coco Chanel",
    },
    {
      quotes_id: 21,
      quote:
        "Yesterday is gone. Tomorrow has not yet come. We have only today.",
      author: "Mother Teresa",
    },
    {
      quotes_id: 22,
      quote:
        "You know you are on the road to success if you would do your job and not be paid for it.",
      author: "Oprah Winfrey",
    },
    {
      quotes_id: 23,
      quote: "You don't earn loyalty in a day. You earn loyalty day-by-day.",
      author: "Jeffrey Gitomer",
    },
    {
      quotes_id: 24,
      quote: "If you let your head get too big, it'll break your neck.",
      author: "Elvis Presley",
    },
    {
      quotes_id: 25,
      quote: "Know the rules well, so you can break them effectively.",
      author: "Dalai Lama",
    },
    {
      quotes_id: 26,
      quote:
        "A good teacher opens the door for you, but you must enter the room by yourself.",
      author: "Zen Proverb",
    },
    {
      quotes_id: 27,
      quote:
        "We may not be responsible for the world that created our minds, but we can take responsibility for the mind with which we create our world.",
      author: "Gabor Mate",
    },
    {
      quotes_id: 28,
      quote: "Don't set your own goals by what other people make important.",
      author: "Lolly Daskal",
    },
    {
      quotes_id: 29,
      quote: "Not engaging in ignorance is wisdom. ",
      author: "Bodhidharma",
    },
    {
      quotes_id: 30,
      quote:
        "Most people fail in life not because they aim too high and miss, but because they aim too low and hit.",
      author: "Les Brown",
    },
    {
      quotes_id: 31,
      quote: "Great minds are always feared by lesser minds.",
      author: "Dan Brown",
    },
    {
      quotes_id: 32,
      quote:
        "It ain't where you start in life, it's where you end up, and what you did along the way.",
      author: "Colin Powell",
    },
    {
      quotes_id: 33,
      quote: "The grass is greener where you water it.",
      author: "Neil Barringham",
    },
    {
      quotes_id: 34,
      quote: "Don't want anything. Then you get everything.",
      author: "Seungsahn",
    },
    {
      quotes_id: 35,
      quote:
        "He suffers more than necessary, who suffers before it is necessary.  ",
      author: "Seneca",
    },
    {
      quotes_id: 36,
      quote:
        "You need a plan to build a house. To build a life, it is even more important to have a plan or goal.",
      author: "Zig Ziglar",
    },
    {
      quotes_id: 37,
      quote:
        "Do not think you will necessarily be aware of your own enlightenment.",
      author: "Dogen",
    },
    {
      quotes_id: 38,
      quote:
        "If the only prayer you ever say in your entire life is thank you, it will be enough.",
      author: "Meister Eckhart",
    },
    {
      quotes_id: 39,
      quote:
        "Whatever happened, happened for the good. Whatever is happening, is happening for the good. Whatever will happen, will also happen for the good.",
      author: "Bhagavad Gita",
    },
    {
      quotes_id: 40,
      quote: "There are people who have money and people who are rich.",
      author: "Coco Chanel",
    },
    {
      quotes_id: 41,
      quote:
        "There will always be suffering. But we must not suffer over the suffering.",
      author: "Alan Watts",
    },
    {
      quotes_id: 42,
      quote:
        "Most of us live our lives by accident - we live as it happens. Fulfilment comes when we live our lives on purpose.",
      author: "Simon Sinek",
    },
    {
      quotes_id: 43,
      quote:
        "We can change our lives. We can do, have, and be exactly what we wish.",
      author: "Tony Robbins",
    },
    {
      quotes_id: 44,
      quote: "There is no limitations except those we create for ourselves.",
      author: "Lolly Daskal",
    },
    {
      quotes_id: 45,
      quote:
        "Happiness is a gift and the trick is not to expect it, but to delight in it when it comes.",
      author: "Charles Dickens",
    },
    {
      quotes_id: 46,
      quote:
        "It is those who concentrate on but one thing at a time who advance in this world.",
      author: "Gary Keller",
    },
    {
      quotes_id: 47,
      quote:
        "If you cling to a certain thought with dynamic will power, it finally assumes a tangible outward form.",
      author: "Paramahansa Yogananda",
    },
    {
      quotes_id: 48,
      quote:
        "Life is a gift. Never forget to enjoy and bask in every moment you are in.",
      author: "Celestine Chua",
    },
    {
      quotes_id: 49,
      quote:
        "Loving thoughts and actions are clearly beneficial for our physical and mental health.",
      author: "Dalai Lama",
    },
    {
      quotes_id: 50,
      quote: "To earn more you must learn more.",
      author: "Brian Tracy",
    },
  ]);
};
