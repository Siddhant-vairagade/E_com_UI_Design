var sindex=1;
var s=document.getElementsByClassName('slide');
var i;
var c=s.length;

function load(){
    s[sindex-1].style.display="block";
}

function goslide(n){
    slider(sindex += n )

}
function slider(n)
{
    
    if(n>c)
    {
        sindex=1;
    }
    if(n<1)
    {
        sindex=c;
    }
    for(i=0;i<c;i++)
    {
        s[i].style.display="none";        
    }

    s[sindex-1].style.display="block";

}


var login=document.getElementById('log');
var model=document.getElementById('model');
var close=document.getElementById('close');

// on click of login button
login.onclick=function(){
    model.style.display="block";
}
// on click of close button
close.onclick=function(){
    model.style.display="none";
}
// clicking outside fisrtly we need to pass some value 
window.onclick=function(e){
    // if model is true i.e. block then display none
    if(e.target==model)
    {
        model.style.display="none";
    }
}


function Login()

{
    var email=document.getElementById('e');
    var pass=document.getElementById('p');

    if(email.value=="siddhant.vairagade@gmail.com")
    {
        if(pass.value=="abcde@123")
        {
            alert("Welcome to Puffkart");
        }
        else{
            alert("password incorrect");
        }
    }
    else{
        // if not registered then send alert
        alert("Email is not Registered ");
    }
}




const opennav=document.querySelector('.hat');
const closenav=document.querySelector('.close');
const menu=document.querySelector('.menu');

const lposition=menu.getBoundingClientRect().left;

opennav.addEventListener('click',a);
function a(){
    if(lposition<0)
    {
        menu.classList.add("show");
    }
}

closenav.addEventListener('click',b);
function b(){
    if(lposition<0)
    {
        menu.classList.remove("show");
    }
}
