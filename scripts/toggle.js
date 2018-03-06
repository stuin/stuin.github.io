function show(id, press) {
	var div = document.getElementById(id);

	if(div.style.display == "flex") {
		div.style.display = "none";
		press.value = "Show";
	} else {
		div.style.display = "flex";
		press.value = "Hide";
	}
}

function load() {
	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function() {
			this.classList.toggle("active");
		    var panel = this.nextElementSibling;
		    if (panel.style.maxHeight) {
		      	panel.style.maxHeight = null;
		    } else {
		      	panel.style.maxHeight = panel.scrollHeight + "px";
		    }
		});
	}
}