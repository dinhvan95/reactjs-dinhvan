function convertInput() {
    /*
    let $a=12;
    let $a=12  ;
    let $a=12;    
        let $a=12;
       let       $a=12;
    */
    var textInput = document.getElementById("textarea1");
    var area2 = document.getElementById("textarea2");
    textInput.value = "case 1: let $a=12;" + "\n" + "case 2: let $a=12  ;" + "\n" + "case 3: let $a=12;    " + "\n" + "case 4:     let $a=12;" + "\n" + "case 5:     let       $a=12;`";
    var txt1 = "let $a=12;";
    var arrTxt1 = txt1.split("=");
    console.log(arrTxt1);
    var result1 = "1. " + arrTxt1[0] + " = " + arrTxt1[1];

    var txt2 = "let $a=12  ;";
    var arrTxt2 = txt2.split("=");
    var result2 = "2. " + arrTxt2[0] + " = " + arrTxt2[1].slice(0, -1).trim() + ";";

    var txt3 = "let $a=12;    ";
    var arrTxt3 = txt3.split("=");
    var result3 = "3. " + arrTxt3[0] + " = " + arrTxt3[1].trim();

    var txt4 = "    let $a=12;";
    var arrTxt4 = txt4.split("=");
    var result4 = "4. " + arrTxt4[0].trim() + " = " + arrTxt4[1];

    var txt5 = "   let       $a=12;";
    var arrTxt5 = txt5.split("=");
    var subArrTxt5 = arrTxt5[0].trim().split(" ");
    var subArr2Txt5 = [];
    for (i in subArrTxt5) {
        if (subArrTxt5[i] != "") {
            subArr2Txt5.push(subArrTxt5[i]);
        }
    }
    console.log(subArrTxt5);
    var result5 = "5. " + subArr2Txt5[0] + " " + subArr2Txt5[1] + " = " + arrTxt5[1];
    area2.value = result1 + "\n" + result2 + "\n" + result3 + "\n" + result4 + "\n" + result5;
}
function test() {
    var text = document.getElementById("exe2").value;
    for (i in text) {
        if (
            text.indexOf("[") < 0 || text.indexOf("]") < 0 ||
            text.indexOf("{") < 0 || text.indexOf("}") < 0 ||
            text.indexOf("(") < 0 || text.indexOf(")") < 0
        ) {
            return false;
        } else if (
            (text.indexOf("[") + text.indexOf("]")) % 2 == 1 &&
            (text.indexOf("{") + text.indexOf("}")) % 2 == 1 &&
            (text.indexOf("(") + text.indexOf(")")) % 2 == 1
        ) {
            return true;
        } else {
            return false;
        }
    }
}
function exercise2() {
    if (test()) {
        document.getElementById("result").innerHTML = "Chuỗi đối xứng";
    } else {
        document.getElementById("result").innerHTML = "Chuỗi không đối xứng";
    }
}


