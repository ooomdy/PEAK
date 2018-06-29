document.getElementById('button1').addEventListener('click', function(){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var myObj = JSON.parse(this.responseText);
          document.getElementById("demo").innerHTML = myObj[0].FirstName;
      }
  };
  var ADID = 'qry0sds';
  xmlhttp.open("GET", "http://localhost:8080/user/"+ADID, true);
  xmlhttp.send();
});

document.getElementById('button2').addEventListener('click', function(){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var myObj = JSON.parse(this.responseText);
          document.getElementById("demo").innerHTML = myObj[0].FirstName;
      }
  };
  var ADID = 'ryg5hyd';
  xmlhttp.open("GET", "http://localhost:8080/user/"+ADID, true);
  xmlhttp.send();
});
