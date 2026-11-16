
const canvas = document.getElementById("lasagnaCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}


function pasta (yAxis) {
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.fillRect(50, yAxis, 200, 100); // Draw a rectangle for the pasta layer
}


function paste (yAxis) {
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect(50, yAxis, 200, 100); // Draw a rectangle for the pasta layer
}


function parm (yAxis) {
    ctx.beginPath();
    ctx.fillStyle = "ivory";
    ctx.fillRect(50, yAxis, 200, 100); // Draw a rectangle for the pasta layer
}

// step- 1: resize the canvs before drawing the shapes in for loop
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

ctx.clearRect(0, 0, canvas.width, canvas.height); // placed here before the frame redraws

const funcArray = [parm, pasta, paste, pasta, paste, pasta]; // js literally lets you put functs in an arr

for (let i = 0; i < funcArray.length; i++) {
    let yCounter = 50 + (i * 30);
    funcArray[i](yCounter);
}

setTimeout(() => {
    canvas.classList.add("fade-out");
    setTimeout(() => {
        window.removeEventListener("resize", resizeCanvas);
        canvas.remove();
    }, 800);
}, 3000);

