const words = ["dog", 'dig', 'log', 'bag','wag'];

const all3lets = words.every (word => word.length === 3 );

const allEndinG = words.every (word => {
    const last = word.length-1;
    return word [last] === 'g'
})

//every element must pass the test 

const someSWordsWD = words.some(word => word[0] ==='d');
