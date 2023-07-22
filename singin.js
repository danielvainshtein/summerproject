//קישור בין הlocal storge לדף singin
const users = JSON.parse(localStorage.getItem('data')) || []; // קישור בין הלוקאל לדף החדש 

document.getElementById('signin').addEventListener('click', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;



    const user = users.find(function (item) {

        return item.username == username && item.password1 == password;
    });

    if (user) {
        window.location.href = ("homepage.html");
    } else {
        alert('שם המשתמש או הסיסמה שגויים');
    }

});


