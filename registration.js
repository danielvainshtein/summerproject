const users = [];

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


function clickButton() {
    //בדיקת איימיל
    const email = document.getElementById("email").value;
    if (email.indexOf("@") == -1) {
        alert("הכנס אימייל תקין ");
        return false;
    }

    if (email.indexOf(".") == -1) {
        alert("הכנס אימייל תקין ");
        return false;
    }
    if (email.indexOf("@") != email.lastIndexOf("@")) {
        alert("אסור יותר משטורדל אחד");
        return false;
    }

    if (checkEnglish(email) == false) {
        alert("הכנס איימיל רק באנגלית");
        return false;
    }

    //שם משתמש רק באנגלית

    const username = document.getElementById("username").value
    const testusername = users.some(function (n) {
        return username == n.username
    })

    if (checkEnglish(username) == false) {
        alert("הכנס שם משתמש רק באנגלית");
        return false;
    }

    //מינימום 4 תויים לשם משתמש
    if (username.length < 4) {
        alert("הכנס שם משתמש יותר מ-4 תווים");
        return false;
    }
    // משתמש קיים במערכת
 
    if(testusername == true) {
        alert("שם המשתמש קיים במערכת")
        return false;
    }

    //שם פרטי מינימום 2 אותיות
    const first_name = document.getElementById("name").value;
    if (first_name.length < 2) {
        alert("הכנס שם פרטי יותר מ-2 תווים");
        return false;
    }

    //שם משפחה מינימום 2 אותיות
    const last_name = document.getElementById("lastname").value;
    if (last_name.length < 2) {
        alert("הכנס שם משפחה יותר מ-2 תווים");
        return false;
    }
    //מספר גיל בין 18-65
    const age = document.getElementById("age").value;
    if (age < 18 || age > 65) {
        alert("הגיל חייב להיות בין 18-65");
        return false;
    }
    // בדיקת סיסמה:
    const password1 = document.getElementById("password").value;
    if (password1 == "") {
        alert("חובה למלא סיסמה");
        return false;
    }

    const password2 = document.getElementById("password2").value;
    if (password2 == "") {
        alert("חובה למלא אימות סיסמה");
        return false;
    }

    if (password1 != password2) {
        alert("אימות סיסמה שגוי");
        return false;
    }
    // סיסמה פחות מ6 תווים

    //בדיקת סיסמא עם אותיות ומספרים
    if (password1.length < 6 || !(/[a-zA-Z]/.test(password1)) || !(/[0-9]/.test(password1))) {
        alert("סיסמא חייבת להכיל לפחות 6 תווים, המכילים אותיות ומספרים");
        return false;

    }
    else{{
        users.push({
            email: email,
            username: username,
            first_name: first_name,
            last_name: last_name,
            age: age,
            password1:password1,
         })
        
    }
    if (users) {
        window.location.href = ("singin.html");
    } else {
        alert('יש להזין את הפרטים כנדרש');
    }
    var jason = JSON.stringify(users);
        localStorage.setItem("data" , jason)
}
}
document.getElementById("register").addEventListener("click", clickButton);
