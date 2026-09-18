let isScary = false;

function toggleScary() {

if (!isScary) {
        document.getElementById("cute-content").style.display = "none";
        document.getElementById("scary-content").style.display = "block";
        document.getElementById("scary-button").innerHTML = "☠ ESCAPE THE MONSTERS! ☠";
        isScary = true;
} else {
        document.getElementById("cute-content").style.display = "block";
        document.getElementById("scary-content").style.display = "none";
        document.getElementById("scary-button").innerHTML = "☠ ENTER IF YOU DARE! ☠";
        isScary = false;
    }
}

document.getElementById("scary-button").onclick = toggleScary;

