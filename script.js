let cp='o';
let cg='working'
let c=[true,true,true,true,true,true,true,true,true]

function myfun(num){
    if(cg=="working" && c[num]==true){
        if(cp=="x"){
            document.getElementById("cell"+num).innerHTML='o'
            cp="o"
            c[num]=false
        }
        else{
            document.getElementById("cell"+num).innerHTML='x'
            cp="x"
            c[num]=false
        }
        checkwin()
    }
}

function rest(){
    window.location.reload();
}

function checkwin(){
    let a=document.getElementById("cell0").innerHTML;
    let b=document.getElementById("cell1").innerHTML;
    let c=document.getElementById("cell2").innerHTML;

    let d=document.getElementById("cell3").innerHTML;
    let e=document.getElementById("cell4").innerHTML;
    let f=document.getElementById("cell5").innerHTML;

    let g=document.getElementById("cell6").innerHTML;
    let h=document.getElementById("cell7").innerHTML;
    let i=document.getElementById("cell8").innerHTML;
    let result = document.getElementById("status").innerHTML;


    if(cp==a&& cp==b && cp==c){
        document.getElementById("status").innerHTML=cp+"wins";

        cg="notworking"
    }

    else if(cp==d&& cp==e && cp==f){
        document.getElementById("status").innerHTML=cp+"wins";

        cg="notworking"
    }

    else if(cp==f&& cp==f && cp==i){
        document.getElementById("status").innerHTML=cp+"wins";

        cg="notworking"
    }

    else if(cp==a&& cp==d && cp==g){
        document.getElementById("status").innerHTML=cp+"wins";

        cg="notworking"
    }

    else if(cp==b&& cp==e && cp==h){
        document.getElementById("status").innerHTML=cp+"wins";

        cg="notworking"
    }

    else if(cp==c && cp==f && cp==i){
        document.getElementById("status").innerHTML=cp+"wins";

        cg="notworking"
    }

    else if(cp==a && cp==e && cp==i){
        document.getElementById("status").innerHTML=cp+"wins";

        cg="notworking"
    }

    else if(cp==c && cp==e && cp==g){
        document.getElementById("status").innerHTML=cp+"wins";

        cg="notworking"
    }

    else{
        if(a&b&&c&&d&&e&&f&&g&&h&&i){
            document.getElementById("status").innerHTML="draw";
            cg="notworking"
        }
    }


}