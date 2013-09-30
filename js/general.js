$(document).ready(function() {
	
	$("#sendmail").click(function() {
		alert("i m send mail button");
	});

	$("#show").click(function() {
		$("#aboutme").show();

	});
	
	
	$("#hide").click(function() {
		$("#aboutme").hide();
	});
	
	$("#background").click(function(){
	$("#aboutme").css("background-color","yellow");
	$("#aboutme").css("padding","20px");
	});
	
	$("#aboutMeTab").click(function(){
		
		$(".rectangle").slideUp();
		$("#aboutme").slideDown();
	});
	$("#portTab").click(function(){
		$(".rectangle").slideUp();
		$("#portfolio").slideDown();
	});
	
	$("#contactTab").click(function(){
		$(".rectangle").slideUp();
		$("#contactme").slideDown();
	});
	$(".rectangle").click(function(){
		$(".rectangle").slideUp();
	});
	
});





