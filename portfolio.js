function validate()
	{
		var Name=document.getElementById("n");
		var error_span_name=document.getElementById("sn");
		if(Name.value=="")
		{
			error_span_name.innerHTML="Name should not be empty";
			Name.focus();
			Name.style.borderColor="#e61037";
			return false;
		}
		var Mail=document.getElementById("em");
		var error_span_mail=document.getElementById("sem");
		nexpr=/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-z]{2,}$/
		if(Mail.value=="")
		{
			error_span_mail.innerHTML="Mail should not be empty";
			Mail.focus();
			Mail.style.borderColor="#e61037";
			return false;
		}
		else if(nexpr.test(Mail.value)==false)
		{
			error_span_mail.innerHTML="Incorrect mail format";
			Mail.focus();
			Mail.style.borderColor="#e61037";
			return false;
		}
		var Phone=document.getElementById("ph");
		var error_span_phone=document.getElementById("sph");
		if(Phone.value=="")
		{
			error_span_phone.innerHTML="Phone Number should not empty";
			Phone.focus();
			Phone.style.borderColor="#e61037";
			return false;
		}
		var Message=document.getElementById("msg");
		var error_span_message=document.getElementById("smsg");
		if(Message.value=="")
		{
			error_span_message.innerHTML="Message should not empty";
			Message.focus();
			Message.style.borderColor="#e61037";
			return false;
		}
	}
	

 function myMenuFunction()
 {
    var links = document.querySelector(".links");
	var menuIcon = document.querySelector("#menu");
	var cancelIcon = document.querySelector("#cancel");
    if (links.style.display =="none")
	{
        links.style.display = "block";
		menuIcon.style.display = "none";
		cancelIcon.style.display = "block";
    } 
	else
	{
        links.style.display = "none";
		menuIcon.style.display = "block";
		cancelIcon.style.display = "none";
    }
}

window.addEventListener("resize", function() 
{
	if (window.innerWidth > 768) 
	{
		document.querySelector(".links").style.display = "flex";
		document.querySelector("#menu").style.display = "none";
		document.querySelector("#cancel").style.display = "none";
	}
	else
	{
		document.querySelector(".links").style.display = "none";
		document.querySelector("#menu").style.display = "block";
	}
});


ScrollReveal().reveal('.main', {
    duration: 2000,      // Duration of the animation in milliseconds (2 seconds)
    distance: '30px',    // Distance to move the element during the animation
    origin: 'bottom',    // Direction from which the element will come into view
    scale: 1.1,          // Scale the element slightly larger during animation
    opacity: 0,          // Start with opacity 0 (fully transparent) and transition to fully visible
    reset: true    // Reset the animation each time the element comes into view
});

