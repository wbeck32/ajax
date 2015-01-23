(function(){

var request = new XMLHttpRequest();

request.onload = function() {
    var oResponse = JSON.parse(this.responseText);

    var myPhoto = oResponse.photos.photo;

    for(var ph in myPhoto) {
        document.write('<div><img src="https://c2.staticflickr.com/'+myPhoto[ph].farm+'/'+myPhoto[ph].server+'/'+myPhoto[ph].id+'_'+myPhoto[ph].secret+'_n.jpg"></div>');
	}
};

request.open("get", "https://api.flickr.com/services/rest?method=flickr.people.getPublicPhotos&api_key=502bddfc0a6ded77873b2aa01dfafec8&user_id=37718676688@N01&format=json&nojsoncallback=1");
request.send();

})();

//https://c2.staticflickr.com/4/3348/5767130600_fbf3edce37_n.jpg