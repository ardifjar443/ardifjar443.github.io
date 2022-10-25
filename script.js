function myFunction() {
    var x = document.getElementById("text-content");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }

    var y = document.getElementById("content-down");
    if (y.style.display === "inline-block") {
        y.style.display = "none";
    } else {
        y.style.display = "inline-block";
    }

    var i = document.getElementById("content-up");
    if (i.style.display === "none") {
        i.style.display = "inline-block";
    } else {
        i.style.display = "none";
    }
}