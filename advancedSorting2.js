// var myarray = [2, 9, 5, 10, 1]
// myarray.sort(function (a, b) { //Array now becomes [7, 8, 25, 41]
//     return a - b
// });
// console.log(myarray)


var students = [
    { id: 4, name: "alex", age: 13 },
    { id: 2, name: "zoidberg", age: 22 },
    { id: 1, name: "bruce", age: 40 },
    { id: 2, name: "zoidberg", age: 2 },
    { id: 3, name: "alex", age: 22 },
    { id: 4, name: "alex", age: 30 },
    { id: 1, name: "bruce", age: 12 },
    { id: 2, name: "zoidberg", age: 56 }
];

students.sort(function (a, b) {
    if (a.name > b.name) {
        return 1
    }
    else if (a.name < b.name) {
        return -1
    }
    else if (a.age < b.age) {
        return 1
    }
    else
        return -1


})
console.log(students)