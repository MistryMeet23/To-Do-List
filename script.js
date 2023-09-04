 const insertdata = document.getElementById("insertdata");
 const listcont = document.getElementById("list-cont");

 function addtask(){

    if(insertdata.value === ""){
        alert("Enter Your Task");
    }else{
        let li = document.createElement("li");
        li.innerHTML = insertdata.value;
        listcont.appendChild(li);  
         
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    insertdata.value = "";  
 }