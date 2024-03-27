//m is prime..true
function is_prime(m){
    for(let i=2;i<Math.floor(m);i++){
        if(m % i == 0){
            return false;
        }
    }
    return true;
}

function pf(){
    var input = document.getElementById("input");
    var n = Number(input.value);
    if(n == ""){
        return 0;
    }

    var i = 2;
    var res = "";
    while(n>=1){
        if(n%i == 0 && is_prime(i)){
            n /= i;
            res += String(i) + '*';
        }else{
            i ++;
        }
        if(n == 1){
            break;
        }
    }
    
    var res_box = document.getElementById("res");
    res_box.innerHTML = input.value + "=" + res.slice(0,-1);

    return 0;
}

