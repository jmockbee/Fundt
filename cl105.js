// const nums = [ 3,4,5,6,7];
// const products = nums.reduce ((total, currentVal) => {
//     return total* currentVal;
// })

const grades = [ 87, 64, 96, 92, 88, 99, 73, 70, 64 ];

// const maxGrades = grades.reduce ((max,currentVal)=> {
//     if (currentVal > max) return currentVal;
//     return max;
// })

const maxGrades = grades.reduce((max, currentVal) => {
	return Math.max(max, currentVal);
	return max;
});
