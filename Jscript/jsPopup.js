/***************************/
//@Author: Adrian "yEnS" Mato Gondelle
//@website: www.yensdesign.com
//@email: yensamg@gmail.com
//@license: Feel free to use it, but keep this credits please!					
/***************************/

//SETTING UP OUR POPUP
//0 means disabled; 1 means enabled;
var popupStatus = 0;

//loading popup with jQuery magic!
function loadPopup(){
	//loads popup only if it is disabled
	if(popupStatus==0){
		$("#backgroundPopup").css({
			"opacity": "0.7"
		});
		$("#backgroundPopup").fadeIn("slow");
		$("#ctl00_cphMain_popupContact").fadeIn("slow");
		popupStatus = 1;

        // Added by mvlee 2012-06-01 10:20 AM to set height of popup
		$("#ctl00_cphMain_popupContact").height($("#ctl00_cphMain_popupContact").height());
		$("#ctl00_cphMain_popupContact").width($("#ctl00_cphMain_popupContact").width() + 6);
	}
}

//disabling popup with jQuery magic!
function disablePopup(){
	//disables popup only if it is enabled
	if(popupStatus==1){
		$("#backgroundPopup").fadeOut("slow");
		$("#ctl00_cphMain_popupContact").fadeOut("slow");
		popupStatus = 0;
	}
}

//centering popup
function centerPopup(){
	//request data for centering
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	
	/*added by jamedina on 10-5-2009 to adjust for screen wider that 1024px
	if (windowWidth > 1024) {
	windowWidth -= (windowWidth - 1024)
	}*/

	var popupHeight = $("#ctl00_cphMain_popupContact").height();
	var popupWidth = $("#ctl00_cphMain_popupContact").width();
	//centering
	$("#ctl00_cphMain_popupContact").css({
		"position": "absolute",
		"top": (windowHeight/2-popupHeight/2)-25,
		//"left": (windowWidth/2-popupWidth/2)-125
		"left": (windowWidth/2-popupWidth/2)
	});
	//only need force for IE6
	
	$("#backgroundPopup").css({
		"height": windowHeight
	});
	
}


//CONTROLLING EVENTS IN jQuery
$(document).ready(function(){
	//centering with css
		centerPopup();
		//load popup
		loadPopup();
	//LOADING POPUP
	//Click the button event!
	$("#button").click(function(){
		//centering with css
		centerPopup();
		//load popup
		loadPopup();
	});
				
	//CLOSING POPUP
	//Click the x event!
	$("#popupContactClose").click(function(){
		disablePopup();
	});
	//Click out event!
	$("#backgroundPopup").click(function(){
		disablePopup();
	});
	//Press Escape event!
	$(document).keypress(function(e){
		if(e.keyCode==27 && popupStatus==1){
			disablePopup();
		}
	});

});