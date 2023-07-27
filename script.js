// document.write("Javascript amar rahe")
let form = document.getElementById('createAccountForm');
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let cPassword = document.getElementById('cPassword');

form.addEventListener('submit',(event) => {
    event.preventDefault();
    validateForm();
});
function validateForm(){
    // username
    if(username.value.trim()==''){
        setError(username,"Name can't be empty.");
    }else if(username.value.trim().length<5 | username.value.trim().length>15){
        setError(username,"Name must be min 5 and max 15 characters.");
    }else{
        setSuccess(username);
    }
    // email
    if(email.value.trim()==''){
        setError(email,"Email can't be empty");        
    }else if(validateEmail(!(email.value))){
         setError(email,"Please provide valid email address");
    }else if(validateEmail(email.value)){
        setSuccess(email);        
    }else{
        setError(email,"Loye you Ashkar Husain");
    }
    // password
    if(password.value.trim()==''){
        setError(password,"Password can't be empty")
    }else if(password.value.trim().length < 6 | password.value.trim().length >8){
        setError(password,"Password must have min 6 and max 8 characters");
    }else{
        setSuccess(password);
    }
    // cPassword
    if(cPassword.value.trim()==''){
        setError(cPassword,"Confirm Password can't be empty");
    }
    else if(password.value.trim() != cPassword.value.trim()){
        setError(cPassword,"Password does't match")
    }else{
        setSuccess(cPassword);
    }
}

// function for calling error class:-
function setError(element,errorMessage){
    let parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    let paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

// function for calling success class:-
function setSuccess(element){
    let parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
    
}

function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
 } 