window.onload=function(){
    (function(){
        setInterval(function(){
            var oTime=document.getElementById("time");
            var curr=new Date();
            var year = curr.getFullYear();
            var month = curr.getMonth()+1;
            var day = curr.getDate();
            var hour=curr.getHours();
            var minute=curr.getMinutes();
            var second=curr.getSeconds();
            hour=hour<10?"0"+hour:hour;
            minute=minute<10?"0"+minute:minute;
            second=second<10?"0"+second:second;
            oTime.innerHTML=year+"/"+month+"/"+day+" "+hour+":"+minute+":"+second;},1000);   
            }
)();
}
