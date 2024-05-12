// JScript File
// Script to view details of Subject Course, use in Curriculum


function showDetails(objRow)
{
var objDetails, strDetails;
var objDetails = objRow.cells;


strDetails="<div id='modalDetails'><span>Course Code:</span> "+ objDetails[2].innerHTML+"<br />";
strDetails+="<span>Course Title:</span> "+ objDetails[3].innerHTML+"<br />";
strDetails+="<span>Course Description:</span> "+ objDetails[10].innerHTML+"<br />";
strDetails+="<span>Course Units:</span> "+ objDetails[6].innerHTML+"<br />";
strDetails+="<span>Lec. Hrs.:</span> "+ objDetails[4].innerHTML+"<br />";
strDetails+="<span>Lab. Hrs.:</span> "+objDetails[5].innerHTML+"<br />";
strDetails+="<span>Pre-Requisites:</span> "+objDetails[7].innerHTML+"<br />";
strDetails+="<span>Co-Requisites:</span> "+objDetails[8].innerHTML+"<br />";
if (objDetails[11].innerHTML=='')    
strDetails+="<span>Syllabus: </span>Not yet available</div><br />";    
else
strDetails+="<span>Syllabus: </span><a href='"+objDetails[11].innerHTML+"' target='_blank'>Download Syllabus</a></div><br />";    
TINY.box.show("<p><a href='javascript:TINY.box.hide()'>x</a></p>"+strDetails,0,0,0,1)
}

function OpenLiveMail()
{
//alert("test");
    window.open("http://www.outlook.com","myMapuaLiveMail"); 
}


function selectAll()
{

var btnSelect=document.getElementById('btnSelect').value

    for(var iLoop=1; iLoop < document.forms[0].elements.length; iLoop++)
    {   		
	    if(document.forms[0].elements[iLoop].type == "checkbox")
	    {	
	        if (btnSelect=="Select All")
            {
                if (document.forms[0].elements[iLoop].checked==false)
	            {
	                var strID=document.forms[0].elements[iLoop].id;
	                var intFoundChkSelect=strID.indexOf("chkSelect");
	                if (intFoundChkSelect!=-1)	                	                
	                    document.forms[0].elements[iLoop].checked=true;
	            }
	            document.getElementById('btnSelect').value="Unselect All";
            }
            else
            {
                if (document.forms[0].elements[iLoop].checked==true)
	            {	            
	                var strID=document.forms[0].elements[iLoop].id;
	                var intFoundChkSelect=strID.indexOf("chkSelect");
	                if (intFoundChkSelect!=-1)	                	                
	                    document.forms[0].elements[iLoop].checked=true;
	                document.forms[0].elements[iLoop].checked=false;
	            }	            
	            document.getElementById('btnSelect').value="Select All";
            }
	    }
    }
	
	
}
