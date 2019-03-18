
var x = prompt("Enter x");
var n = prompt("Enter n");
Number.parseInt (x);
Number.parseInt (n);
var result = Math.pow(x, n);
var div = document.createElement("div");
div.className = "alert";
div.innerHTML = x + "<h2>in power of n=</h2>" + n + "<h2>equals</h2>" + result;
document.body.appendChild(div);
