var request = new XMLHttpRequest();
request.onreadystatechange = processData;

var data = null;

function processData(e) {
	if(request.readyState == 4 && request.status == 200) { 
		var allLines = request.responseText.split('\n');
		var repo = null;

		for (var i = 0, len = allLines.length; i < len; i++) {
			var line = allLines[i];

  			if(line.includes('"name":')) {
  				if(repo != null)
  					data.push(repo);
  				repo = [line.split('"')[3]];
  			}
  			if(line.includes('"html_url":') || line.includes('"updated_at":'))
  				repo.push(line.split('"')[3]);
		}
	}
}

function getData(user) {
	request.open('GET', "api.github.com/users/" + user + "/repos", true)
	request.send();
}

function show(repo, widget) {
	var out = '';

	widget.innerHTML = out;
}