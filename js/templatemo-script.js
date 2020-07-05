/**
 *	www.templatemo.com
 */

/* HTML document is loaded. DOM is ready.
-----------------------------------------*/
$(document).ready(function(){

	// Mobile menu
	$('.mobile-menu-icon').click(function(){
		$('.tm-nav').toggleClass('show');
	});
  
  	// http://stackoverflow.com/questions/2851663/how-do-i-simulate-a-hover-with-a-touch-in-touch-enabled-browsers
  	$('body').bind('touchstart', function() {});
});
function verifyvalue()
	  	{
var b=document.getElementById("hotelvalue").value;

var a=document.getElementById("guestvalue").value;
	  		if(a ==None, b==None)
	  		{
	  			alert("Please enter required fields");
                               
                                 
	  		}
}

function verify()
{    
var a=document.getElementById("contact_name").value;
    var b=document.getElementById("contact_email").value;
    var c=document.getElementById("contact_message").value;
    
    if (a==null || a=="",b==null || b=="",c==null || c=="")
      {
      alert("Please Fill All Required Field");
            													
      }
    }
/*if(document.getElementById("contact_name").value=="")
{alert("Please enter Name");
contact_name.focus();
return false;
}
alert("After name");

if(document.getElementById("contact_email").value=="")
{alert("Please enter Email");
contact_email.focus();
return false;
}
if(document.getElementById("contact_message").value=="")
{alert("Please enter Message");
contact_message.focus();
return false;
}
*/


