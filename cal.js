function addToDisplay(value){
    document.getElementById("display").value
    +=value
}


function Calculate( )
{
    let result=document.getElementById("display").value;
    let output=eval(result);
    document.getElementById("display").value=output;
}

function Clearvalue( ){
    document.getElementById("display").value="";
}

    function Delete( ){
        document.getElementById("display").value="";

}