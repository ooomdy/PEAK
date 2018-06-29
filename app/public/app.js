document.getElementById('button1').addEventListener('click', function(){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("firstDiv").classList.add('hidden');
        document.getElementById("firstDiv").classList.remove('visible');

        document.getElementById("secondDiv").classList.remove('hidden');
          var myObj = JSON.parse(this.responseText);
          document.getElementById("first").innerHTML = myObj[0].FirstName;
          document.getElementById("last").innerHTML = myObj[0].LastName;
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
        document.getElementById("firstDiv").classList.add('hidden');
        document.getElementById("firstDiv").classList.remove('visible');

        document.getElementById("secondDiv").classList.remove('hidden');
          var myObj = JSON.parse(this.responseText);
          document.getElementById("first").innerHTML = myObj[0].FirstName;
          document.getElementById("last").innerHTML = myObj[0].LastName;
      }
  };
  var ADID = 'ryg5hyd';
  xmlhttp.open("GET", "http://localhost:8080/user/"+ADID, true);
  xmlhttp.send();
});








// document.querySelector('#nominate').innerHTML = "Hello World";
//
// document.getElementById('button1').addEventListener('click', function(){
//   console.log('This button was clicked');
// });
