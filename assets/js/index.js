

function doAPIcall(type, url, json="", callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == XMLHttpRequest.DONE && xmlhttp.status == 200) {
        var data = xmlhttp.responseText;
        if (callback) callback(data);
      }
    };
    
    xmlhttp.open(type, url, true);
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    if(json!=""){
        xmlhttp.send(json);
    }else{
        xmlhttp.send();
    }
  }

function updateUser(data){

    var form = document.querySelector('form');
    array = Object.values(form).filter(e => 
        
        {
        if(e.name || e.name !=""){
            
        if (e.type == "radio"){
            if (e.checked) return {[e.name] : e.value }
        }else{
      
            
           return  {[e.name] : e.value }
        }   
        }     
    
    })

    array =  Object.values(form).map(e => 
        
        {
        if(e.name || e.name !=""){
            
        if (e.type == "radio"){
            if (e.checked) return {[e.name] : e.value }
        }else{
      
            
           return  {[e.name] : e.value }
        }   
        }     
    
    })

    var newObj = Object.assign({}, ...array );

    
    var json=new URLSearchParams(Object.entries(newObj)).toString();


    doAPIcall(
        "PUT",
        `http://localhost:3000/api/users/${newObj._id}`,
        json,
        function (res) {
          document.getElementById("outputHere").innerHTML = res; //Place data at #outputHere
        }
      );
    

}

function deleteUser(){

    
if(window.location.pathname =="/"){
    let ondelete = document.getElementById('deleteBtn');
         id = ondelete.getAttribute("data-id");
         
     
         
     doAPIcall(
         type = "DELETE",
         url = `http://localhost:3000/api/users/${id}`,
         json ="",
         callback = function (res) {
             alert("Data deleted succesfully!");
             location.reload();
         
          }
       );
     
 }

}
