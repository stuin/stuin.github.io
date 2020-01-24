var request = new XMLHttpRequest();
var data = [];
var widgets = [];

function processData(e) {
	if(request.readyState == 4 && request.status == 200) { 

		var allLines = request.responseText.split('\n');
		var repo = null;

		//Parse json data
		for (var i = 0, len = allLines.length; i < len; i++) {
			var line = allLines[i];

  			if(line.includes('"name":')) {
  				//Start new repo object
  				if(repo != null)
  					data.push(repo);
  				repo = [line.split('"')[3]];
  			}
  			if(line.includes('"html_url":') || line.includes('"updated_at":'))
  				repo.push(line.split('"')[3]);
		}
		data.push(repo);

		//Send data to each widget
		for (var i = 0, len = widgets.length; i < len; i++)
			showAct(widgets[i])
	}
}

function getData(user) {
	request.open('GET', "https://api.github.com/users/" + user + "/repos", true)
	request.send();
	//document.write("api.github.com/users/" + user + "/repos")
}

function show(repo, output) {
	widget = []
	widget.push(repo)
	widget.push(output)
	widgets.push(widget)

	document.getElementById(output).innerHTML = "<a class='norm'>".concat(repo, "</a>")
	document.getElementById(widget[1]).style = "height: 40px;"
}

function showAct(widget) {
	var out = [];

	for (var i = 0, len = data.length; i < len; i++) {
		if(data[i].includes(widget[0])) {
			out = data[i];
		}
	}

	var html = "<a class='norm' href=".concat(out[2], ">", out[0], "</a><div class='sub'><br>(Updated: ", out[3].split('T')[0], ")</div>")
	document.getElementById(widget[1]).innerHTML = html;
}

request.onreadystatechange = processData;