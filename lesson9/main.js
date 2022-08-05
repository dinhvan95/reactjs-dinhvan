var current_page = 1;
var records_per_page = 4;

var students = [
    { "name": "Hai Yen", "age": 23, "class": "A", "score": 7.8 },
    { "name": "Nhat Minh", "age": 22, "class": "B", "score": 7.7 },
    { "name": "Minh Tam", "age": 21, "class": "C", "score": 6.3 },
    { "name": "Nguyen Duy", "age": 24, "class": "A", "score": 9.4 },
    { "name": "Quynh Trang", "age": 20, "class": "C", "score": 8.8 },
    { "name": "Long Hung", "age": 19, "class": "A", "score": 5.4 },
    { "name": "Tien Dat", "age": 25, "class": "B", "score": 7.1 },
    { "name": "Lu Kham", "age": 22, "class": "B", "score": 9.2 },
    { "name": "Manh Than", "age": 24, "class": "C", "score": 8.4 },
    { "name": "Trung Hieu", "age": 20, "class": "A", "score": 6.5 },
    { "name": "Nguyen Lu", "age": 22, "class": "B", "score": 8.2 },
    { "name": "Do Phu", "age": 20, "class": "C", "score": 9.1 },
    { "name": "Tu Hai", "age": 25, "class": "A", "score": 8.1 },
    { "name": "Long Thanh", "age": 22, "class": "B", "score": 5.5 },
    { "name": "Tan An", "age": 19, "class": "A", "score": 4.8 },
    { "name": "Viet Hung", "age": 23, "class": "B", "score": 8.4 },
    { "name": "Le Tram", "age": 22, "class": "C", "score": 8.1 },
    { "name": "Vuong Hao", "age": 26, "class": "C", "score": 7.2 },
    { "name": "Quang Minh", "age": 27, "class": "A", "score": 9.4 },
    { "name": "Phung Hung", "age": 29, "class": "B", "score": 7.5 }
];

function prevPage()
{
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage()
{
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}

function numPages()
{
    return Math.ceil(students.length / records_per_page);
}

function changePage(page)
{
    var prev_page = document.getElementById("prev_page");
    var page_Next = document.getElementById("page_Next");

    var page_1 = document.getElementById("page_1");
    var page_2 = document.getElementById("page_2");
    var page_3 = document.getElementById("page_3");
    var page_4 = document.getElementById("page_4");
    var page_5 = document.getElementById("page_5");

    var tBodyRef = document.getElementById("personTable").getElementsByTagName('tbody')[0];

    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    tBodyRef.innerHTML = "";
    for (var i = (page-1) * records_per_page; i < (page * records_per_page); i++) {    
        tBodyRef.innerHTML += `<tr><td>${i + 1}</td><td>${students[i].name}</td><td>${students[i].age}</td><td>${students[i].class}</td><td>${students[i].score}</td></tr>`;
    }

    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }

    if (page == numPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
}

window.onload = function() {
    changePage(1);
};

