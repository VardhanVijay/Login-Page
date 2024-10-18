const userName=document.getElementById("user");
const email=document.getElementById("email");
const pass=document.getElementById("pass");
const repass=document.getElementById("repass");
const btn=document.getElementById("btn");


let userinpt='';
let passinpt='';
let repassinpt='';
let useremail='';

btn.addEventListener("click",(event)=>{
    event.preventDefault();

    userinpt=userName.value;
    passinpt=pass.value;
    repassinpt=repass.value;
    useremail=email.value;

    const {validUser,validEmail,validPass}=check();
    check();
    if(validEmail && validPass && validUser){
        console.log("Username: "+userinpt+"\nEmail: "+useremail+"\nPassword: "+passinpt);
    }
    else{
        console.log("The Provided Data Is Invalid");
        console.log(validUser);
        console.log(validPass);
        console.log(validEmail);
        
    }
})

function check() {
    let validUser=false;
    let validEmail=false;
    let validPass=false;

    if(userinpt.length == 0){
        const val="Username is required.";
        document.getElementById("userText").textContent = val;
        document.getElementById("user").style.borderColor='red';
    }
    else if(userinpt.length < 3 || userinpt.length > 25){
        const val="Username must be between 3 and 25 characters.";
        document.getElementById("userText").textContent = val;
        document.getElementById("user").style.borderColor='red';
    }
    else{
        document.getElementById("userText").textContent = "";
        document.getElementById("user").style.borderColor='initial';
        validUser=true;
    }

    if(useremail==""){
        document.getElementById("emailText").textContent = "Email is required.";
        document.getElementById("email").style.borderColor='red';
    }
    else if(!email.checkValidity() ){
        document.getElementById("emailText").textContent = "Email is not valid";
        document.getElementById("email").style.borderColor='red';
    }
    else{
        document.getElementById("emailText").textContent = "";
        document.getElementById("email").style.borderColor='initial';
        validEmail=true;
    }
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[0-9]).{8,}$/;

    if(passinpt.length==0){
        document.getElementById("passText").textContent ="Password Can not be empty."
        document.getElementById("pass").style.borderColor = 'red';
    }

    else if (!passwordPattern.test(passinpt)) {
        document.getElementById("passText").textContent = "Password must be at least 8 characters long and contain at least 1 uppercase letter, 1 lowercase letter,1 number, and one special character (e.g., !@#$%^&*(),.?\":{}|<>).";
        document.getElementById("pass").style.borderColor = 'red'; 
    } else {
        document.getElementById("passText").textContent = "";
        document.getElementById("pass").style.borderColor = 'initial';
        validPass=true;
    }

    if(passinpt != repassinpt){
        document.getElementById("repassText").textContent="The password does not match";
        document.getElementById("repass").style.borderColor='red';
    }
    else{
        document.getElementById("repassText").textContent = "";
        document.getElementById("repass").style.borderColor = 'initial'; 
    }

    return { validUser, validEmail, validPass };
}
