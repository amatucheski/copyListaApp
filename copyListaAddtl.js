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


$(function(){
    $("#submit").click(function(){
        alert("clicked");
})});

/* Commented OUT for now
	
$(function(){
    $("#submit").click(function(){
        //save inputs
        Var firstName = document.getElementById("firstName);
        Var listUnrpocessed = document.getElementById("listInput");

        //create new array
        Var listArray = new Array();
        listArray = listUnprocessed.split(',');

        Function ul(listArray){
            Var list = document.createElement('ul');

             //for loop to create <li>
            For (i = 0, i < listArray.length, i++){
               //Create list item
               var listItem = "document.createElement('li);
               //set list item contents
               listItem.appendChild(document.createTextNode(listArray[i]));
               //Add it to the list
               list.appendChild(item);
     }}
     //Add contents list to "#output"
     document.getElementById("output").appendChild(ul(listArray));

});
});
	
*/

