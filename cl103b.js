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


const agb =books.every (book =>book.rating >= 3.5)
const twoA = books.some(book  => book.authors.length == 2 );
