var sx=0; var fx=0;
var sy=0; var fy=0;
var vx=30; var vy=0;
var score=0; var id=null; var x=200;
var flag=false; var prevx=0; var prevy=0;
document.onkeydown=divDir;

function divDir(e)
{  if(flag==false){
    if(e.keyCode==37)
    {
        vx=-30;
        vy=0;
    }
    if(e.keyCode==38)
    {
        vx=0;
        vy=-30;
    }
    if(e.keyCode==39)
    {
        vx=30;
        vy=0;
    }
    if(e.keyCode==40)
    {
        vx=0;
        vy=30;
    }
}
    if(e.keyCode==32)
    {
      
        // console.log(prevx+" "+prevy);
        if(flag==false){
            prevx=vx;
            prevy=vy;
            flag=true;
            vx=0;
            vy=0;
        }
        else if(flag==true) {
            flag=false;
            vx=prevx;
            vy=prevy;
        }

    }

}
function move()
{
    sx=sx+vx;
    sy=sy+vy;
    if(sx==fx&&sy==fy)
    {
        score++;
        drawFood();
        updateScore();
        clearInterval(id);
        if(score>2)
        {
            x=x-5;
            id=setInterval(move,x);
        }  
        else
        {
            id=setInterval(move,200);
        }
    }
    if(sx>570)
    {
        sx=0;
        score=0;
        updateScore();
        window.alert("Game over man");
        clearInterval(id);
        if(score==0)
        {
            id=setInterval(move,200);
        }
    }
    if(sx<0)
    {
        sx=570;
        score=0;
        updateScore();
        window.alert("Game over man");
        clearInterval(id);
        if(score==0)
        {
            id=setInterval(move,200);
        }
    }
    if(sy>570)
    {
        sy=0;
        score=0;
        updateScore();
        window.alert("Game over man");
        clearInterval(id);
        if(score==0)
        {
            id=setInterval(move,200);
        }
    }
    if(sy<0)
    {
        sy=570;
        score=0;
        updateScore();
        window.alert("Game over man");
        clearInterval(id);
        if(score==0)
        {
            id=setInterval(move,200);
        }
    }
    document.getElementById("snake").style.left=sx+'px';
    document.getElementById("snake").style.top=sy+'px';
}

function drawFood()
{
    fx=Math.floor(Math.random()*19)*30;   // we have 600 by 600 box therefore we require to go till 570 so we divide 570 with 30 we get 19 so we multiply by 19 to get multiples in 30
    fy=Math.floor(Math.random()*19)*30;  //as math.random give value bw 0-1;
    document.getElementById("food").style.left=fx+'px';
    document.getElementById("food").style.top=fy+'px';
}
function start()
{
    id=setInterval(move,x);
}
start();
function updateScore()
{
    document.getElementById("score").innerHTML="SCORE :"+score;
}