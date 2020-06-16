let movies = [
    "The Fantastic Mr. Fox",
    "Mr. and Mrs. Smith",
    "Mrs. Doubtfire",
    "Mr. Deeds"
]


const movie = movies.find(movie => {
   return movie.includes('Mrs');

})

const movies2 = movies.find (m => (
    m.indexOf('Mrs') === 0 
) )