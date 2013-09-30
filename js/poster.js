var apikey="9a3cc6d14b4765b19587e229556ae226";
var str="";

$('#page-home').live('pageshow', function(event){
	
	console.log("loading...");          
		      

	 $("#intro").click(function(){
		     var htmlString = " ";
		     htmlString = htmlString+ " ";
		     $("#movieyour").html(htmlString);
		    
		   });


	  
	$("#searchposter").click(function(){
		    	var y  = $("#name").val();
		    	
		    	  
		    	  if(y=="")
		    		  {
		    		  alert("please enter movie")
		    		  }
		    	  else
		    	  {
		    		  
		    		  moviePoster( $("#name").val());
		    	  }
		      });
});



function moviePoster(x)
		      {
		    	  $("#movieYour").html("Updating details, please wait...");
		    	    var apiUrl = "http://api.themoviedb.org/3/search/movie?api_key="+apikey+"&query="+x;  
		    	    console.log(apiUrl);
		    	    $.ajax({url:apiUrl,dataType:'jsonp',}).done(function(result){
		    	    	console.log(result);
		    	    	console.log(result.results[0].title);
		    	    	console.log(result.results[0].poster_path);
		    	    	
		    	    	
		    	    	var title=result.results[0].title;
		    	    	var poster=result.results[0].poster_path;
		    	    	
		    	    	str=(str+ "<div class='movieTitle'>"+result.results[0].title+"</div>");
		    	    	if(poster!==null)
		    	    	{
		    	    		str=(str+ "<div class='poster'>"+'<img src=http://d3gtl9l2a4fn1j.cloudfront.net/t/p/w500'+ result.results[0].poster_path + '/>'+"</div>");
		    	    	}
		    	    	else
		    	    		{
		    	    		str=(str+"sorry poster not found");
		    	    		}
		    	    	$("#movieYour").html(str);
		    	    	
		    	    	
		    	    }).fail(function(){
		    	    	 console.log("Error occured");
		  		       
		    	    });
		    	               
		      }
		          
		          
		          