

    const jouer1=document.getElementById("jouer_1");
    const jouer2=document.getElementById("jouer_2");
    const save=document.getElementById("save");
    const clear=document.getElementById("clear");
    let boxs =document.querySelectorAll(".box");
    let player1=[];   
    let player2=[];  
    boxs=Array.from(boxs);
    let tic="X";
    document.getElementById("step2").style.display = 'none';
    save.onclick = function(){
        localStorage.setItem("jouer_1",jouer1.value);
        localStorage.setItem("jouer_2",jouer2.value);
        document.getElementById("name_1").innerHTML="jouer 1:"+localStorage.getItem("jouer_1");
        document.getElementById("name_2").innerHTML="jouer 2:"+localStorage.getItem("jouer_2");
        document.getElementById("step1").setAttribute("class", "d-none");
        document.getElementById("step2").setAttribute("class", "d-block");
        ;
    }

    // clear.onclick = function()
    // {
    //     console.log(document.querySelectorAll(".box").value)
    //     // document.querySelectorAll(".box").innerHTML="";
    // }

    let winner =
    [
        [0,1,2],
        [0,4,8],
        [0,3,6],
        [1,4,7],
        [2,4,6],
        [2,5,8],
        [3,4,5],
        [6,7,8],
    ];
    boxs.forEach(function(ps)
    {
        ps.addEventListener("click",function(){
              if(tic=="X" && ps.innerText.trim()=="")
    {
        document.getElementById("player").innerHTML="player is "+localStorage.getItem("jouer_1");
        ps.innerHTML=tic;
        tic="O"; 
        player1.push(boxs.indexOf(this)); 
        find(player1,"jouer_1")
       }
            else if(tic=="O" && ps.innerText.trim()=="")
            {
                document.getElementById("player").innerHTML="player is "+localStorage.getItem("jouer_2");
                ps.innerHTML="O";
                tic="X";
                player2.push(boxs.indexOf(this)); 
                find(player2,"jouer_2")
            }
        });
    });

    function find(Player,win){
        for(var j=0; j<winner.length ; j++)
        {
            if(JSON.stringify(Player) === JSON.stringify(winner[j])||JSON.stringify(Player.reverse() )=== JSON.stringify(winner[j]))
            {
                document.getElementById("player").innerHTML="winner is "+localStorage.getItem(win);
                document.getElementById('player').style.backgroundColor = 'green' ; 
            }
            if(player1.length>2)
            {
                if(JSON.stringify(Player.slice(2)) === JSON.stringify(winner[j])||JSON.stringify(Player.slice(2).reverse()) === JSON.stringify(winner[j]))
                {
                    document.getElementById("player").innerHTML="winner is "+localStorage.getItem(win);
                     document.getElementById('player').style.backgroundColor = 'green' ; 
                }
            } 
        }
    }
    


 
