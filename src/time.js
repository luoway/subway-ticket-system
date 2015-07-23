    var d=new Date();
    document.getElementById("demo").innerHTML=d.toLocaleTimeString() +" " ;
    setInterval(function(){myTimer()},1000);
    function myTimer(){
        d=new Date();
        document.getElementById("demo").innerHTML=d.toLocaleTimeString() +" ";
    }