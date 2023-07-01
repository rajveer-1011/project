//clock
var gettime = function(){
    document.getElementById("indiatime").innerHTML = new Date() .toLocaleString("en-US",{timezone:'Asia/Kolkata', timeStyle:'medium', hourCycle:'h12'});
}
gettime();
setInterval(gettime,1000);

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.getElementById("dd").innerHTML = today;

//counter
let count=1;
function counter()
{
    count++;
    updateCount();
    updateColor();
}
function updateCount()
{
    document.getElementById("count").innerHTML = count;
}
function updateColor()
{
    if(count%2===0)
        document.getElementById("indiatime").style.color = "green";
    else
        document.getElementById("indiatime").style.color = "red";
}
document.getElementById("indiatime").style.color = "red";

//theme
let time = new Date();
let hr = time.getHours();
if(hr>=17){
    // history.go(0);  uncomment for automatic refresh option 
    theme();
    star();
}
else{
    star();
}
function theme() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    const rotate = document.getElementById('rotate');
    rotate.style.transform = 'rotate(180deg)';
 }

 function themet() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

 function star() {
    var x = document.getElementById("star");
    var y = document.getElementById("cloud");
    x.style.display = "block";
    y.style.display = "none";

}

function cloud() {
    var x = document.getElementById("star");
    var y = document.getElementById("cloud");
    x.style.display = "none";
    y.style.display = "block";
}


