const users = JSON.parse(localStorage.getItem('data')) || []; // קישור בין הלוקאל לדף החדש 

const user = users.find(function (item) {
        
    return item.first_name 
    
});
document.getElementById("showname").innerHTML = first_name