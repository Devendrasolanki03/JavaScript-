console.log("form velidation");
function validate(){
    alert("validate is")
    var uname = document.getElementById("uname").value;
    var upass = document.getElementById("upass").value;
    if(uname.trim() == "" || upass.trim() == ""){
        alert("blank not alloed");
        return false;
    }
    else{
        return true;
    }


}


