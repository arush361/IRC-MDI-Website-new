var maxcompare   = 4;
var totalcompare = 0;
var arrcompare   = [];

function addComp(e) {
	var eID      = e.id;
	var eCheck   = e.checked;
	var eVal     = e.value;
	// alert(e + " / " + e.id + " / " + e.checked + " / " + e.value);
	
	if (eCheck) {
		if (totalcompare < maxcompare) {
			arrcompare.push(eVal);
			totalcompare++;
			document.getElementById('cam' + eVal).classList.add('comparing');
			// alert("You have " + totalcompare + " of " + maxcompare + " campuses selected for comparison.");
		} else {
			alert("You already have the maximum number of campuses selected for comparison.");
			e.checked = false;
		}
	} else {
		var index = arrcompare.indexOf(eVal);
		if (index > -1) {
			arrcompare.splice(index, 1);
			totalcompare--;
			document.getElementById('cam' + eVal).classList.remove('comparing');
		}
	}
	
	var compButton = document.getElementById("compButton");
	
	if (totalcompare > 1) {
		compButton.style.visibility = 'visible';
		compButton.style.display = 'block';
		compButton.innerHTML = "compare " + totalcompare + " campuses";
	} else {
		compButton.style.visibility = 'collapse';
		compButton.style.display = 'none';
		compButton.innerHTML = "--";
	}
}
	
function coverHide() {
    var cover_bg = document.getElementById("cover_bg");
	var cover_form = document.getElementById("cover_form");
	cover_bg.style.visibility = 'collapse';
	cover_bg.style.display = 'none';
	cover_form.style.visibility = 'collapse';
	cover_form.style.display = 'none';
}

function coverShow() {
    var cover_bg = document.getElementById("cover_bg");
	var cover_form = document.getElementById("cover_form");
	cover_bg.style.visibility = 'visible';
	cover_bg.style.display = 'block';
	cover_form.style.visibility = 'visible';
	cover_form.style.display = 'block';
}

function coverHideMC() {
    var cover_bg = document.getElementById("cover_bg");
	var msg_MC = document.getElementById("msg_MC");
	var button_MC = document.getElementById("button_MC");
	cover_bg.style.visibility = 'collapse';
	cover_bg.style.display = 'none';
	msg_MC.style.visibility = 'collapse';
	msg_MC.style.display = 'none';
	button_MC.style.visibility = 'collapse';
	button_MC.style.display = 'none';
}

function coverShowMC() {
    var cover_bg = document.getElementById("cover_bg");
	var msg_MC = document.getElementById("msg_MC");
	var button_MC = document.getElementById("button_MC");
	cover_bg.style.visibility = 'visible';
	cover_bg.style.display = 'block';
	msg_MC.style.visibility = 'visible';
	msg_MC.style.display = 'block';
	button_MC.style.visibility = 'visible';
	button_MC.style.display = 'block';
}

function showMC() {
	var cover_form = document.getElementById("cover_form_MC");
	cover_form.style.visibility = 'visible';
	cover_form.style.display = 'block';
}

function disableMobile() {
	if (navigator.userAgent.toLowerCase().indexOf("iphone") !== -1) { event.preventDefault(); }
	if (navigator.userAgent.toLowerCase().indexOf("ipad") !== -1) { event.preventDefault(); }
	if (navigator.userAgent.toLowerCase().indexOf("droid") !== -1) { event.preventDefault(); }
}

function doSave(userID, checkID, OnOff) {
  if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
    }
  else
    {// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  xmlhttp.onreadystatechange=function()
    {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
      {
      // SUCCESS
      }
    }
  xmlhttp.open("GET","/placements/pl_savecheck.php?u=" + userID + "&c=" + checkID + "&s=" + OnOff,true);
  xmlhttp.send();
}

function doSaveBill(userID, checkID, OnOff) {
  if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
    }
  else
    {// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  xmlhttp.onreadystatechange=function()
    {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
      {
      // SUCCESS
      }
    }
  xmlhttp.open("GET","/placements/pl_savecheckbill.php?u=" + userID + "&c=" + checkID + "&s=" + OnOff,true);
  xmlhttp.send();
}

function goComp() {
	if (totalcompare > 1) {
	  window.location.assign("/compare/" + arrcompare.join('-') + "/");
	}
}

function jump(){
  var option = document.getElementById("lists").value;
  window.location = option;
}

function showcp(){
  var divs = document.getElementsByTagName("div");
  for(var i = 0; i < divs.length; i++){
	var tmpname = divs[i].id;
	if (tmpname.substr(0,3) == "cp_") {
      divs[i].style.display    = 'none';
      divs[i].style.visibility = 'collapse';
	}
  }

  var theID = document.getElementById("showArea").value;
  var dC = document.getElementById(theID);
  dC.style.display    = 'block';
  dC.style.visibility = 'visible';
}

function stagger(theTime, addin) {
  document.getElementById("placethem").disabled = true;
  theTime = parseInt(theTime) - 1;
  if (theTime <= 0) {
	location.href = '/placements' + addin + '/decide/';
    return;
  }
  document.getElementById("placethem").value = theTime + " sec";
  // alert('timerId = setTimeout(stagger(' + theTime + ', ' + addin + '), 1000');
  setTimeout(function(){stagger(theTime, addin)}, 1000);
}

function SwapEm(DivPre, DivID, DivMax){
  for (i=0;i<(DivMax+1);i++) {
    // document.getElementById(DivPre + i).style.zIndex = (i + 1);
    document.getElementById(DivPre + i).style.display = 'none';
  }
  
  // document.getElementById(DivPre + DivID).style.zIndex = '20';
  document.getElementById(DivPre + DivID).style.display = 'block';
}

function toggleForm() {
	var ele   = document.getElementsByName('Participation');
	var visit = 0;
	
	if (ele[0].checked) { visit = 1; }
	
	var tF = document.getElementById("theform");
	if (visit == 0) {
		tF.style.display    = 'none';
		tF.style.visibility = 'collapse';
	} else {
		tF.style.display    = 'block';
		tF.style.visibility = 'visible';
	}
}

function toggleSub(theID) {
	var dC = document.getElementById(theID);
    // alert("ID: " + theID + " / " + dC.style.visibility);
	if (dC.style.visibility == 'visible') {
		dC.style.display    = 'none';
		dC.style.visibility = 'collapse';
	} else {
		dC.style.display    = 'block';
		dC.style.visibility = 'visible';
	}
}

function toggleTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

/*
function navigate(){
  var option = document.getElementById("mobilenavmenu").value;
  window.location = option;
}

function navigateB(){
  var option = document.getElementById("mobilenavmenuB").value;
  window.location = option;
}

function navigateC(){
  var option = document.getElementById("mobilenavmenuC").value;
  window.location = option;
}
*/
