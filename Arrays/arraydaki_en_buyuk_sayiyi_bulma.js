
// birinci yöntem 
let grades = [95, 4, 4, 21, 34, 65, 87, 9, 99, 23, 4, 12];

let largest = grades[0];

grades.forEach(findGreatest);

function findGreatest(grade) {
    if (grade > largest) largest = grade;
}

console.log(largest);

console.log(grades.indexOf(largest));


/* -------------------------------
// ikinci yöntem
let largest = grades[0];
for (let i = 0; i < grades.length; i++) {

    if (grades[i] > largest) {
        largest = grades[i]
    }
};

console.log(grades.indexOf(largest));

// üçüncü yöntem
var
    a = [2, 3, 4, 2, 1, 9],
    largest = 0;

a.forEach(function (value) {
    console.log('current array element value: ' + value + '.  Is it larger than the largest?', (largest > value));
    if (largest < value) largest = value;
    console.log('largest value now is: ', largest);
});
console.log('largest is changed here, because it was not redefined inside the function of the forEach method: ', largest, '.\n 
But it was defined within its context.'); */