/* For use with index.html */

var contentIDs=new Array('contentA' , 'contentP' , 'contentT');
var navIDs = new Array('navA' , 'navP' , 'navT');

function switchid(contentDiv , navDiv){	
	hideallids();
	showdiv(contentDiv , navDiv);
}


function hideallids(){
	for (var i=0;i<contentIDs.length;i++){
		hideContentDiv(contentIDs[i]);
	}
	for (var i=0;i<navIDs.length;i++){
		hideNavDiv(navIDs[i]);
	}
}

function hideContentDiv(id) {
	//safe function to hide an element with a specified id
	if (document.getElementById) {
		document.getElementById(id).style.display = 'none';
	}
}

function hideNavDiv(id) {
	//safe function to hide an element with a specified id
	if (document.getElementById) {
		document.getElementById(id).style.background = '#071D70';
		document.getElementById(id).style.color = '#6E84D6';
	}
}

function showdiv(contentDiv , navDiv) {
	//safe function to show an element with a specified id
		  
	if (document.getElementById) {
		document.getElementById(contentDiv).style.display = 'block';
		document.getElementById(navDiv).style.background = '#1435AD';
		document.getElementById(navDiv).style.color = 'white';
	}
}
