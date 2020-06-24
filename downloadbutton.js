

// dummy json data to save
var data = { x: 42, s: "hello, world", d: new Date() }

document.getElementById('myButton').onclick = function(event){

    var json = JSON.stringify(data),
    blob = new Blob([json], {type: "octet/stream"}),
    url = window.URL.createObjectURL(blob);
  
  	this.href = url;
    this.target = '_blank';
  	
  	// target filename
    this.download = 'my-download.json';
  
 
  
}