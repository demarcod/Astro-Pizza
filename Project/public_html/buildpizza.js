window.addEventListener("load", init);

function init()
{
	document.getElementById("pepperoni").addEventListener("dragstart", pepperoni_dragstart);
	document.getElementById("pepperoni").setAttribute('draggable', "true");
	document.getElementById("tomatoes").addEventListener("dragstart", tomatoes_dragstart);
	document.getElementById("tomatoes").setAttribute('draggable', "true");
	document.getElementById("peppers").addEventListener("dragstart", peppers_dragstart);
	document.getElementById("peppers").setAttribute('draggable', "true");
	document.getElementById("olives").addEventListener("dragstart", olives_dragstart);
	document.getElementById("olives").setAttribute('draggable', "true");
	document.getElementById("bacon").addEventListener("dragstart", bacon_dragstart);
	document.getElementById("bacon").setAttribute('draggable', "true");
	document.getElementById("pineapple").addEventListener("dragstart", pineapple_dragstart);
	document.getElementById("pineapple").setAttribute('draggable', "true");
	document.getElementById("ham").addEventListener("dragstart", ham_dragstart);
	document.getElementById("ham").setAttribute('draggable', "true");
	document.getElementById("mushrooms").addEventListener("dragstart", mushrooms_dragstart);
	document.getElementById("mushrooms").setAttribute('draggable', "true");
	document.getElementById("transparent").addEventListener("drop", transparent_drop);
	document.getElementById("transparent").addEventListener("dragover", transparent_dragover);
}

var topping = "";
var toppingcount = 0;

function pepperoni_dragstart(evt)
{
	evt.dataTransfer.setData("text/plain", topping);
	topping = "pepperoni";
}

function tomatoes_dragstart(evt)
{
	evt.dataTransfer.setData("text/plain", topping);
	topping = "tomatoes";
}

function peppers_dragstart(evt)
{
	evt.dataTransfer.setData("text/plain", topping);
	topping = "peppers";
}

function olives_dragstart(evt)
{
	evt.dataTransfer.setData("text/plain", topping);
	topping = "olives";
}

function bacon_dragstart(evt)
{
	evt.dataTransfer.setData("text/plain", topping);
	topping = "bacon";
}

function pineapple_dragstart(evt)
{
	evt.dataTransfer.setData("text/plain", topping);
	topping = "pineapple";
}

function ham_dragstart(evt)
{
	evt.dataTransfer.setData("text/plain", topping);
	topping = "ham";
}

function mushrooms_dragstart(evt)
{
	evt.dataTransfer.setData("text/plain", topping);
	topping = "mushrooms";
}

function transparent_drop(evt)
{
	evt.preventDefault();
	document.getElementById("transparent").style.zIndex += 1;
	document.getElementById(topping).innerHTML =
		document.getElementById(topping).innerHTML.replace(/125px./g, "400px");
	document.getElementById("transparent").style.zIndex += 1;
	
	var table = document.getElementById("pizzaTable");
	var row = table.insertRow(toppingcount);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(0);
	var cell3 = row.insertCell(0);
	var cell4 = row.insertCell(0);

	table.style.border = "none";
	row.style.border = "none";
	cell1.style.border = "none";
	cell4.style.border = "none";

	cell2.style.visibility = "hidden";
	cell3.style.visibility = "hidden";

	cell1.innerHTML = '<button onclick=removeTopping(this.parentNode.parentNode)>Remove</button>';
	cell2.innerHTML = String(getComputedStyle(document.getElementById(topping)).getPropertyValue('right'));
	cell3.innerHTML = String(getComputedStyle(document.getElementById(topping)).getPropertyValue('bottom'));
	cell4.innerHTML = topping;

	document.getElementById(topping).style.right = String(getComputedStyle(document.getElementById("pizza")).getPropertyValue('right'));
	document.getElementById(topping).style.bottom = String(getComputedStyle(document.getElementById("pizza")).getPropertyValue('bottom'));
	document.getElementById(topping).style.zIndex += 1;
	toppingcount += 1;
	topping = "";
}

function removeTopping(x){
	document.getElementById("pizzaTable").deleteRow(x.rowIndex);
	document.getElementById(x.firstChild.innerHTML).innerHTML =
		document.getElementById(x.firstChild.innerHTML).innerHTML.replace(/\d./g, "125px");
	document.getElementById(x.firstChild.innerHTML).style.zIndex += 1;
	document.getElementById(x.firstChild.innerHTML).style.right = String(x.childNodes[2].innerHTML);
	document.getElementById(x.firstChild.innerHTML).style.bottom = String(x.childNodes[1].innerHTML);

	toppingcount -= 1;
}

function transparent_dragover(evt){
	evt.preventDefault();
}