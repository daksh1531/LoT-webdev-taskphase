
var tasks = document.getElementsByTagName("LI");
var i;
for (i = 0; i < tasks.length; i++) {
  var span = document.createElement("SPAN");
  var text = document.createTextNode("X");
  span.className = "del";
  span.appendChild(text);
  tasks[i].appendChild(span);
}

var del = document.getElementsByClassName("del");
var i;
for (i = 0; i < del.length; i++) {
  del[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
function newElement()
{
  var count = 1;
  var li = document.createElement("li");
  var inputValue = document.getElementById("newTasks").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("UL").appendChild(li);
    localStorage.setItem("task"+count,inputValue)
    count++;
  }
  document.getElementById("newTasks").value = "";

  var span = document.createElement("SPAN");
  var text = document.createTextNode("X");
  span.className = "del";
  span.appendChild(text);
  li.appendChild(span);


  for (i = 0; i < del.length; i++)
  {
    del[i].onclick = function()
    {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
