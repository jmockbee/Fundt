// const numbers = [ 20,21,22,23,24,25,26,27];
//  const words = ['asap', 'byob','rsvp','diy'];

// const odds = numbers.filter(n => n % 2 ===1 );
// const even = numbers.filter(n => n % 2 === 0 );


// const bigNum = numbers.filter(n => n >23 );


const books = [
	{
		title: 'Good Omens',
		authors: [ 'Terry Prachet', 'Niel Gaiman' ],
        rating: 4.25,
        genres:['fiction','fantasy']
    },
    
    {
		title: 'Changing My Mind',
		authors: [ 'Zadie Smith' ],
        rating: 4.25,
        genres:['nonfiction','essays']
	},

	{
		title: 'Bone the edition',
		authors: [ 'Jeff Smith' ],
        rating: 4.42,
        genres:['fiction','fantasy', 'graphic novel']
	},
	{
		title: 'American Gods',
		authors: [ 'Jeff Smith' ],
        rating: 4.11,
        genres:['fiction','fantasy']
	},
	{
		title: 'A Gentleman in Moscow',
		authors: [ 'Amour Towels' ],
        rating: 4.36,
        genres:['fiction','historical fiction ']
    },
    {
		title: 'The name of the Wind',
		authors: [ 'Patrick Rothfuss' ],
        rating: 4.19,
        genres:['fiction','fantasy']
    },
    {
		title: 'The Overstory',
		authors: [ 'Richard Powers' ],
        rating: 4.65,
        genres:['fiction','short stories']
    },
    {
		title: 'The Way of the Kings ',
		authors: [ 'Brandon Sanderson' ],
        rating: 4.64,
        genres:['epic','fantasy']
    }

];


const goodBooks = books.filter(b => b.rating > 4.3);

const fantBooks = books.filter(book => (book.genres.includes('fantasy')
))


const query = 'The';
const results = books.filter (book => {
    const title = book.title.toLowerCase();
    return title.includes(query.toLowerCase())
})
