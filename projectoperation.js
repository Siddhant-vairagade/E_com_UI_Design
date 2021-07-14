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
