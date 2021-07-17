function changecolor(){
    var mycolor=new Array();  
    var i;
    for(i=0;i<21;i++){
    var r=Math.floor(Math.random() * 256);
    var g=Math.floor(Math.random() * 256);
    var b=Math.floor(Math.random() * 256);
    mycolor[i]="rgb("+r+ ","+g+","+b+")";
    document.getElementsByClassName("white")[i].style.backgroundColor=mycolor[i];
    }
}