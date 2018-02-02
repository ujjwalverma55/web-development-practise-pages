function showmore()
{
	// this for create the heading
	
	var hed =document.createElement("h2");
	var element = document.getElementById("div3");
	element.appendChild(hed);
	var nodeH = document.createTextNode("KARAN SONI ");
    hed.appendChild(nodeH);
	
	
	// this is for create paragraph
var para = document.createElement("p");

element.appendChild(para);


var node = document.createTextNode("KARAN SONI");
para.appendChild(node);

var pAttribute = document.createAttribute("id");
pAttribute.value = "test";  
para.setAttributeNode(pAttribute);

var hAttribute = document.createAttribute("id");
hAttribute.value= "test";
hed.setAttributeNode(hAttribute);



}

 function hidemore()
 {
	 /*var parent = document.getElementById("div3");
var child = document.getElementById("para");
parent.removeChild(child);*/

//or we can use this

	var  elementH = document.getElementsByTagName("h2")[1];
    var parent = elementH.parentNode;
	parent.removeChild(elementH);
	
	var elementP = document.getElementsByTagName("p")[1];
	
	parent.removeChild(elementP);
	

 }    