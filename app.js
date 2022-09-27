    const jouer1=document.getElementById("jouer_1");
    const jouer2=document.getElementById("jouer_2");
    const save=document.getElementById("save");
    let clear=document.getElementById("clear");
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
    }
    let winner =
    [
        [0,1,2],
        [0,4,8],
        [8,0,4],
        [4,0,8],
        [0,3,6],
        [3,6,0],
        [4,8,0],
        [1,4,7],
        [2,4,6],
        [2,6,4],
        [6,2,4],
        [4,6,2],
        [2,5,8],
        [1,2,0],
        [1,0,2],
        [3,4,5],
        [3,0,6],
        [6,0,3],
        [6,7,8],
        [2,8,5],
        [5,2,8], 
        [8,6,7]
    ];
    clear.addEventListener("click",function()
    {
        boxs.forEach(function(ps)
        {
          ps.innerHTML="";  
          player1=[];
          player2=[];
          tic="X";
          document.getElementById("player").innerHTML="player is "+localStorage.getItem("jouer_1");
          document.getElementById('player').style.backgroundColor = '' ; 
        }); 
    });

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
    
     
    find =function(Player,win)
    {
        let a=[], b=[],c=[] 
         a.push(Player[0],Player[1],Player[3]);
         b.push(Player[0],Player[2],Player[3]);
         c.push(Player[0],Player[3],Player[4]);
        console.log("player is"+Player)
        for(let j=0; j<winner.length ; j++)
        {
            if(JSON.stringify(Player) === JSON.stringify(winner[j])||JSON.stringify(Player.reverse() )=== JSON.stringify(winner[j]))
            {
                document.getElementById("player").innerHTML="winner is "+localStorage.getItem(win);
                document.getElementById('player').style.backgroundColor = 'green' ; 
                tic="";
            }
            if(player1.length>2)
            {
                if((JSON.stringify(Player.slice(2)) === JSON.stringify(winner[j])||JSON.stringify(Player.slice(2).reverse()) === JSON.stringify(winner[j]))||
                (JSON.stringify(a) === JSON.stringify(winner[j])||JSON.stringify(a.reverse()) === JSON.stringify(winner[j]))||
                (JSON.stringify(b) === JSON.stringify(winner[j])||JSON.stringify(b.reverse()) === JSON.stringify(winner[j]))||
                (JSON.stringify(c) === JSON.stringify(winner[j])||JSON.stringify(c.reverse()) === JSON.stringify(winner[j])))
                {       
                    document.getElementById("player").innerHTML="winner is "+localStorage.getItem(win);
                    document.getElementById('player').style.backgroundColor = 'green' ; 
                    tic="";
                }
            } 
        }
    }
    


 
