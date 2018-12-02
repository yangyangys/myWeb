(function(){
    let sort = document.getElementById("sort");
    let oUl = document.getElementById("sortlist");
    let oLi = oUl.getElementsByTagName("li");
    let btn = document.querySelectorAll("#sort-btn .btn .back");
    let tab = document.getElementsByClassName('tab');
    let timer = null,n=0; 
    

    if(timer){
        clearInterval(timer);
        timer=null;
    }
    timer = setInterval(change,1000);
    
    function change(){
        n++;
        if(n==btn.length) n=0;
        show(n);
    }
    function show(now){
        for(let i=0; i<btn.length; i++){
            oLi[i].className = ""; 
            btn[i].className= "back";
        }
        oLi[now].className = "bl";
        btn[now].className = "bgc";
    }
    sort.onmouseover = function(){
        clearInterval(timer);
    }
    sort.onmouseout = function(){
        timer = setInterval(change,1000);
    }

    for(let j=0;j<tab.length;j++){
        tab[j].onmouseover=function(){
            show(j);
        }
    }    
})();

    
    
