//קישור בין הlocal storge לדף singin
const users = JSON.parse(localStorage.getItem("users")) || [];

const username = document.getElementById("username").value;
const password = document.getElementById("Password").value;
    const index = users.findIndex(function (u) {
        return username == u.username;
    })
    if (index == -1 || password != users[index].password || chance < 2) {
        alert("Wrong username or password!");
    }


    document.getElementById("submit").addEventListener("click", function () {
    })


/*
const registeredUsernames = users.Map(u => u.username);

const username = document.getElementById("username").Value;
const password = document.getElementById("Password").Value;
if(registeredUsernames.indexof(username) > -1){
    alert("plase choose another username");
}
var  user = {
    username : username,
    password: password,
}
users.push(user);

localStorage.setItem("users", JSON.stringify(users));