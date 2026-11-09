let squash = "squash"; // yellow
let eggplant = "eggplant"; // purple
let zucchini = "zucchini"; // green
let bellPepper = "bell pepper"; // red

// make a function to randomly select a veggie from the list and put in array
function getRandomVeggie() {
    const veggies = [squash, eggplant, zucchini, bellPepper]; // array string list of the veggies
    let randomIndex = Math.floor(Math.random() * veggies.length);
    let counter = 0;
    const filledVeggieArray = [];
    let currentVeggie = "";
    let veggieLength = 15;

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
    } while (counter < veggieLength);
    return filledVeggieArray;
}

// making a function that will put a dot of the veg on the screen 
function createVeggieDot(randomVeggie) {
    let randCounter = 0;
    while (randCounter < randomVeggie.length) {
        console.log("creating veggie dot for: " + randomVeggie[randCounter]);

        // const dot = document.createElement("div");
        // dot.classList.add("veggie-dot");
        // dot.textContent = randomVeggie[randCounter];
        // document.body.appendChild(dot);

        switch (randomVeggie[randCounter]) {
            case squash:
                console.log("squash (yellow) has been created");
                break;
            case eggplant:
                console.log("eggplant (purple) has been created");
                break;
            case zucchini:
                console.log("zucchini (green) has been created");
                break;
            case bellPepper:
                console.log("bell pepper (red) has been created");
                break;
            default:
                console.log("no veggie selected");
        }

        randCounter++;
    }
    return 0;
}

// wait to show the alert so we can have the page loaded first
window.addEventListener("load", () => {
    requestAnimationFrame(() => {
        // tenSecStop();
        setTimeout(() => {
            console.log("starting");
            alert("OH BOY, time for some falling veggies");

            let randomVeggie = getRandomVeggie();
            createVeggieDot(randomVeggie);
            console.log("all done");``
        }, 300);
    });
});
