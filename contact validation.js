function validation(){
    var fname = document.forms["validform"]["frname"].value;
    if(fname==""){
        alert("Input First Name");
        return false;
      }
    var lname = document.forms["validform"]["lsname"].value;
    if(lname==""){
        alert("Input Last Name");
        return false;
      }
    var eMail = document.forms["validform"]["email"].value;
    if(eMail==""){
        alert("Input Email");
        return false;
      }
    else{
        true;
    }

  }