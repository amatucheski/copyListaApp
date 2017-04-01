// JavaScript Document

/* I want to convert comma-separated strings into arrays and then into <li> */


	
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
		
		var list = document.getElementById("output");
		
    	for (var i = 0; i < listArray.length; i++ ) {
        	var li = document.createElement("li");
        	li.innerHTML = listArray[i];
        	list.appendChild(li);
    }
		var nameOutput = document.getElementById("nameOutput");
		nameOutput.innerHTML = firstName + "'s List";
	});
});
