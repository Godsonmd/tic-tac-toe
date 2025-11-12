
function show () {
    var name1,name2;
name1=document.iform.player1.value;
name2=document.iform.player2.value;
if(!name1 && !name2)
        {document.getElementById("demo").innerText="";return;}
    else
    {
        document.getElementById("demo").innerText="First player: "+name1+"\n\n"+"Second player: "+name2;
        localStorage.setItem("NAMEA",name1);
        localStorage.setItem("NAMEB",name2);
    }
}
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    go();
});
function go(){
name1=document.iform.player1.value;
name2=document.iform.player2.value;
localStorage.setItem("NAMEA",name1);
localStorage.setItem("NAMEB",name2);
window.location.href="play.html";
}
function sound(){
    document.getElementById("bu").play();
}
