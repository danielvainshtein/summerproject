const users = JSON.parse(localStorage.getItem("users")) || [];

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