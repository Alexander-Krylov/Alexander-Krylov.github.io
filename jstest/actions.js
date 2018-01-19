var a = Math.round(Math.random()*3 + 6);
var b = Math.round(Math.random()*3 + (11-a));
var res = a + b;

var sprite = document.getElementById('sprite');
var ctx = sprite.getContext('2d');

var input = document.getElementById("inputNumber");

var heightCtx = 150;
var startPosition = 100;

var step = 0;
var xNum;
var yNum;

function start(){
    document.getElementById("a").innerHTML = String(a);
    document.getElementById("b").innerHTML = String(b);

    createAxis();
    createArc(0, a);
}

function checkValue(){

    if(step < 2){
        if(!step){
            if(input.value == a){
                document.getElementById("a").style.backgroundColor = '';
                input.style.color = '';
                step++;
                input.value = "";

                ctx.beginPath();
                ctx.font = "bold 29px Courier";
                ctx.fillStyle = "black";
                ctx.fillText(String(a), yNum, xNum);

                createArc(a, res);
            } else{
                document.getElementById("a").style.backgroundColor = '#fea541';
                input.style.color = 'red';
            }
        } else{
            if(input.value == b){
                document.getElementById("b").style.backgroundColor = '';
                input.style.color = '';
                step++;
                input.value = "";
                input.style.visibility = "hidden";
                document.getElementById("inputRes").style.visibility = "visible";


                ctx.beginPath();
                ctx.font = "bold 29px Courier";
                ctx.fillStyle = "black";
                ctx.fillText(String(b), yNum, xNum);
            } else{
                document.getElementById("b").style.backgroundColor = '#fea541';
                input.style.color = 'red';
            }
        }

    } else {

        var inpRes = document.getElementById("inputRes");

        if( inpRes.value == res){
            inpRes.style.visibility = "hidden";
            document.getElementById("result").innerHTML = String(res);
        } else{
            inpRes.style.color = 'red';
        }
    }

}

function createAxis(){

    ctx.beginPath();
    ctx.fillStyle = "#f9efce";
    roundRect(ctx, (startPosition - 50), (heightCtx - 30), 950, 80, 10, true, false);

    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#3a3220";
    ctx.moveTo(startPosition, heightCtx);
    ctx.lineTo(950, heightCtx);
    ctx.stroke();

    var position = 0;

    for(var i=0; i<21; i++){

        position = startPosition + i*40;

        ctx.beginPath();
        if(i%5){
            ctx.lineWidth = "2";
            ctx.strokeStyle = "#3a3220";
            ctx.moveTo(position, (heightCtx + 10));
            ctx.lineTo(position, (heightCtx - 10));

            ctx.font = "26px Courier";
            ctx.fillStyle = "#3a3220";
            if(i>9){
                ctx.fillText(String(i), (position - 14), (heightCtx + 40));
            } else{
                ctx.fillText(String(i), (position - 8), (heightCtx + 40));
            }

        } else {
            ctx.lineWidth = "3";
            ctx.strokeStyle = "black";
            ctx.moveTo(position, (heightCtx + 15));
            ctx.lineTo(position, (heightCtx - 15));

            ctx.font = "bold 29px Courier";
            ctx.fillStyle = "black";
            if(i>9){
                ctx.fillText(String(i), (position - 16), (heightCtx + 40));
            } else{
                ctx.fillText(String(i), (position - 8), (heightCtx + 40));
            }
        }

        ctx.stroke();
    }

    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#3a3220";
    ctx.moveTo(935, (heightCtx - 15));
    ctx.lineTo(950, heightCtx);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#3a3220";
    ctx.moveTo(935, (heightCtx + 15));
    ctx.lineTo(950, heightCtx);
    ctx.stroke();
}

function createArc(startPoint, endPoint){

    var diff = endPoint - startPoint;
    var cath1 = diff/2;

    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#d836d0";
    ctx.moveTo((startPosition + startPoint*40), heightCtx);
    ctx.arcTo((startPosition + (startPoint+cath1)*40), Math.round(heightCtx - cath1*50), (startPosition + endPoint*40), heightCtx, cath1*50);
    ctx.lineTo((startPosition + endPoint*40), heightCtx);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#d836d0";
    ctx.moveTo((startPosition + endPoint*40 - diff/2), heightCtx - diff*2);
    ctx.lineTo((startPosition + endPoint*40), heightCtx);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#d836d0";
    ctx.moveTo((startPosition + endPoint*40 - diff*2), heightCtx - diff/2);
    ctx.lineTo((startPosition + endPoint*40), heightCtx);
    ctx.stroke();

    input.style.left = startPosition + (startPoint + cath1)*40 - 10 + "px";
    input.style.top = diff*6 + 14*(10 - diff) + "px";

    xNum = heightCtx-cath1*22;
    yNum = startPosition + (startPoint + cath1)*40 - 10;

}

function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
    if (typeof stroke == "undefined" ) {
        stroke = true;
    }
    if (typeof radius === "undefined") {
        radius = 5;
    }
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    if (stroke) {
        ctx.stroke();
    }
    if (fill) {
        ctx.fill();
    }
}

window.onload = function () {
    start();
}