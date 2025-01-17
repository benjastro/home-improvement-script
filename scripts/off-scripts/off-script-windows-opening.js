async function run() {
    offScriptMaker = await import("./off-script-maker.js");

    data = await offScriptMaker.fetchData(`${document.location.origin}/data/off-scripts/windows-opening.json`);
    element = offScriptMaker.createErrorElements();
    
    if (data) {
        element = offScriptMaker.createElements(data);
    }

    document.getElementById("off-script-windows-opening").appendChild(element);
}

run();