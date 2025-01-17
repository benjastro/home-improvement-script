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
    let title = document.createElement("h2");
    title.style.color = "DarkRed";
    title.innerText = "Loading...";
    if ("name" in jsonData) {
        title.innerText = `${jsonData["name"]} Rebuttals`;
    }

    mainContainer.appendChild(title);
    for (const key in jsonData) {
        if (key == "name") {
            continue;
        }

        let container = document.createElement("div");

        container.style.marginBottom = "10px"

        let button = document.createElement("button");

        button.style.boxSizing = "border-box";
        button.style.padding = "10px"

        let text = document.createElement("h3");
        text.innerText = jsonData[key]
        text.style.display = "none"

        button.style.display = "block"
        button.innerText = key
        button.onclick = () => {
            if (text.style.display == "block") {
                text.style.display = "none";
                return;
            }

            text.style.display = "block"   
        }

        container.appendChild(button)
        container.appendChild(text)

        mainContainer.appendChild(container)
    }

    return mainContainer;
}

export function createErrorElements() {
    let title = document.createElement("h2");
    title.innerText = "Panel - An error occurred! please try again!";
    title.style.color = "red";

    return title;
}