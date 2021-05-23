var liste = document.getElementsByTagName("LI");
var i;
for (i = 0; i < liste.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    liste[i].appendChild(span);
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    };
}
var list = document.querySelector("ul");
list.addEventListener("click", function (ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
    }
}, false);
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("titeltext").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === "") {
        alert("Please write something!");
    }
    else {
        document.getElementById("mylist").appendChild(li);
    }
    document.getElementById("titeltext").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        };
        var count = document.querySelector("#count");
        count.innerHTML = liste.length;
    }
}
//# sourceMappingURL=script.js.map