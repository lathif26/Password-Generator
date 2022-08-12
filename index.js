function pasRend(){
    let display=document.getElementById("inp1");
    let password=document.getElementById("inp2");
    let chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+~`|}{[]:;?><,./=";
if(password.value<=32 && password.value>=4){
    var randomPassword="";
    for(let i=0; i<password.value; i++){
randomPassword=randomPassword+chars.charAt(Math.floor(Math.random()*chars.length));
    }
    display.value=randomPassword;
}
else{
    if(password.value>=32){
        alert("Password length should not be greater than 32");
        password.value=32;
    }
    else{
        alert("Password length should not be less than 4");
        password.value=4;
    }
    
}
}
function copy(){
    document.getElementById("inp1").select();
    document.getElementById("inp1").setSelectionRange(0, 32)
    navigator.clipboard.writeText(document.getElementById("inp1").value);
}