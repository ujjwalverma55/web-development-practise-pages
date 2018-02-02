/* objects-
when we wrap the group of variables and give a variable tha variabls show the properties of the varable and that variable know as the "object"*/
// function inide the object called the methods

var orc={
	
	hair: "green",
	age: 24,
	stomachfull: true,
	bless: function()
	{
		 alert(" all the best my child !");
		
		
	}
};
/*orc.stomachfull= false;


//document.write(orc.hair);
//orc.bless();
if(orc.stomatchfull == true)
{
	
	document.write("stomachfull is the full");
	
}

else
	

	{
		
		document.write("stomach is empty");
		
	}
	*/

orc.hair2 = 2;
delete orc.hair2;
document.write(orc.hair2);