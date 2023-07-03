function checkEnglish(txt){
    for (let i = 0; i < txt.length; i++){
        if(txt.charArt(i) >= "A" && txt.charArt(i) <= "Z"){
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
    }
    {
        if (email.indexOf(".") == -1) {
            alert("הכנס אימייל תקין ");

        }
    }
}

//שם משתמש רק באנגלית




document.getElementById("register").addEventListener("click", clickButton);
