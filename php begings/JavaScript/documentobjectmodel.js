
// calling function by getelementby "id"
function change()
{
 var text =document.getElementById("ujjwal").style.color="red";	
	
	
}
// calling function by getelementby "tagname"

function changeall() {
	
	var paragraph = document.getElementsByTagName("p");
	
	/*calling function by getElementsByClassName('name of class')*/
	
for(var i=0; i < paragraph.length;i++){	
 paragraph[i].style.backgroundColor="red"; 
	}
	
}

//"innerHTML" it use to replace the content 


function changecontent()
{
	
var para = document.getElementsByClassName('replace');


var newpara = para[1].innerHTML ="new text is here !!!!!";	
	
} 
function adding() {
	
var confirmation = confirm("are your permanatly join the name ?");
if(confirmation == true){
var cls = document.getElementsByClassName('maths');
/* if there inninnnerHTML if we dont give any thing then its show result in third line but 
if we then a empty string eg. innerHTML="" then first two line are hidden only result we be shown*/
var cls1 = cls[0].innerHTML;
var cls2 = cls[1].innerHTML;
var result =cls[2].innerHTML=cls1+cls2 ;
	
var cls1 = cls[0].innerHTML="";
var cls2 = cls[1].innerHTML="";	
document.getElementById("adding").style.visibility="hidden";
}
}


function changeimage() {
	document.getElementById("image").src="uv.png";
	
	
	
	
}

function onmouseover1(){
	
	var t =document.getElementById("para1").style.backgroundColor="green";
	
	
}


function onmouseout1(){
	
	var t =document.getElementById("para1").style.backgroundColor="";
	
	
}

function newimage()
{
	
document.getElementById("image").src="uv.png";	
			
}

function oldimage()
{
	
document.getElementById("image").src="uv1.png";	
			
}
