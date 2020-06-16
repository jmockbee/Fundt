// const numbers= [20,21,22,23,24,25,26,27];

// numbers.forEach(function(num){
// console.log (num );
// })

// function printTriple(n) {
//     console.log (n *3);
// }

// numbers.forEach(printTriple);

const books = [
	{
		title: 'Good Omens',
		authors: [ 'Terry Prachet' ],
		rating: 4.25
	},

	{
		title: 'Bone the edition',
		authors: [ 'Jeff Smith' ],
		rating: 4.42
	},
	{
		title: 'American Gods',
		authors: [ 'Jeff Smith' ],
		rating: 4.11
	},
	{
		title: 'A Gentleman in Moscow',
		authors: [ 'Amour Towels' ],
		rating: 4.36
	}
];

books.forEach(function(book,idx) {
	console.log(idx,book.title.toUpperCase())
});

for (let book of books) {
	console.log(book.title.toUpperCase())

}


const titles = books.map (function (b){
	return b.title;
})