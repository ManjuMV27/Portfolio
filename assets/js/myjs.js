let name_1=document.getElementById("name");
let email_id=document.getElementById("email");
let subject=document.getElementById("subject");
let message=document.getElementById("message");
function Validate(){
    if(name_1.value==""||email_id.value==""||subject.value==""||message.value==""){

        alert("Fields can not be Empty");
        return false;

    }
    else{
        return true;
    }
}