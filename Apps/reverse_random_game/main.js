var field_size = 4;
let square_size = 100;

var count = 0;


let field = new Array(field_size);
for(let i=0;i<field_size;i++){
    field[i] = new Array(field_size);
    for(let j=0;j<field_size;j++){
        var random = Math.round(Math.random());
        field[i][j] = random;

    }
}

var res = 0;
for (let i = 0; i < field_size; i++) {
  for (let j = 0; j < field_size; j++) {
    if (field[i][j] == 1) {
      res++;
    }
  }
}

//fieldを表示(関数)
function field_draw(list){
    var canvas = document.getElementById("canvas1");
    var context = canvas.getContext("2d");
    context.strokeStyle="gray";
    context.fillStyle="black";
    context.clearRect(0,0,square_size*field_size, square_size*field_size);
    for(let i=0;i<field_size;i++){
        for(let j=0;j<field_size;j++){
            if(list[i][j] != 0){
                context.fillRect(square_size*i, j*square_size, square_size, square_size);
            }
                context.strokeRect(square_size*i, j*square_size, square_size, square_size);
        }
    }
    return 0;
}
//fieldを表示(初期)
window.onload = function(){
    field_draw(field);
}

function end_judge(list){
    var judge = true;
    for(let i=0;i<field_size;i++){
        for(let j=0;j<field_size;j++){
            if(list[i][j] == 1){
                judge = false;
                break;
            }
        }
    }
    return judge;
}

window.addEventListener("click", function (event) {
    var x = event.pageX;
    var y = event.pageY;
    x = Math.floor(x/100);
    y = Math.floor(y/100);
    if(0<=x && x<=3 && 0<=y && y<=3){
        count ++;
        var dis_score = document.getElementById("score");
        dis_score.innerHTML = "Click Count:"+" "+count;
        for(let i=0;i<field_size;i++){
            field[i][y] ^= 1;
        }
        for(let i=0;i<field_size;i++){
            field[x][i] ^= 1;
        }
        field[x][y] ^= 1;
        field_draw(field);
        
        if(end_judge(field)){
            alert("FIN!! SCORE:"+Math.floor(res/count*100+10));
            for(let i=0;i<field_size;i++){
                field[i] = new Array(field_size);
                for(let j=0;j<field_size;j++){
                    var random = Math.round(Math.random());
                    field[i][j] = random;
                }
            }
            count = 0;
            dis_score.innerHTML = "Click Count:"+" "+count;
            field_draw(field);
        }
    }    
});


// for(let i=0;i<field_size;i++){
//     for(let j=0;j<field_size;j++){
//         console.log(field[i][j]);
//     }
// }



