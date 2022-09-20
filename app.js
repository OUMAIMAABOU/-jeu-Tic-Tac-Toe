

const jouer1=document.getElementById("jouer_1");
const jouer2=document.getElementById("jouer_2");
const save=document.getElementById("save");
save.onclick = function(){
    localStorage.setItem("jouer_1",jouer1.value);
    localStorage.setItem("jouer_2",jouer2.value);
    document.getElementById("name_1").innerHTML="jouer 1:"+localStorage.getItem("jouer_1");
    document.getElementById("name_2").innerHTML="jouer 2:"+localStorage.getItem("jouer_2");



}