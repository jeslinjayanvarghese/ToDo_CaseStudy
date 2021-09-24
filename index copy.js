

    var email = document.getElementById("email");
    var password = document.getElementById("pass");
    var error = document.getElementById("error");


    var disabled = 0;
function todolist(){
    var result = new Promise(function(resolve,reject){
       $.getJSON("https://jsonplaceholder.typicode.com/todos",function(data){

        var output = "";
        for(var i=0;i<data.length;i++)
        {
            if(data[i].completed == true){
                output += '<ul><li><input type="checkbox" checked >' + `${data[i].title}` + '</li></ul>';
                disabled+= 1;
 
                resolve("Congrats");
                
            }
            else{
                output += '<ul><li><input type="checkbox" onchange="check()">' + `${data[i].title}` + '</li></ul>';
                reject("failure");
                }
                
result
.then(function(s){
    console.log(s); 
})
.catch(function(e){
    console.log(e);
}) 
        }
        
        $("#demo").html(output);
});
})
}
function check(){
    console.log("checking");
    var checkboxes = document.querySelector('input[type="checkbox"]:checked');
    var checked = checkboxes.length-disabled;

    if(checked==5){
    alert("CONGRATS");
    }

}




// function login(){
//     if(email.value.trim() == "admin" && password.value.trim() == "12345"){
//         console.log("Successful");
//         return true;
//     }
//     else{
//         error.innerHTML = "Invalid Credentials";
//         error.style.color= "red";
//         return false;
//     }
// }

// function login(uname,password,callback){ //callbackfunction as argument any name can be used

//     var email = document.getElementById("email");
//     var password = document.getElementById("pass");
//     var error = document.getElementById("error");
    
//     if(email.value.trim() == "admin" && password.value.trim() == "12345"){
//         console.log("Successful");
//         return true;
//     }
//     else{
//         error.innerHTML = "Invalid Credentials";
//         error.style.color= "red";
//         return false;
//     }
//     callback();
// }

// function validate(){
//     if(login()){
//         return true;
//     }
//     else{
//         return false;
//     }
//     //document.write("This statement should be displayed after addition <br>");
// }

// login(uname,password,validate);



// function validate(login){
//     if(login()){
//         console.log("success");
//         return true;
//     }
//     else{
//         console.log("fail")
//         return false;
//     }
// }


function login(cb){
    

    var email = document.getElementById("email");
    var password = document.getElementById("pass");
    var error = document.getElementById("error");

    if(email.value.trim() == "admin" && password.value.trim() == "12345"){
        console.log("Successful");
        return true;
    }
    else{
        //alert("error 1");
        console.log("fail");
        return false; 
    }
    cb(sum);
}

function validate(sum){
    if(sum == true){
        window.location.href = 'home.html'; 
    }
    else{
        error.innerHTML = "Invalid Credentials";
        error.style.color= "red";
        alert("error");
        return false;
    }
    console.log("success");

}
login(validate);


// function ajaxlist(){

//         var getJson = function(url,callback){

//         var xhttp = new XMLHttpRequest();
//         xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
//         xhttp.responseType = 'json';

//     // onreadystatechange property that defines a function to be executed when the readystate changes
    
//     //EventListener
//         xhttp.onload = function(){
//         //condition
//         if(this.readyState == 4 && this.status == 200){

            
//             var response = JSON.parse(this.responseText);
//             callback(null, xhttp.response);  
//             console.log(response);
//         }else{
//             callback(status);
//         }
//     }; 
//             // var list =response.list ;
//             //console.log(list);
//             //var output = "";
//     xhttp.send();
    

//     };
    
//         getJson("https://jsonplaceholder.typicode.com/todos",function(err,data){
//         if(err!= null){
//             console.error(err);
//         }else{
//             var response = JSON.parse(this.responseText);
//             console.log(response);
//             //var todo =response.list;
//             //console.log(todo);
            
//             var output = "";
//             for(var i=0;i<data.length;i++){
//             output += `<ul><li><input class="input-checkbox100" id="ckb1" type="checkbox"> title: ${data.title}</li></ul>`;
//             document.getElementById("demo").innerHTML = output;
//             console.log(output);
//         }
        
//     }
//     });
    
// }
// $(document).ready(function(){

// var checkbox = document.querySelector("input[name=test]:checked").length;

// checkbox.addEventListener( 'change', function() {
//     if(this.checked) {
//         alert("Checked");
//     } else {
//         alert("not checked");
//     }
// });
// });
