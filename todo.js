var list = document.querySelector('ul');
list.addEventListener('click', function (e) {
    if(e.target.tagName === "LI") {
       e.target.classList.toggle('checked');
    } else if(e.target.tagName === "SPAN") {
       var div = e.target.parentNode;
       div.remove();
    }
}, false);

function newElement() {
    var li = document.createElement('li');
    var inpVal = document.getElementById('toDoEl').value;
    var inpv = document.createTextNode(inpVal);
    li.appendChild(inpv);
    if(inpVal == "") {
       alert("Введите текст!!!");
    } else {
       document.getElementById('list').appendChild(li);
    }
    document.getElementById('toDoEl').value = "";
    var add = document.createElement('SPAN');
    var del = document.createTextNode("Удалить");
    add.className = "close";
    add.appendChild(del);
    li.appendChild(add);
}