
const canvas = document.getElementById("lasagnaCanvas");
const ctx = canvas.getContext("2d");

// global for the pasta, paste and parm. dont wanna change every time
let globParm = 15;
let globPaste = 30;
let globPasta = 140;

const layers = [];
const layerWidth = window.innerWidth;
const layerHeight = 300;



// creating the initial stack 

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}


function pasta (yAxis) {
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.fillRect(0, yAxis, canvas.width, globPasta); // Draw a rectangle for the pasta layer

    console.log("pasta");
}


function paste (yAxis) {
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect(0, yAxis, canvas.width, globPaste); // Draw a rectangle for the pasta layer

    console.log("paste");
}


function parm (yAxis) {
    ctx.beginPath();
    ctx.fillStyle = "ivory";
    ctx.fillRect(0, yAxis, canvas.width, globParm); // Draw a rectangle for the pasta layer

    console.log("parm");
}

// step- 1: resize the canvs before drawing the shapes in for loop
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

ctx.clearRect(0, 0, canvas.width, canvas.height); // placed here before the frame redraws

const funcArray = [parm, pasta, paste, pasta, paste, pasta, paste, pasta]; // js literally lets you put functs in an arr
let yCounter = 0;

for (let i = 0; i < funcArray.length; i++) {

    console.log("were displaying");
    console.log(funcArray[i]);

    funcArray[i](yCounter);


    if ((i % 2) == 0) { // i is 0, 2, 4, 6

        console.log("in the even part");
        console.log(i);

        if (i == 0) {
            yCounter = globParm; // space for the parm
            console.log("the ycounter is at ");
            console.log(yCounter);
            console.log("when i = 0 for the spacing");
        }

        else if (i > 0) {
            yCounter = yCounter + globPaste; // space for the sauce

            console.log("the ycounter is at ");
            console.log(yCounter);
            console.log("for the sauce");
        }
    }


    else if ((i % 2) == 1) { // i is 1, 3, 5, 7
        console.log("in the odd part");
        console.log(i);

        yCounter = yCounter + globPasta; // space for the pasta

        console.log("the ycounter is at ");
        console.log(yCounter);

    }
   
}

setTimeout(() => {
    canvas.classList.add("fade-out");
    setTimeout(() => {
        window.removeEventListener("resize", resizeCanvas);
        canvas.remove();
    }, 800);
}, 3000);
