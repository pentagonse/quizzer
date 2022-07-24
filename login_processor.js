$(function(){

$("#login").click(function(){
var username = $("#username").val();
var password = $("#password").val();
	

	if(username=="" || password=="")
	{
		alert("Please fill out the login form.");
	}

	else if(username!="admin" || password!="admin")
	{
		alert("Wrong username or password entered. Please try again")
	}

	else{
		window.location = "quiz.html?n="+username;
	}

})
});