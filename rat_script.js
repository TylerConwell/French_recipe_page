// using let to declare variables i will using in the terminal
let squash = "squash"; // yellow
let eggplant = "eggplant"; // purple
let zucchini = "zucchini"; // green
let bellPepper = "bell pepper"; // red

// making a wait func for the falling veggies
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// making an async func
async function tenSecStop() {
    await wait(10000);
    console.log("all done now");
}

// make a function to randomly select a veggie from the list
function getRandomVeggie(currentVeggie, ArgCounter) {
    const veggies = [squash, eggplant, zucchini, bellPepper]; // array string list of the veggies
    let randomIndex = Math.floor(Math.random() * veggies.length);
    let counter = 0, ArgCounter = 0;

    do {
        switch (veggies[randomIndex]) {
            case squash:
                console.log("squash (yellow)");
                return currentVeggie = squash;
            case eggplant:
                console.log("eggplant (purple)");
                return currentVeggie = eggplant;
            case zucchini:
                console.log("zucchini (green)");
                return currentVeggie = zucchini;
            case bellPepper:
                console.log("bell pepper (red)");
                return currentVeggie = bellPepper;
            default:
                console.log("no veggie selected");
        }

        counter++;
        counter = ArgCounter;
        randomIndex = Math.floor(Math.random() * veggies.length);
    } while (counter < 15);
}

// making a function that will put a dot of the veg on the screen 
function createVeggieDot(randomVeggie, randCounter) {
    // const dot = document.createElement("div");
    // dot.classList.add("veggie-dot");
    // dot.textContent = veggie;
    // document.body.appendChild(dot);

    console.log("randCounter is at : " + randCounter);
    randCounter++;

    while (randCounter < 10) {
        console.log("creating veggie dot for: " + randomVeggie);
        getRandomVeggie(randomVeggie);
    }
}




// wait to show the alert so we can have the page loaded first
window.addEventListener("load", () => {
    requestAnimationFrame(() => {
        // tenSecStop();
        setTimeout(() => {
            console.log("starting");
            alert("OH BOY, time for some falling veggies");
            const randomVeggie = getRandomVeggie();
            let randomCounter = getRandomVeggie();
            createVeggieDot(randomVeggie, randomCounter);
            console.log("all done");``
        }, 300);
    });
});


// getRandomVeggie();