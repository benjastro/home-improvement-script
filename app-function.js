pro_names = new Map();

pro_names.set("alenco", {
    "label": "Alenco",
    "entry_path": "./alenco/index.html",
});

pro_names.set("capital-construction", {
    "label": "Capital Construction",
    "entry_path": "./capital-construction/index.html",
});

pro_names.set("esler", {
    "label": "Esler",
    "entry_path": "./esler/index.html",
});

pro_names.set("express-flooring", {
    "label": "Express Flooring",
    "entry_path": "./express-flooring/index.html",
});

pro_names.set("exterior-pro", {
    "label": "Exterior Pro",
    "entry_path": "./exterior-pro/index.html",
});

pro_names.set("long-home", {
    "label": "Long Home",
    "entry_path": "./long-home/index.html",
});

pro_names.set("spantronics", {
    "label": "Spantronics",
    "entry_path": "./spantronics/index.html",
});

pro_names.set("victor-roofing", {
    "label": "Victor Roofing",
    "entry_path": "./victor-roofing/index.html",
});

pro_names.set("windows-nation", {
    "label": "Windows Nation",
    "entry_path": "./windows-nation/index.html",
});

pro_names.set("windows-plus", {
    "label": "Windows Plus",
    "entry_path": "./windows-plus/index.html",
});

pro_names.set("your-home-improvement", {
    "label": "Your Home Improvement",
    "entry_path": "./your-home-improvement/index.html",
});

pro_names.forEach((value, key, map) => {
    let button = document.createElement("button");
    button.innerText = value.label
    button.onclick = () => {
        window.location.href = value.entry_path;
    };
    let listElement = document.createElement("li")
    document.getElementById("menu").appendChild(button)
});