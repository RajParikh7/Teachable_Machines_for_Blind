var frame = captureVideoFrame('my-video', 'png');
 
// Show the image 
var img = document.getElementById('my-screenshot');
img.setAttribute('src', frame.dataUri);
 
// Upload the image 
var formData = new FormData();
formData.append('file', frame.blob, 'my-screenshot.' + frame.format);
 
// with plain JS 
var request = new XMLHttpRequest();
request.open('POST', '/api/upload', true);
request.setRequestHeader('Content-Type', 'application/multipart/form-data; charset=UTF-8');
request.send(formData);
 
// or with jQuery 
$.ajax({
    url: '/api/upload',
    method: 'POST',
    data: formData,
    processData: false,
    contentType: false
});