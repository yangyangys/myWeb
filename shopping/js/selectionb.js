(function(){
    let con = document.querySelector(".selection");
    let oLi = document.querySelectorAll(".sconr .lcon a");
    let btns = document.querySelectorAll(".btns ul li");
    let timer=null,n=0;


    if(timer){
        clearInterval(timer);
        timer=null;
    }
    timer=setInterval(change,1000);
    function change(){
        n++;
        if(n==btns.length) n=0;
        show(n);
    }
    function show(now){
        for(let i=0; i<btns.length; i++){
            oLi[i].style.display= ""; 
            btns[i].className= "";
        }
        oLi[now].style.display = "block";
        btns[now].className = "current";
    }
    con.onmouseover = function(){
        clearInterval(timer);
    }
    con.onmouseout = function(){
        timer = setInterval(change,1000);
    }

    for(let j=0;j<btns.length;j++){
        btns[j].onmouseover=function(){
            show(j);
        }
    }    
})();