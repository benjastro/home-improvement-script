async function run() {
    offScriptMaker = await import("./off-script-maker.js");

    data = await offScriptMaker.fetchData(`${document.location.origin}/assets/off-scripts/roofing-opening.json`);
    element = offScriptMaker.createErrorElements();
    
    if (data) {
        element = offScriptMaker.createElements(data);
    }

    document.getElementById("off-script-roofing-opening").appendChild(element);
}

run();