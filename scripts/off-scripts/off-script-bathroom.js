async function run() {
    offScriptMaker = await import("./off-script-maker.js");

    data = await offScriptMaker.fetchData(`../../assets/off-scripts/bathroom-and-shower.json`);
    element = offScriptMaker.createErrorElements();
    
    if (data) {
        element = offScriptMaker.createElements(data);
    }

    document.getElementById("off-script-bathroom").appendChild(element);
}

run();