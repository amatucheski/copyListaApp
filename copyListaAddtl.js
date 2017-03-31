// JavaScript Document

/* I want to convert comma-separated strings into arrays and then into <li> */

/*
1. Create submit function
	a. what goes into it - research
2. Save inputs to variables
3. convert listInput to an array
4. For Loop: take array items and deposit them into individual list items
	a. 

$(document).ready(function(){
var animals=["cat","dog","pikachu","charmander"];

$.each(animals,function(index,value){
	var checkbox="<label for="+value+">"+value+"</label><input type='checkbox' id="+value+" value="+value+" name="+value+">"
	$(".checkBoxContainer").append($(checkbox));
})

});

how many list vars do I need?
	1. unprocessed
	2. array - var _________ = [convert to array function()]

*/


$(document).ready(){
	
	document.getElementById("submit").addEventListener("click", function(){
		
		var firstName = document.getElementById("firstName");
		var listUnprocessed = document.getElementById("listInput");
		
	})
	
	
}
	



//var listUnprocessed=document.getElementById("listInput");
