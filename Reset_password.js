

document.getElementById("save_password").addEventListener('click', function (e) {
e.preventDefault();
var number_randon = (Math.floor(Math.random()*10000));
console.log(number_randon);

const Code_Compliant = document.getElementById("Code_Compliant").value;

if(number_randon == Code_Compliant){

    const users = localStorage.getItem("data");
    const currentUser = localStorage.getItem("currentUser");
    const data = JSON.parse(users);
    const user = data.find(u => u.username == currentUser)

    const userIndex = data.findIndex((u) => u.username == currentUser);
    data[userIndex].password1 = document.getElementById("new_password").value;
    window.localStorage.setItem('data', JSON.stringify(data));

    
}
})


