(function(){
    let content = document.getElementById("major");
    let oLi = document.getElementsByClassName("major-box");
    let btn = document.querySelectorAll(".header-list ul li");
    let timer=null,n=0;


    if(timer){
        clearInterval(timer);
        timer=null;
    }
    timer=setInterval(change,1000);
    function change(){
        n++;
        if(n==btn.length) n=0;
        show(n);
    }
    function show(now){
        for(let i=0; i<btn.length; i++){
            oLi[i].style.display= ""; 
            btn[i].className= "";
        }
        oLi[now].style.display = "block";
        btn[now].className = "current";
    }
    content.onmouseover = function(){
        clearInterval(timer);
    }
    content.onmouseout = function(){
        timer = setInterval(change,1000);
    }

    for(let j=0;j<btn.length;j++){
        btn[j].onmouseover=function(){
            show(j);
        }
    }    
})();





