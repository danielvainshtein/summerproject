
const users = localStorage.getItem("data");
const currentUser = localStorage.getItem("currentUser");
const data = JSON.parse(users);
const user = data.find(u => u.username == currentUser)

// כאן תוכל להשתמש בנתוני userData כדי להציגם בדף

document.getElementById("updateEmail").value = user.email;
document.getElementById("updateName").value = user.first_name;
document.getElementById("updateLastname").value = user.last_name;
document.getElementById("updateAge").value = user.age;




function checkEnglish(txt) {
    for (let i = 0; i < txt.length; i++) {
        if (!(txt.charAt(i) >= "A" && txt.charAt(i) <= "z")) {
            return false;
        }
        {
            return true;
        }
    }
}


function validations() {
    const email = document.getElementById("updateEmail").value;
    if (email.indexOf("@") == -1 ||
        email.indexOf(".") == -1 ||
        email.indexOf("@") != email.lastIndexOf("@")) {
        alert("הכנס אימייל תקין ");
        return false;
    }

    if (checkEnglish(email) == false) {
        alert("הכנס איימיל רק באנגלית");
        return false;
    }

    //שם פרטי מינימום 2 אותיות
    const first_name = document.getElementById("updateName").value;
    if (first_name.length < 2) {
        alert("הכנס שם פרטי יותר מ-2 תווים");
        return false;
    }

    //שם משפחה מינימום 2 אותיות
    const last_name = document.getElementById("updateLastname").value;
    if (last_name.length < 2) {
        alert("הכנס שם משפחה יותר מ-2 תווים");
        return false;
    }
    //מספר גיל בין 18-65
    const age = document.getElementById("updateAge").value;
    if (age < 18 || age > 65) {
        alert("הגיל חייב להיות בין 18-65");
        return false;
    }

    return true;
}


document.getElementById('save').addEventListener('click', function (e) {
    e.preventDefault();
    const isValid = validations();
    if (isValid) {
        const userIndex = data.findIndex((u) => u.username == currentUser);
        data[userIndex].email = document.getElementById("updateEmail").value;
        data[userIndex].first_name = document.getElementById("updateName").value;
        data[userIndex].last_name = document.getElementById("updateLastname").value;
        data[userIndex].age = document.getElementById("updateAge").value;
        window.localStorage.setItem('data', JSON.stringify(data));
        document.getElementById('feedback').classList.remove('invisible');
        setTimeout(() => {
            document.getElementById('feedback').classList.add('invisible');
        }, 5000)
    }

});