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

/*
$(function(){
    $("#submit").click(function(){
        alert("clicked");
})});
*/
	
$(function(){
	"use strict";
    $("#submit").click(function(){
        //save inputs
        var firstName = document.getElementById("firstName").value;
        var listUnprocessed = document.getElementById("listInput").value;
		console.log(firstName, listUnprocessed);
	
		
        //create new array
        var listArray = new Array();
        listArray = listUnprocessed.split(',');
		console.log(listArray);
	});
});
		
/*
		

        function ul(listArray){
            var list = document.createElement('ul');
			var i = "";

             //for loop to create <li>
            for (i = 0, i < listArray.length, i++) {
               //Create list item
               var listItem = document.createElement('li');
               //set list item contents
               listItem.appendChild(document.createTextNode(listArray[i]));
               //Add it to the list
               list.appendChild(listItem);
     }}
     //Add contents list to "#output"
     document.getElementById("output").appendChild(ul(listArray));

});
})
*/