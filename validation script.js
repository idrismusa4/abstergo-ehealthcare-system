function authform() {
    var firstName = document.forms["authForm"]["fname"].value;
    var lastName = document.forms["authForm"]["lname"].value;
    var eMail = document.forms["authForm"]["email"].value;
    var telNo = document.forms["authForm"]["telno"].value;
    var cntry = document.forms["authForm"]["cntry"].value;
    var stacit = document.forms["authForm"]["statecity"].value
    var dateBirth=document.forms["authForm"]["dbirth"].value;
    var passPrt=document.getElementById("file");
    var pPort=passPrt.value;
    var allowedFormats=/(\.jpg|\.jpeg|\.gif|\.png)$/i;
    var gen = document.forms["authForm"]["gender"];
    var bg = document.forms["authForm"]["bgrp"];
    var bGen = document.forms["authForm"]["bgntp"];
    var work=document.forms["authForm"]["wk"];
    var wkenv=document.forms["authForm"]["env"];
    var usnm=document.forms["authForm"]["usm"];
   // var pw=document.forms["authForm"]["pwd"];
    //var pw1=document.forms["authForm"]["pwd1"];
    

   




    if (firstName==""){
        alert("First Name Must Be Filled Out");
        return false;
    }

    else if(lastName==""){
        alert("Last Name Must Be Filled Out");
        return false;
    }

    else if(eMail==""){
        alert("Email Cannot Be Blank");
        return false;
    }

    else if(telNo==""){
        alert("Phone Number Cannot Be Blank");
        return false;
    }

    else if(cntry==""){
        alert("Country Cannot Be Blank");
        return false
    }

    else if(stacit==""){
        alert("State/City Cannot Be Blank");
        return false;
    }

    else if(dateBirth==""){
        alert("Date of Birth Cannot be Blank");
        return false;
    }

    else if(!allowedFormats.exec(pPort)){
        
        alert("Upload A Passport Photograph with Valid Extensions E.g(.jpg,.jpeg etc)");
        passPrt.value="";
        return false;
        }

    else if((gen[0].checked==false)&&(gen[1].checked==false)&&(gen[2].checked==false)&&(gen[3].checked==false)){
        alert("Select a Gender");
        return false;
    }

    else if((bg[0].checked==false)&&(bg[1].checked==false)&&(bg[2].checked==false)&&(bg[3].checked==false)&&(bg[4].checked==false)&&(bg[5].checked==false)&&(bg[6].checked==false)&&(bg[7].checked==false)){
        alert("Select a Blood Group");
        return false;
    }

    else if (bGen.selectedIndex==0){
        alert("Select a Genotype");
        return false;
    }

    else if((work[0].checked==false)&&(work[1].checked==false)&&(work[2].checked==false)){
        alert("Select a Medium of work");
        return false;
    }

    else if(wkenv==""){
        alert("Input your preference of work environment");
        return false;
    }



   else if(usnm==""){
       alert("Input Username, Username field can not be blank");
       return false;
   }

   

   else{
    true;
}

//
   // else if(pw==""){
   //     alert("Input Password, Password field cannot be blank")
   //     return false;
   // }
//
   // else if (pw1==""){
   //     alert("Repeat Password");
   //     return false;
   // }

  

   
   



  
    
        
    

    
    

    
    


    

}