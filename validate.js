 let form = document.getElementById("form");
 let userName = document.getElementById("user-name");
 let password = document.getElementById("password");
 let  confirmPassword = document.getElementById("confirm-password");
 let email = document.getElementById("email");


 
// https://www.youtube.com/watch?v=YMBGvvE47I8





function validateInputs(){
  if (userName.value.trim()==="") {
   onError(userName,"User name cannot be empty");
  }
  else{
    onSuccess(userName);
  }
  if (email.value.trim()==="") {
    onError(email,"Email cannot be empty");
  }else{
    if(!isValidEmail(email.value.trim())){
      onError(email,"Email is not valid");
    }
    else{
      onSuccess(email);
    }
  }

  if (password.value.trim()==="") {
    onError(password,"Password cannot be empty");
  }else{
    onSuccess(password);
  }

   if (confirmPassword.value.trim()==="") {
    onError(confirmPassword,"Confirm Password cannot be empty");
  }else{
    if(password.value.trim()!==confirmPassword.value.trim()){
      onError(confirmPassword,"Password & Confirm Password must be matched");
    }else{
      onSuccess(confirmPassword);
    }
    
  }
}
document.querySelector("button")
.addEventListener("click",(event)=>{
  event.preventDefault();
  validateInputs();
});


function onSuccess(input){
    let parent = input.parentElement;
    let messageEle =parent.querySelector("small");
        messageEle.style.visibility="hidden";
        messageEle.innerText = " ";
        parent.classList.remove("error");
        parent.classList.add("succss");
}
function onError(input,message){
    let parent = input.parentElement;
    let messageEle =parent.querySelector("small");
        messageEle.style.visibility="visible";
        messageEle.innerText = message;
        parent.classList.add("error");
        parent.classList.remove("succss");
}

function isValidEmail(email){
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}