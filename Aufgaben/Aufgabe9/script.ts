var liste: HTMLCollectionOf<Element> = document.getElementsByTagName("LI");
var i: any;
for (i = 0; i < liste.length; i++) {
  var span: HTMLElement = document.createElement("SPAN");
  var txt: Text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  liste[i].appendChild(span);
}


var close: HTMLCollectionOf<Element> = document.getElementsByClassName("close");
var i: any;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function(): void {
    var div: any = this.parentElement;
    div.style.display = "none";
  };
}


var list: HTMLUListElement = document.querySelector("ul");
list.addEventListener("click", function(ev) {
  if (ev.target.tagName === "LI") {
    ev.target.classList.toggle("checked");
  }
}, false);


function newElement(): void {
  var li: HTMLLIElement = document.createElement("li");
  var inputValue: any = document.getElementById("titeltext").value;
  var t: Text = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("Please write something!");
    } else {
        document.getElementById("mylist").appendChild(li);
  }

  document.getElementById("titeltext").value = "";

  var span: HTMLElement = document.createElement("SPAN");
  var txt: Text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function(): void {
      var div: any = this.parentElement;
      div.style.display = "none";
    };
    var count: Element = document.querySelector("#count");
    count.innerHTML = liste.length;
  }
}