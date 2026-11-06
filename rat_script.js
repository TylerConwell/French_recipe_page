let squash = "squash"; // yellow
let eggplant = "eggplant"; // purple
let zucchini = "zucchini"; // green
let bellPepper = "bell pepper"; // red

// make a function to randomly select a veggie from the list and put in array
function getRandomVeggie(filledVeggieArray) {
    const veggies = [squash, eggplant, zucchini, bellPepper]; // array string list of the veggies
    let randomIndex = Math.floor(Math.random() * veggies.length);
    let counter = 0;
    filledVeggieArray = [];
    let currentVeggie = "";

    do {
        switch (veggies[randomIndex]) {
            case squash:
                console.log("squash (yellow)");
                currentVeggie = squash;
                filledVeggieArray.push(currentVeggie);
                break;
            case eggplant:
                console.log("eggplant (purple)");
                currentVeggie = eggplant;
                filledVeggieArray.push(currentVeggie);
                break;
            case zucchini:
                console.log("zucchini (green)");
                currentVeggie = zucchini;
                filledVeggieArray.push(currentVeggie);
                break;
            case bellPepper:
                console.log("bell pepper (red)");
                currentVeggie = bellPepper;
                filledVeggieArray.push(currentVeggie);
                break;
            default:
                console.log("no veggie selected");
        }

        counter++;
        randomIndex = Math.floor(Math.random() * veggies.length);
    } while (counter < 15);


    let simpleCounter = 0;
    // test that is for printing
    while (simpleCounter < 15) {
        console.log("array : " + filledVeggieArray[simpleCounter]);
        simpleCounter++;
    }

    return filledVeggieArray;
}

// making a function that will put a dot of the veg on the screen 
function createVeggieDot(randomVeggie) {
    // const dot = document.createElement("div");
    // dot.classList.add("veggie-dot");
    // dot.textContent = veggie;
    // document.body.appendChild(dot);

    let randCounter = 0;
    randomVeggie = [];


    while (randCounter < 10) {
        console.log("creating veggie dot for: " + randomVeggie[randCounter]);
        randCounter++;
    }

    return 0; // becasue i dont want to rewrite the array into random veggie i just wanted it for the array itself
}

// wait to show the alert so we can have the page loaded first
window.addEventListener("load", () => {
    requestAnimationFrame(() => {
        // tenSecStop();
        setTimeout(() => {
            console.log("starting");
            alert("OH BOY, time for some falling veggies");

            let randomVeggie = [];
            getRandomVeggie(randomVeggie);
            createVeggieDot(randomVeggie);
            console.log("all done");``
        }, 300);
    });
});
