

function res(){
    var n = document.getElementById("input").value;
    n = Number(n);
    var r = "";
    for(let i=1;i<=n;i++){
        if(n%i == 0){
            r += String(i) + ' ';
        }
    }
    var result = document.getElementById("res");
    result.innerHTML = r;
}