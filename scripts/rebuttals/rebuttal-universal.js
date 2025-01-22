async function run() {
    rebuttalMaker = await import("./rebuttal-maker.js");

    let jsonUrl = "https://benjastro.github.io/home-improvement-script/data/rebuttals/universal.json";

    data = await rebuttalMaker.fetchData(jsonUrl);
    element = rebuttalMaker.createErrorElements();
    
    if (data) {
        element = rebuttalMaker.createElements(data);
    }

    document.body.appendChild(element);
}

run();
