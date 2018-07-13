import $ from 'jquery';

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







document.getElementById('button1').addEventListener('click', function(){
  document.getElementById("secondDiv").classList.remove('visible');
  document.getElementById("secondDiv").classList.remove('hidden');
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("secondDiv").classList.add('hidden');
        document.getElementById("secondDiv").classList.remove('visible');

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


document.getElementById('mainToInfo').addEventListener('click', function(){
  document.getElementById("secondDiv").classList.add('hidden');
  document.getElementById("thirdDiv").classList.remove('hidden');
  document.getElementById("save").classList.remove('hidden');
  document.getElementById("go-back").classList.remove('hidden');
});



document.getElementById('back').addEventListener('click', function(){
  document.getElementById("thirdDiv").classList.add('hidden');
  document.getElementById("secondDiv").classList.remove('hidden');
  document.getElementById("save").classList.add('hidden');
  document.getElementById("go-back").classList.add('hidden');
});





document.getElementById('n25').addEventListener('click', function(){if($('#n25').hasClass('calendar__green')) {document.getElementById('n25').classList.remove('calendar__green');document.getElementById('n25').classList.add('calendar__red');} else{document.getElementById('n25').classList.remove('calendar__red');document.getElementById('n25').classList.add('calendar__green');}});
document.getElementById('n26').addEventListener('click', function(){if($('#n26').hasClass('calendar__green')) {document.getElementById('n26').classList.remove('calendar__green');document.getElementById('n26').classList.add('calendar__red');} else{document.getElementById('n26').classList.remove('calendar__red');document.getElementById('n26').classList.add('calendar__green');}});
document.getElementById('n27').addEventListener('click', function(){if($('#n27').hasClass('calendar__green')) {document.getElementById('n27').classList.remove('calendar__green');document.getElementById('n27').classList.add('calendar__red');} else{document.getElementById('n27').classList.remove('calendar__red');document.getElementById('n27').classList.add('calendar__green');}});
document.getElementById('n28').addEventListener('click', function(){if($('#n28').hasClass('calendar__green')) {document.getElementById('n28').classList.remove('calendar__green');document.getElementById('n28').classList.add('calendar__red');} else{document.getElementById('n28').classList.remove('calendar__red');document.getElementById('n28').classList.add('calendar__green');}});
document.getElementById('n29').addEventListener('click', function(){if($('#n29').hasClass('calendar__green')) {document.getElementById('n29').classList.remove('calendar__green');document.getElementById('n29').classList.add('calendar__red');} else{document.getElementById('n29').classList.remove('calendar__red');document.getElementById('n29').classList.add('calendar__green');}});
document.getElementById('n30').addEventListener('click', function(){if($('#n30').hasClass('calendar__green')) {document.getElementById('n30').classList.remove('calendar__green');document.getElementById('n30').classList.add('calendar__red');} else{document.getElementById('n30').classList.remove('calendar__red');document.getElementById('n30').classList.add('calendar__green');}});
document.getElementById('d1').addEventListener('click', function(){if($('#d1').hasClass('calendar__green')) {document.getElementById('d1').classList.remove('calendar__green');document.getElementById('d1').classList.add('calendar__red');} else{document.getElementById('d1').classList.remove('calendar__red');document.getElementById('d1').classList.add('calendar__green');}});

document.getElementById('d2').addEventListener('click', function(){if($('#d2').hasClass('calendar__green')) {document.getElementById('d2').classList.remove('calendar__green');document.getElementById('d2').classList.add('calendar__red');} else{document.getElementById('d2').classList.remove('calendar__red');document.getElementById('d2').classList.add('calendar__green');}});
document.getElementById('d3').addEventListener('click', function(){if($('#d3').hasClass('calendar__green')) {document.getElementById('d3').classList.remove('calendar__green');document.getElementById('d3').classList.add('calendar__red');} else{document.getElementById('d3').classList.remove('calendar__red');document.getElementById('d3').classList.add('calendar__green');}});
document.getElementById('d4').addEventListener('click', function(){if($('#d4').hasClass('calendar__green')) {document.getElementById('d4').classList.remove('calendar__green');document.getElementById('d4').classList.add('calendar__red');} else{document.getElementById('d4').classList.remove('calendar__red');document.getElementById('d4').classList.add('calendar__green');}});
document.getElementById('d5').addEventListener('click', function(){if($('#d5').hasClass('calendar__green')) {document.getElementById('d5').classList.remove('calendar__green');document.getElementById('d5').classList.add('calendar__red');} else{document.getElementById('d5').classList.remove('calendar__red');document.getElementById('d5').classList.add('calendar__green');}});
document.getElementById('d6').addEventListener('click', function(){if($('#d6').hasClass('calendar__green')) {document.getElementById('d6').classList.remove('calendar__green');document.getElementById('d6').classList.add('calendar__red');} else{document.getElementById('d6').classList.remove('calendar__red');document.getElementById('d6').classList.add('calendar__green');}});
document.getElementById('d7').addEventListener('click', function(){if($('#d7').hasClass('calendar__green')) {document.getElementById('d7').classList.remove('calendar__green');document.getElementById('d7').classList.add('calendar__red');} else{document.getElementById('d7').classList.remove('calendar__red');document.getElementById('d7').classList.add('calendar__green');}});
document.getElementById('d8').addEventListener('click', function(){if($('#d8').hasClass('calendar__green')) {document.getElementById('d8').classList.remove('calendar__green');document.getElementById('d8').classList.add('calendar__red');} else{document.getElementById('d8').classList.remove('calendar__red');document.getElementById('d8').classList.add('calendar__green');}});

document.getElementById('d9').addEventListener('click', function(){if($('#d9').hasClass('calendar__green')) {document.getElementById('d9').classList.remove('calendar__green');document.getElementById('d9').classList.add('calendar__red');} else{document.getElementById('d9').classList.remove('calendar__red');document.getElementById('d9').classList.add('calendar__green');}});
document.getElementById('d10').addEventListener('click', function(){if($('#d10').hasClass('calendar__green')) {document.getElementById('d10').classList.remove('calendar__green');document.getElementById('d10').classList.add('calendar__red');} else{document.getElementById('d10').classList.remove('calendar__red');document.getElementById('d10').classList.add('calendar__green');}});
document.getElementById('d11').addEventListener('click', function(){if($('#d11').hasClass('calendar__green')) {document.getElementById('d11').classList.remove('calendar__green');document.getElementById('d11').classList.add('calendar__red');} else{document.getElementById('d11').classList.remove('calendar__red');document.getElementById('d11').classList.add('calendar__green');}});
document.getElementById('d12').addEventListener('click', function(){if($('#d12').hasClass('calendar__green')) {document.getElementById('d12').classList.remove('calendar__green');document.getElementById('d12').classList.add('calendar__red');} else{document.getElementById('d12').classList.remove('calendar__red');document.getElementById('d12').classList.add('calendar__green');}});
document.getElementById('d13').addEventListener('click', function(){if($('#d13').hasClass('calendar__green')) {document.getElementById('d13').classList.remove('calendar__green');document.getElementById('d13').classList.add('calendar__red');} else{document.getElementById('d13').classList.remove('calendar__red');document.getElementById('d13').classList.add('calendar__green');}});
document.getElementById('d14').addEventListener('click', function(){if($('#d14').hasClass('calendar__green')) {document.getElementById('d14').classList.remove('calendar__green');document.getElementById('d14').classList.add('calendar__red');} else{document.getElementById('d14').classList.remove('calendar__red');document.getElementById('d14').classList.add('calendar__green');}});
document.getElementById('d15').addEventListener('click', function(){if($('#d15').hasClass('calendar__green')) {document.getElementById('d15').classList.remove('calendar__green');document.getElementById('d15').classList.add('calendar__red');} else{document.getElementById('d15').classList.remove('calendar__red');document.getElementById('d15').classList.add('calendar__green');}});

document.getElementById('d16').addEventListener('click', function(){if($('#d16').hasClass('calendar__green')) {document.getElementById('d16').classList.remove('calendar__green');document.getElementById('d16').classList.add('calendar__red');} else{document.getElementById('d16').classList.remove('calendar__red');document.getElementById('d16').classList.add('calendar__green');}});
document.getElementById('d17').addEventListener('click', function(){if($('#d17').hasClass('calendar__green')) {document.getElementById('d17').classList.remove('calendar__green');document.getElementById('d17').classList.add('calendar__red');} else{document.getElementById('d17').classList.remove('calendar__red');document.getElementById('d17').classList.add('calendar__green');}});
document.getElementById('d18').addEventListener('click', function(){if($('#d18').hasClass('calendar__green')) {document.getElementById('d18').classList.remove('calendar__green');document.getElementById('d18').classList.add('calendar__red');} else{document.getElementById('d18').classList.remove('calendar__red');document.getElementById('d18').classList.add('calendar__green');}});
document.getElementById('d19').addEventListener('click', function(){if($('#d19').hasClass('calendar__green')) {document.getElementById('d19').classList.remove('calendar__green');document.getElementById('d19').classList.add('calendar__red');} else{document.getElementById('d19').classList.remove('calendar__red');document.getElementById('d19').classList.add('calendar__green');}});
document.getElementById('d20').addEventListener('click', function(){if($('#d20').hasClass('calendar__green')) {document.getElementById('d20').classList.remove('calendar__green');document.getElementById('d20').classList.add('calendar__red');} else{document.getElementById('d20').classList.remove('calendar__red');document.getElementById('d20').classList.add('calendar__green');}});
document.getElementById('d21').addEventListener('click', function(){if($('#d21').hasClass('calendar__green')) {document.getElementById('d21').classList.remove('calendar__green');document.getElementById('d21').classList.add('calendar__red');} else{document.getElementById('d21').classList.remove('calendar__red');document.getElementById('d21').classList.add('calendar__green');}});
document.getElementById('d22').addEventListener('click', function(){if($('#d22').hasClass('calendar__green')) {document.getElementById('d22').classList.remove('calendar__green');document.getElementById('d22').classList.add('calendar__red');} else{document.getElementById('d22').classList.remove('calendar__red');document.getElementById('d22').classList.add('calendar__green');}});

document.getElementById('d23').addEventListener('click', function(){if($('#d23').hasClass('calendar__green')) {document.getElementById('d23').classList.remove('calendar__green');document.getElementById('d23').classList.add('calendar__red');} else{document.getElementById('d23').classList.remove('calendar__red');document.getElementById('d23').classList.add('calendar__green');}});
document.getElementById('d24').addEventListener('click', function(){if($('#d24').hasClass('calendar__green')) {document.getElementById('d24').classList.remove('calendar__green');document.getElementById('d24').classList.add('calendar__red');} else{document.getElementById('d24').classList.remove('calendar__red');document.getElementById('d24').classList.add('calendar__green');}});







document.getElementById('save-btn').addEventListener('click', function(){
  var bool1 = false;
  var bool2 = false;

  if(document.getElementById("role-selector-both").checked == true || document.getElementById("role-selector-preloader").checked == true || document.getElementById("role-selector-driverhelper").checked == true){
    bool1 = true;
    document.getElementById('position-form').classList.remove('color-change');
    document.getElementById('header-to-change').classList.remove('color-change');
  }
  else {
    document.getElementById('position-form').classList.add('color-change');
    document.getElementById('header-to-change').classList.add('color-change');
    document.getElementById("header-to-change").innerText = 'Please Complete the Red Text Areas';
  }
  if(document.getElementById("travel-yes").checked == true || document.getElementById("travel-no").checked == true){
    bool2 = true;
    document.getElementById('travel-form').classList.remove('color-change');
  }
  else {
    document.getElementById('travel-form').classList.add('color-change');
    document.getElementById('header-to-change').classList.add('color-change');
    document.getElementById("header-to-change").innerText = 'Please Complete the Red Text Areas';
  }
  if(bool1 == true && bool2 == true){
    document.getElementById('header-to-change').classList.remove('color-change');
    document.getElementById('travel-form').classList.remove('color-change');
    document.getElementById('position-form').classList.remove('color-change');
  }






  // var xmlhttp = new XMLHttpRequest();
  // xmlhttp.onreadystatechange = function() {
  //     if (this.readyState == 4 && this.status == 200) {
  //       document.getElementById("firstDiv").classList.add('hidden');
  //       document.getElementById("firstDiv").classList.remove('visible');
  //
  //       document.getElementById("secondDiv").classList.remove('hidden');
  //         var myObj = JSON.parse(this.responseText);
  //         document.getElementById("first").innerHTML = myObj[0].FirstName;
  //         document.getElementById("last").innerHTML = myObj[0].LastName;
  //     }
  // };
  // var ADID = 'ryg5hyd';
  // xmlhttp.open("GET", "http://localhost:8080/user/"+ADID, true);
  // xmlhttp.send();
});













//
// // document.getElementById('n27').addEventListener('click', function(){if($('#n27').hasClass('calendar__green')) {      document.getElementById('n26').classList.remove('calendar__green');document.getElementById('n26').classList.add('calendar__red');}else{document.getElementById('n27').classList.remove('calendar__red');document.getElementById('n27').classList.add('calendar__green');});
// document.getElementById('n28').addEventListener('click', function(){document.getElementById('n28').classList.remove('calendar__red');document.getElementById('n28').classList.add('calendar__green');});
// document.getElementById('n29').addEventListener('click', function(){document.getElementById('n29').classList.remove('calendar__red');document.getElementById('n29').classList.add('calendar__green');});
// document.getElementById('n30').addEventListener('click', function(){document.getElementById('n30').classList.remove('calendar__red');document.getElementById('n30').classList.add('calendar__green');});
// document.getElementById('n31').addEventListener('click', function(){document.getElementById('n31').classList.remove('calendar__red');document.getElementById('n31').classList.add('calendar__green');});
// document.getElementById('d1').addEventListener('click', function(){document.getElementById('d1').classList.remove('calendar__red');document.getElementById('d1').classList.add('calendar__green');});
//
// document.getElementById('d2').addEventListener('click', function(){document.getElementById('d2').classList.remove('calendar__red');document.getElementById('d2').classList.add('calendar__green');});
// document.getElementById('d3').addEventListener('click', function(){document.getElementById('d3').classList.remove('calendar__red');document.getElementById('d3').classList.add('calendar__green');});
// document.getElementById('d4').addEventListener('click', function(){document.getElementById('d4').classList.remove('calendar__red');document.getElementById('d4').classList.add('calendar__green');});
// document.getElementById('d5').addEventListener('click', function(){document.getElementById('d5').classList.remove('calendar__red');document.getElementById('d5').classList.add('calendar__green');});
// document.getElementById('d6').addEventListener('click', function(){document.getElementById('d6').classList.remove('calendar__red');document.getElementById('d6').classList.add('calendar__green');});
// document.getElementById('d7').addEventListener('click', function(){document.getElementById('d7').classList.remove('calendar__red');document.getElementById('d7').classList.add('calendar__green');});
// document.getElementById('d8').addEventListener('click', function(){document.getElementById('d8').classList.remove('calendar__red');document.getElementById('d8').classList.add('calendar__green');});
//
// document.getElementById('d9').addEventListener('click', function(){document.getElementById('d9').classList.remove('calendar__red');document.getElementById('d9').classList.add('calendar__green');});
// document.getElementById('d10').addEventListener('click', function(){document.getElementById('d10').classList.remove('calendar__red');document.getElementById('d10').classList.add('calendar__green');});
// document.getElementById('d11').addEventListener('click', function(){document.getElementById('d11').classList.remove('calendar__red');document.getElementById('d11').classList.add('calendar__green');});
// document.getElementById('d12').addEventListener('click', function(){document.getElementById('d12').classList.remove('calendar__red');document.getElementById('d12').classList.add('calendar__green');});
// document.getElementById('d13').addEventListener('click', function(){document.getElementById('d13').classList.remove('calendar__red');document.getElementById('d13').classList.add('calendar__green');});
// document.getElementById('d14').addEventListener('click', function(){document.getElementById('d14').classList.remove('calendar__red');document.getElementById('d14').classList.add('calendar__green');});
// document.getElementById('d15').addEventListener('click', function(){document.getElementById('d15').classList.remove('calendar__red');document.getElementById('d15').classList.add('calendar__green');});
//
// document.getElementById('d16').addEventListener('click', function(){document.getElementById('d16').classList.remove('calendar__red');document.getElementById('d16').classList.add('calendar__green');});
// document.getElementById('d17').addEventListener('click', function(){document.getElementById('d17').classList.remove('calendar__red');document.getElementById('d17').classList.add('calendar__green');});
// document.getElementById('d18').addEventListener('click', function(){document.getElementById('d18').classList.remove('calendar__red');document.getElementById('d18').classList.add('calendar__green');});
// document.getElementById('d19').addEventListener('click', function(){document.getElementById('d19').classList.remove('calendar__red');document.getElementById('d19').classList.add('calendar__green');});
// document.getElementById('d20').addEventListener('click', function(){document.getElementById('d20').classList.remove('calendar__red');document.getElementById('d20').classList.add('calendar__green');});
// document.getElementById('d21').addEventListener('click', function(){document.getElementById('d21').classList.remove('calendar__red');document.getElementById('d21').classList.add('calendar__green');});
// document.getElementById('d22').addEventListener('click', function(){document.getElementById('d22').classList.remove('calendar__red');document.getElementById('d22').classList.add('calendar__green');});
//
// document.getElementById('d23').addEventListener('click', function(){document.getElementById('d23').classList.remove('calendar__red');document.getElementById('d23').classList.add('calendar__green');});
// document.getElementById('d24').addEventListener('click', function(){document.getElementById('d24').classList.remove('calendar__red');document.getElementById('d24').classList.add('calendar__green');});


if($('n26').hasClass('calendar__red')) {
    document.getElementById('n26').classList.remove('calendar__green');
    document.getElementById('n26').classList.add('calendar__red');
}


// document.querySelector('#nominate').innerHTML = "Hello World";
//
// document.getElementById('button1').addEventListener('click', function(){
//   console.log('This button was clicked');
// });
