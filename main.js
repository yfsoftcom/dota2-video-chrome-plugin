function httpRequest(callback) {
  var url = 'https://v.douyu.com/author/rZwYaYPeqwbK/catelist/%7B1%7D?page=1&short=0';
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
          callback(xhr.responseText);
      }
  }
  xhr.send();
}

var $ = function(id){
  return document.getElementById(id);
}

var errorTag = $('error');
var bodyTag = $('tbody')

httpRequest(function(body){
  var data = JSON.parse(body);
  if(data.error !== 0){
    errorTag.innerHTML = "Network Error";
    return;
  }
  var list = data.data.list;
  console.log(list);
  var html = "";
  for(var i = 0; i < 10 ; i++){
    var item = list[i];
    html = html +
            '<tr>' +
              '<td>' + i + '</td>' +
              '<td>' + item.title + '</td>' +
              '<td><a target="_blank" href="' + item.url + '">Go</a></td>' +
            '</tr>'
  }
  bodyTag.innerHTML = html;

})