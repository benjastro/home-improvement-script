async function run() {
    rebuttalMaker = await import("./rebuttal-maker.js");

    data = await rebuttalMaker.fetchData(`${document.location.origin}/assets/rebuttals/fear-of-loss.json`);
    element = rebuttalMaker.createErrorElements();
    
    if (data) {
        element = rebuttalMaker.createElements(data);
    }

    document.body.appendChild(element);
}

run();