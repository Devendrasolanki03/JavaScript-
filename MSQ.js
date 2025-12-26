console.log("MCQ");
function checkCaptain(){
    alert("total")
    let sum = 0;
    var ans1 = document.getElementsByName("captain");
    for(i =0;i<ans1.length;i++){
        if (ans1[i].checked && ans1[i].value =="director") {
            
            sum = sum+1;
        } 
    }
       var ans2 = document.getElementsByName("deepeka");
    for(i =0;i<ans2.length;i++){
        if (ans2[i].checked && ans2[i].value =="actor") {
            
            sum = sum+1;
        } 
    }
     var ans3 = document.getElementsByName("prime");
    for(i =0;i<ans3.length;i++){
        if (ans3[i].checked && ans3[i].value =="modi") {
            
            sum = sum+1;
        } 
    }
    document.getElementById("res").innerHTML=sum

}