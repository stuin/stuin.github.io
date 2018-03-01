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