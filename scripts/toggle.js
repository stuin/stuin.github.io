function show(id, press) {
	var div = document.getElementById(id);

	if(press.value == "Show") {
		div.style.display = "flex";
		press.value = "Hide";
	} else {
		div.style.display = "none";
		press.value = "Show";
	}
}