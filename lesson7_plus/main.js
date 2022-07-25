var personList = [];

function activeLoginBtn() {
    var selected = document.getElementById("stateSelect");
    var mailInput = document.getElementById("mailInput");
    var pwInput = document.getElementById("pwInput");
    var nameInput = document.getElementById("nameInput");
    var ageInput = document.getElementById("ageInput");
    var phoneInput = document.getElementById("phoneInput");
    var birthdayInput = document.getElementById("birthdayInput");
    var sexName = document.getElementsByName("sexInput");
    var sexChecked = Array.from(sexName).find(radio => radio.checked);
    var adrsInput = document.getElementById("adrsInput");
    var adrs2Input = document.getElementById("adrs2Input");
    var cityInput = document.getElementById("cityInput");
    var zipInput = document.getElementById("zipInput");
    var checkInput = document.getElementById("checkInput");
    var checkInput2 = document.getElementById("checkInput2");

    if (
        mailInput.value != "" &&
        pwInput.value != "" &&
        nameInput.value != "" &&
        ageInput.value != "" &&
        adrsInput.value != "" &&
        adrs2Input.value != "" &&
        cityInput.value != "" &&
        zipInput.value != "" &&
        checkInput.checked == true &&
        checkInput2.checked == true &&
        selected.options[selected.selectedIndex].value != null &&
        sexChecked.value != null &&
        phoneInput.value != "" &&
        birthdayInput.value != ""
    ) {
        document.getElementById("submitBtn").removeAttribute("disabled");
        document.getElementById("addBtn").removeAttribute("disabled");
    } else {
        document.getElementById("submitBtn").setAttribute("disabled", null);
        document.getElementById("addBtn").setAttribute("disabled", null);
    }
}
function validateInput() {
    var mailInput = document.getElementById("mailInput");
    var errorEmail = document.getElementById("errorEmail");
    var pwInput = document.getElementById("pwInput");
    var errorPass = document.getElementById("errorPass");
    var nameInput = document.getElementById("nameInput");
    var errorName = document.getElementById("errorName");
    var ageInput = document.getElementById("ageInput");
    var errorAge = document.getElementById("errorAge");
    var phoneInput = document.getElementById("phoneInput");
    var errorPhone = document.getElementById("errorPhone");
    var birthdayInput = document.getElementById("birthdayInput");
    var sexName = document.getElementsByName("sexInput");
    var sexChecked = Array.from(sexName).find(radio => radio.checked);
    var adrsInput = document.getElementById("adrsInput");
    var errorAdr = document.getElementById("errorAdr");
    var adrs2Input = document.getElementById("adrs2Input");
    var errorAdr2 = document.getElementById("errorAdr2");
    var cityInput = document.getElementById("cityInput");
    var errorCity = document.getElementById("errorCity");
    var selected = document.getElementById("stateSelect");
    var zipInput = document.getElementById("zipInput");
    var errorZip = document.getElementById("errorZip");
    var textAreaInput = document.getElementById("textarea");

    var regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var regexPass = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]{8,20}/;
    var regexName = /^[a-zA-Z]{1,30}/;
    var regexAge = /^[0-9]{1,2}$/;
    var regexZip = /^[0-9]{5,10}$/;
    var regexPhone = /^[0-9]{9,11}$/;

    var person = Object();

    var sex = sexChecked.value;
    var state = selected.options[selected.selectedIndex].value;
    var mail = mailInput.value.trim();
    var pass = pwInput.value.trim();
    var name = nameInput.value.trim();
    var age = ageInput.value.trim();
    var phone = phoneInput.value.trim();
    var birthday = birthdayInput.value.trim();
    var adrs = adrsInput.value.trim();
    var adrs2 = adrs2Input.value.trim();
    var city = cityInput.value.trim();
    var zip = zipInput.value.trim();
    var textArea = textAreaInput.value.trim();

    person.sex = sex;
    person.state = state;
    person.textArea = textArea;
    console.log(`${mail} -${pass} - ${name} - ${age} - ${phone} - ${birthday}`);
    if (!regexEmail.test(mail)) {
        errorEmail.style.display = "block";
        errorEmail.innerHTML = "Email is invalid";
        return;
    } else {
        errorEmail.style.display = "none";
        person.mail = mail;
    }
    if (!regexPass.test(pass)) {
        errorPass.style.display = "block";
        errorPass.innerHTML = "Pass is invalid";
        return;
    } else {
        errorPass.style.display = "none";
        person.pass = pass;
    }
    if (!regexZip.test(zip)) {
        errorZip.style.display = "block";
        errorZip.innerHTML = "Zip is invalid";
        return;
    } else {
        errorZip.style.display = "none";
        person.zip = zip;
    }
    if (!regexName.test(name)) {
        errorName.style.display = "block";
        errorName.innerHTML = "Name is invalid";
        return;
    } else {
        errorName.style.display = "none";
        person.name = name;
    }
    if (!regexAge.test(age)) {
        errorAge.style.display = "block";
        errorAge.innerHTML = "Age is invalid";
        return;
    } else {
        errorAge.style.display = "none";
        person.age = age;
    }
    if (birthday == "") {
        errorBirthday.style.display = "block";
        errorBirthday.innerHTML = "Birthday is invalid";
        return;
    } else {
        errorBirthday.style.display = "none";
        person.birthday = birthday;
    }
    if (!regexPhone.test(phone)) {
        errorPhone.style.display = "block";
        errorPhone.innerHTML = "Phone is invalid";
        return;
    } else {
        errorPhone.style.display = "none";
        person.phone = phone;
    }
    if (adrs == "") {
        errorAdr.style.display = "block";
        errorAdr.innerHTML = "Address is invalid";
        return;
    } else {
        errorAdr.style.display = "none";
        person.adrs = adrs;
    }
    if (adrs2 == "") {
        errorAdr2.style.display = "block";
        errorAdr2.innerHTML = "Address is invalid";
        return;
    } else {
        errorAdr2.style.display = "none";
        person.adrs2 = adrs2;
    }
    if (city == "") {
        errorCity.style.display = "block";
        errorCity.innerHTML = "Address is invalid";
        return;
    } else {
        errorCity.style.display = "none";
        person.city = city;
    }
    personList.push(person);
    console.log(personList);
}
function showPerson() {
    var tBodyRef = document.getElementById("personTable").getElementsByTagName('tbody')[0];
    tBodyRef.innerHTML = "";
    personList.forEach(
        (val, i) => {
            var row = tBodyRef.insertRow(i);
            row.insertCell(0).innerHTML = `${i + 1}`;
            row.insertCell(1).innerHTML = `${val.mail}`;
            row.insertCell(2).innerHTML = `${val.pass}`;
            row.insertCell(3).innerHTML = `${val.name}`;
            row.insertCell(4).innerHTML = `${val.age}`;
            row.insertCell(5).innerHTML = `${val.phone}`;
            row.insertCell(6).innerHTML = `${val.birthday}`;
            row.insertCell(7).innerHTML = `${val.sex}`;
            row.insertCell(8).innerHTML = `${val.adrs}`;
            row.insertCell(9).innerHTML = `${val.adrs2}`;
            row.insertCell(10).innerHTML = `${val.city}`;
            row.insertCell(11).innerHTML = `${val.state}`;
            row.insertCell(12).innerHTML = `${val.zip}`;
            row.insertCell(13).innerHTML = `${val.textArea}`;
        }
    )
}

