var UPSer = 'qry0sds';

window.onload = function() {
  console.log('This ran.');
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    var sel = document.getElementById('state-dropdown');
    var fragment = document.createDocumentFragment();

      if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        myObj.forEach(function(myObj, index) {
          var opt = document.createElement('option');
          opt.innerHTML = myObj.State;
          opt.value = myObj.State;
          fragment.appendChild(opt);
        });
        sel.appendChild(fragment);
      }
  };
  xmlhttp.open("GET", "http://localhost:8080/state/", true);
  xmlhttp.send();
}

document.getElementById('look').addEventListener('click', function(){
  console.log('One ran.');
  // one
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {

      if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        myObj.forEach(function(myObj, index) {
          var label= document.createElement("label");
          var description = document.createTextNode(myObj.FirstName);
          var checkbox = document.createElement("input");

          checkbox.type = "checkbox";    // make the element a checkbox
          checkbox.name = myObj.FirstName;      // give it a name we can check on the server side
          checkbox.value = myObj.FirstName;

          label.appendChild(checkbox);   // add the box to the element
          label.appendChild(description);

          document.getElementById('pre-inState').appendChild(label);
          linebreak = document.createElement("br");
          document.getElementById('pre-inState').appendChild(linebreak);
        });

      }
  };
  xmlhttp.open("GET", "http://localhost:8080/preloaderIn/", true);
  xmlhttp.send();


  // two
  console.log('Two ran.');
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        myObj.forEach(function(myObj, index) {
          var label= document.createElement("label");
          var description = document.createTextNode(myObj.FirstName);
          var checkbox = document.createElement("input");

          checkbox.type = "checkbox";    // make the element a checkbox
          checkbox.name = myObj.FirstName;      // give it a name we can check on the server side
          checkbox.value = myObj.FirstName;

          label.appendChild(checkbox);   // add the box to the element
          label.appendChild(description);

          document.getElementById('pre-outState').appendChild(label);
          linebreak = document.createElement("br");
          document.getElementById('pre-outState').appendChild(linebreak);
        });

      }
  };
  xmlhttp.open("GET", "http://localhost:8080/preloaderOut/", true);
  xmlhttp.send();
  // // three
  // console.log('Three ran.');
  // var xmlhttp = new XMLHttpRequest();
  // xmlhttp.onreadystatechange = function() {
  //   var sel = document.getElementById('state-dropdown');
  //   var fragment = document.createDocumentFragment();
  //
  //     if (this.readyState == 4 && this.status == 200) {
  //       var myObj = JSON.parse(this.responseText);
  //       myObj.forEach(function(myObj, index) {
  //         var opt = document.createElement('option');
  //         opt.innerHTML = myObj.State;
  //         opt.value = myObj.State;
  //         fragment.appendChild(opt);
  //       });
  //       sel.appendChild(fragment);
  //     }
  // };
  // xmlhttp.open("GET", "http://localhost:8080/state/", true);
  // xmlhttp.send();
  // // four
  // console.log('Four ran.');
  // var xmlhttp = new XMLHttpRequest();
  // xmlhttp.onreadystatechange = function() {
  //   var sel = document.getElementById('state-dropdown');
  //   var fragment = document.createDocumentFragment();
  //
  //     if (this.readyState == 4 && this.status == 200) {
  //       var myObj = JSON.parse(this.responseText);
  //       myObj.forEach(function(myObj, index) {
  //         var opt = document.createElement('option');
  //         opt.innerHTML = myObj.State;
  //         opt.value = myObj.State;
  //         fragment.appendChild(opt);
  //       });
  //       sel.appendChild(fragment);
  //     }
  // };
  // xmlhttp.open("GET", "http://localhost:8080/state/", true);
  // xmlhttp.send();

});
