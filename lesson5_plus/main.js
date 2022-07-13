var students = [
    {"name":"Hai Yen", "score":7.8},
    {"name":"Nhat Minh", "score":7.7},
    {"name":"Minh Tam", "score":6.3},
    {"name":"Nguyen Duy", "score":9.4},
    {"name":"Quynh Trang", "score":8.8},
    {"name":"Long Hung", "score":5.4},
    {"name":"Tien Dat", "score":7.1},
    {"name":"Lu Kham", "score":9.2},
    {"name":"Manh Than", "score":8.4},
    {"name":"Trung Hieu", "score":6.5}
];
function showNumber(){
    var i = 0;
    var num = 0;
    var primeList = "<h4>Các số nguyên tố từ 1 đến 50</h4>";
    for(i = 1; i<=50; i++){
        var counter = 0;
        for(num = i; num>=1; num--){
            if(i%num == 0){
                counter = counter + 1;
            }
        }
        if(counter == 2){
            primeList += i + "<br>";
        }
    }
    document.getElementById("prime").innerHTML = primeList;
}
function showStudent(){
    var tBodyRef = document.getElementById("studentTable").getElementsByTagName('tbody')[0];
    tBodyRef.innerHTML = "";
    for(i in students){
        console.log(`${students[i].name} - ${students[i].score}`);
        var row = tBodyRef.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = `${students[i].name}`;
        cell2.innerHTML = `${students[i].score}`;
        }
}
function compare( a, b ) {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
  }
function compare1( a, b ) {
    if ( a.score < b.score ){
      return -1;
    }
    if ( a.score > b.score ){
      return 1;
    }
    return 0;
  }  
function nameOrdered(){
    console.log("Clicked");
    var tBodyRef = document.getElementById("studentTable").getElementsByTagName('tbody')[0];
    tBodyRef.innerHTML = "";
    var stuOrdered = students.sort(compare);
    for(i in stuOrdered){
        console.log(`${stuOrdered[i].name} - ${stuOrdered[i].score}`);
        var row = tBodyRef.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = `${stuOrdered[i].name}`;
        cell2.innerHTML = `${stuOrdered[i].score}`;
        }
}
function scoreOrdered(){
    var tBodyRef = document.getElementById("studentTable").getElementsByTagName('tbody')[0];
    tBodyRef.innerHTML = "";
    var stuOrdered = students.sort(compare1);
    for(i in stuOrdered){
        console.log(`${stuOrdered[i].name} - ${stuOrdered[i].score}`);
        var row = tBodyRef.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = `${stuOrdered[i].name}`;
        cell2.innerHTML = `${stuOrdered[i].score}`;
        }
}
function resetTbl(){
    var tBodyRef = document.getElementById("studentTable").getElementsByTagName('tbody')[0];
    tBodyRef.innerHTML = "";
}