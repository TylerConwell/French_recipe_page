function pleaseWork() {
    const veg = ["squash", "eggplant", "zucchini", "bell pepper"];
    let randomIndex = Math.floor(Math.random() * veg.length);
    let counter = 0;

    do {
        switch (veg[randomIndex]) {
            case "squash":
                console.log("squash"); 
                break;
            case "eggplant":
                console.log("eggplant");  
                break;
            case "zucchini":
                console.log("zucchini");  
                break;
            case "bell pepper":
                console.log("bell pepper");  
                break;
            default:
                console.log("no veggie selected");
        }


        // if (veg[randomIndex] === "squash") {
        //     console.log("squash");
        // } 
        
        // else if (veg[randomIndex] === "eggplant") {
        //     console.log("eggplant");
        // } 
        
        // else if (veg[randomIndex] === "zucchini") {
        //     console.log("zucchini");
        // } 
        
        // else if (veg[randomIndex] === "bell pepper") {
        //     console.log("bell pepper");
        // } 
        
        // else {
        //     console.log("no veggie selected");
        // }

        counter++;
        randomIndex = Math.floor(Math.random() * veg.length)

    } while (counter < 10);

}

pleaseWork();