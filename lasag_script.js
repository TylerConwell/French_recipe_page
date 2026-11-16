
function pasta () {
    // making a new div for the pasta peice to be made
    const pasta = document.createElement("div");
    //testing
    pasta.innerText = "pasta";
    // document.body.appendChild(pasta);

    pasta.style.width = "100px";
    pasta.style.height = "20px";
    pasta.style.backgroundColor = "yellow";

    document.body.appendChild(pasta);
}


function paste () {
    // making the paste for the thicker part of the shape
    const paste = document.createElement("div");
    //test
    paste.innerText = "paste";
    document.body.appendChild(paste);
}


function parm () {
    // making the cheese on top
    const parm = document.createElement("div");
    //test
    parm.innerText = "parm";
    document.body.appendChild(parm);
}


const funcArray = [parm, pasta, paste, pasta, paste, pasta]; // js literally lets you put functs in an arr

for (let i = 0; i < funcArray.length; i++) {
    funcArray[i]();
}
