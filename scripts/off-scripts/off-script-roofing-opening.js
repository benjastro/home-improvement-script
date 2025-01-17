async function run() {
    offScriptMaker = await import("./off-script-maker.js");

    const jsonUrl = "https://benjastro.github.io/home-improvement-script/data/off-scripts/roofing-opening.json";

    data = await offScriptMaker.fetchData(jsonUrl);
    element = offScriptMaker.createErrorElements();
    
    if (data) {
        element = offScriptMaker.createElements(data);
    }

    document.getElementById("off-script-roofing-opening").appendChild(element);
}

run();