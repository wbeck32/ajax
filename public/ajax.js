(function() {

var request = new XMLHttpRequest();
var jsonDiv = document.createElement('div');

request.onload = function() {
    var oResponse = JSON.parse(this.responseText);
   jsonDiv.innerHTML = oResponse[0]['title'];
	document.body.appendChild(jsonDiv);
};

request.open("get", "http://localhost:3000/sample.json");
request.send();
})();