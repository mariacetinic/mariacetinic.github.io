// när man trycker på en knapp ska den ändra färg, göra variabel och funktion
//document.body.style.background-color = "red";


var showPage = "yellow";
changePageColor();

function showBluePage() {
    showPage = "blue";
    changePageColor();
}

function showOrangePage() {
    showPage = "orange";
    changePageColor();
}

function changePageColor() {
    
    if (showPage == "blue") {
        document.body.style.backgroundColor = showPage;
    } else if (showPage == "orange") {
        document.body.style.backgroundColor = showPage;
    } else {
        document.body.style.backgroundColor = showPage;
    }
}




