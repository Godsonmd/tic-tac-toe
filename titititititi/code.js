
function show () {
    var name1,name2;
name1=document.iform.player1.value;
name2=document.iform.player2.value;
if(name1==="" || name2==="")
   {document.getElementById("demo").innerText="";return;}
else
{
    if(name1.charAt()===" " || name2.charAt()===" ")
        {document.getElementById("demo").innerText="";return;}
    else
    {
        document.getElementById("demo").innerText="First player: "+name1+"\n\n"+"Second player: "+name2;
        localStorage.setItem("NAMEA",name1);
        localStorage.setItem("NAMEB",name2);
    }
}
}
function go(){
name1=document.iform.player1.value;
name2=document.iform.player2.value;
localStorage.setItem("NAMEA",name1);
localStorage.setItem("NAMEB",name2);
}
function sound(){
    document.getElementById("bu").play();
}