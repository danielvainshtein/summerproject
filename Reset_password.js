var number_random;
const users = localStorage.getItem("data");
const currentUser = localStorage.getItem("currentUser");
const data = JSON.parse(users);
const userIndex = data.findIndex((u) => u.username == currentUser);


document.getElementById('check_pincode').addEventListener('click', function (e) {
    e.preventDefault();
    const Code_Compliant = document.getElementById("Code_Compliant").value;

    console.log(Code_Compliant);
    if (number_random == Code_Compliant) {


        data[userIndex].password1 = document.getElementById("new_password").value;
        window.localStorage.setItem('data', JSON.stringify(data));


    }
});

document.getElementById("save_password").addEventListener('click', function (e) {
    e.preventDefault();
    const [minNumber, maxNumber] = [1000, 10000];

    number_random = minNumber + (Math.floor(Math.random() * (maxNumber - minNumber)));

    console.log(number_random);
    if (data[userIndex].password1 != document.getElementById("Current_password").value) {
        alert("הסיסמה שגויה")
    } else {
        document.getElementById('inputContainer').classList.remove('invisible');

    }



})


