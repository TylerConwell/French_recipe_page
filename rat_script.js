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
function getRandomVeggie() {
    const veggies = [squash, eggplant, zucchini, bellPepper]; // array list of the veggies
    let randomIndex = Math.floor(Math.random() * veggies.length);
    let counter = 0;

    do {
        switch (veggies[randomIndex]) {
            case squash:
                console.log("squash (yellow)");
                break;
            case eggplant:
                console.log("eggplant (purple)");
                break;
            case zucchini:
                console.log("zucchini (green)");
                break;
            case bellPepper:
                console.log("bell pepper (red)");
                break;
            default:
                console.log("no veggie selected");
        }

        counter++;
        randomIndex = Math.floor(Math.random() * veggies.length);
    } while (counter < 15);
}



// wait to show the alert so we can have the page loaded first
window.addEventListener("load", () => {
    requestAnimationFrame(() => {
        // tenSecStop();
        setTimeout(() => {
            console.log("starting");
            alert("OH BOY, time for some falling veggies");
            getRandomVeggie();
            console.log("all done");
        }, 300);
    });
});


// getRandomVeggie();