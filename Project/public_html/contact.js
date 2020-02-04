function openForm() {
	document.getElementById("myForm").style.display = "block";
}

function closeForm() {
	document.getElementById("myForm").style.display = "none";
} 

function ajaxfunction() {
	var ajaxRequest = null;
	
	if (window.XMLHttpRequest)
		ajaxRequest = new XMLHttpRequest();
	else if (window.ActiveObject)
		ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
	else return false;
	
	
	//give feedback to user
	ajaxRequest.onreadystatechange = function(){
		//var resp = Document.getElementById("popbutton");
		//resp.innerHTML = ajaxRequest.responseText;
		alert("Message has been sent! We'll get back to you soon!");
    }
	
	ajaxRequest.open('GET', "ajax.php", true);
	ajaxRequest.send(null);
	
}