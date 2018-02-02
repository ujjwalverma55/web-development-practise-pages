function car(type,color,brand)
{
	
	this.type = type;
	this.color = color;
	this.brand = brand;
 	
	
	
}


var car1 = new car("suv","red","scorpio");
var car2 = new car("auto","yellow","bajaj");


function showcarproperties()
{
	
document.getElementById("para").innerHTML= car1.type + "'s color is " + car1.color + "   and brand name is " + car1.brand ; 	
	
	
	
}

