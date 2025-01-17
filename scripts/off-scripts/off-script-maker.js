export async function fetchData(jsonUrl, finally_callback) {
    const response = await fetch(jsonUrl);

    if (!response.ok) {
        return false;
    }

    const data = await response.json();
    // returns json object
    const dataInJson = JSON.parse(JSON.stringify(data));

    return dataInJson;
}

export function createElements(jsonData) {
    let mainContainer = document.createElement("div");
    
    mainContainer.style.marginTop = "14px";
    mainContainer.style.marginBottom = "14px";
    

    let title = document.createElement("button");
    title.style.boxSizing = "border-box";
    title.style.padding = "10px";

    title.innerText = "Loading...";
    if ("name" in jsonData) {
        title.innerText = `${jsonData["name"]} - Off Script`;
    }

    mainContainer.appendChild(title);
    
    if (!("data" in jsonData)) {
        return mainContainer;
    }

    let container = document.createElement("ul");
    container.style.display = "none";

    title.onclick = () => {
        if (container.style.display == "block") {
            container.style.display = "none";
            return;
        }

        container.style.display = "block"   
    }

    let statements = jsonData["data"];

    statements.forEach(element => {
        let item = document.createElement("li");
        item.innerText = element;
        container.appendChild(item);
    });

    mainContainer.appendChild(container);

    return mainContainer;
}

export function createErrorElements() {
    let title = document.createElement("h2");
    title.innerText = "Panel - An Error occurred! please try again!";
    title.style.color = "red";

    return title;
}