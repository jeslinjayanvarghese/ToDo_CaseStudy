var email = document.getElementById("email");
var password = document.getElementById("pass");
var error = document.getElementById("error");

function todolist(){
  
    
    $.getJSON("https://jsonplaceholder.typicode.com/todos",function(data){
    count = 0;
    var output = "";
    for(var i=0;i<data.length;i++)
    {
        count++;
        if(data[i].completed == true){

            output += 
                `<tr>
                <td>${count}</td>
                <td>${data[i].title}</td>
                <td><input type="checkbox" checked disabled></td>
                </tr>`;
        }
        else{
        output +=
                `<tr>
                <td>${count}</td>
                <td>${data[i].title}</td>
                <td><input type="checkbox" id="cb" onchange="checkalert();"></td>
                </tr>`;
        }
    
    $("#demo").html(output);
    }
});
}

function checkalert(){
    var checkboxes = document.querySelectorAll('input[id="cb"]:checked').length;
    var myP = new Promise(function(resolve,reject) {
            if(checkboxes===5){
            
                //console.log(count);
              resolve("CONGRATS!");
            }
            // else{
            //   reject("Error Occurred!");
            // }
    }) ;


myP //promise
.then(function(s){
    console.log(s);
    alert("CONGRATS! YOU HAVE COMPLETED 5 OF YOUR TASKS! KEEP UP THE GOOD WORK!");
})
.catch(function(e){
    console.log(e);
    //alert(error);
});
}

function login(cb){
    var email = document.getElementById("email");
    var password = document.getElementById("pass");
    var error = document.getElementById("error");

    if(email.value.trim() == "admin" && password.value.trim() == "12345"){
        cb();
        return true;
    }
    else{
        console.log("Invalid Credentials");
        error.innerHTML = "Invalid Credentials";
        error.style.color= "red";
        return false; 
    }
}
function validate(){
        error.innerHTML = "Valid";
        error.style.color= "green";
        window.location.href = 'home.html'; 
}
//login(validate);