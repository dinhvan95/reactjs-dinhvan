var fruits = ["orange", "apple", "banana", "mango", "kiwi"];
fruits.push("coconut");
fruits[fruits.length] = "peaches";
var text = `<tr><th>Index</th><th>Name</th></tr>`;
fruits.forEach(
    (val, i) => text += `<tr><td>${i}</td><td>${val}</td></tr>`
);
function show() {
    document.getElementById("a").innerHTML = text;
}
//Array methods:
//1. toString()
//2. join(" - ")
//3. pop() - shift()
//4. push() - unshift()
//5. delete a[index]
//a = b.concat(c) b,c is array
//add items : fruits.splice(statNum, delCount, "item1","item2",...)
//fruits.slice(startNum, endNum) be removed
//sort(): sắp xếp mảng
//fruits.reverse(): sắp xếp ngược
//sort num:
numArr = [7, 2, 4, 1, 8, 6, 3];
var arr1 = numArr.sort(
    (a, b) => a - b
);
console.log(arr1);
//sort reverse
var arr2 = numArr.sort(
    (a, b) => b - a
);
console.log(arr2);
//max val
console.log(Math.max.apply(null, numArr));
console.log(Math.min.apply(null, numArr));
//thu thuat tim max
function findMax(arr) {
    let max = -Infinity;
    let len = arr.length;
    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }
    return max;
}
console.log(findMax(numArr));
//thu thuat tim min
function findMin(arr) {
    let min = Infinity;
    let len = arr.length;
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }
    return min;
}
console.log(findMin(numArr));
//sort object
var students = [
    { "name": "Hai Yen", "score": 7.8 },
    { "name": "Nhat Minh", "score": 7.7 },
    { "name": "Minh Tam", "score": 6.3 },
    { "name": "Nguyen Duy", "score": 9.4 },
    { "name": "Quynh Trang", "score": 8.8 },
    { "name": "Long Hung", "score": 5.4 },
    { "name": "Tien Dat", "score": 7.1 },
    { "name": "Lu Kham", "score": 9.2 },
    { "name": "Manh Than", "score": 8.4 },
    { "name": "Trung Hieu", "score": 6.5 }
];
students.sort(
    (a, b) => a.name - b.name
);
console.log(students);
students.sort(
    (a, b) => a.score - b.score
);
console.log(students);
students.sort(
    (a, b) => {
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        if (x > y) { return 1; }
        if (x < y) { return -1; }
        return 0;
    }
);
console.log(students);
//Iteration
//forEach
var begin = `<ul>`;
students.forEach(
    (val, i) =>
        begin += `<li>${i} ${val.name}</li>`
);
begin += `</ul>`;
console.log(begin);
//map
var begin1 = `<ul>`;
var student2 = students.map(
    (val, i) =>
        begin1 += `<li>${i} Tôi tên là: ${val.name}</li>`
);
begin1 += `</ul>`;
console.log(begin1);
//filter: lọc mảng
//reduce: tính tổng
//every: xét tính true/false của 1 mảng;
//some: chỉ cần 1 item thỏa mãn đk thì true 



