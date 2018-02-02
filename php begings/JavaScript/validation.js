function validation()
{
	var nam = document.getElementById("name");
	var lasnam = document.getElementById("lastname");
	if(nam.value.length < 5 || lasnam.value.length < 3)
	
	{
		
	alert(" please fill the name text field");	
	nam.focus();
	nam.style.border = "dotted 3px red";
    return false;
	}
	
	
	
	
}