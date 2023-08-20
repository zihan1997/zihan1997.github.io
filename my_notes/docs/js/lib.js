// get current url
function getCurrentUrl() {
    return window.location.href;
}

// check if current tab is portofolio
function isPortofolio() {
    return getCurrentUrl().includes("Portofolio");
}

// if current tab is portofolio, then erease content to blank
if (isPortofolio()) {

    // first blank the content
    document.body.innerHTML = "";
    // then make screen dark
    document.body.style.backgroundColor = "black";
    window.location.href = "https://github.com/zihan1997/zihan1997.github.io";

}