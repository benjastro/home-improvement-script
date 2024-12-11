let button = document.createElement("button");
button.id = "homepage_btn";
button.innerText = "Homepage";
button.onclick = () => {
    if ((confirm("Are you sure you want to go back to the Homepage?"))) {
        window.location.href = "../index.html";
    }
};
document.body.appendChild(button)