// document.getElementsByClassName('close').addEventListener('click',menuclose)

// function menuclose() {
//    if()
// }


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