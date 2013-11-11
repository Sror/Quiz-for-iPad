$(document).ready(function(){
		var score = 0;
		
		$("#opening").fadeIn("slow");
		
		$("#opening").click(function(){
			$("#opening").fadeOut("slow");
			$("#question1").fadeIn("slow");
		});
		
		
		$("#real1").click(function(){
			$("#question1").fadeOut("slow");
			$("#answer1").fadeIn("slow");
			score++; 
		});
		
		$("#fake1").click(function(){
			$("#question1").fadeOut("slow");
			$("#answer1b").fadeIn("slow");
		});
		
		$(".a1next").click(function(){
			$("#answer1").fadeOut("slow");
			$("#answer1b").fadeOut("slow");
			$("#question2").fadeIn("slow");
		});
		
		$("#real2").click(function(){
			$("#question2").fadeOut("slow");
			$("#answer2b").fadeIn("slow");
		});
		
		$("#fake2").click(function(){
			$("#question2").fadeOut("slow");
			$("#answer2").fadeIn("slow");					
			score++; 
		});
		
		$(".a2next").click(function(){
			$("#answer2").fadeOut("slow");
			$("#answer2b").fadeOut("slow");
			$("#question3").fadeIn("slow");
		});
		
		$("#real3").click(function(){
			$("#question3").fadeOut("slow");
			$("#answer3").fadeIn("slow");
			score++; 
		});
		
		$("#fake3").click(function(){
			$("#question3").fadeOut("slow");
			$("#answer3b").fadeIn("slow");			
		});
		
		$(".a3next").click(function(){
			$("#answer3").fadeOut("slow");
			$("#answer3b").fadeOut("slow");
			$("#question4").fadeIn("slow");
		});
		
		$("#real4").click(function(){
			$("#question4").fadeOut("slow");
			$("#answer4b").fadeIn("slow");
		});
		
		$("#fake4").click(function(){
			$("#question4").fadeOut("slow");
			$("#answer4").fadeIn("slow");
			score++; 
		});
		
		$(".a4next").click(function(){
			$("#answer4").fadeOut("slow");
			$("#answer4b").fadeOut("slow");
			$("#question5").fadeIn("slow");
		});
		
		$("#real5").click(function(){
			$("#question5").fadeOut("slow");
			$("#answer5").fadeIn("slow");			
			score++; 
		});
		
		$("#fake5").click(function(){
			$("#question5").fadeOut("slow");
			$("#answer5b").fadeIn("slow");
		});
		
		$(".a5next").click(function(){
			$("#answer5").fadeOut("slow");
			$("#answer5b").fadeOut("slow");
			$("#question6").fadeIn("slow");
		});
		
		$("#real6").click(function(){
			$("#question6").fadeOut("slow");
			$("#answer6b").fadeIn("slow");
		});
		
		$("#fake6").click(function(){
			$("#question6").fadeOut("slow");
			$("#answer6").fadeIn("slow");
			score++; 
		});
		
		$(".a6next").click(function(){
			$("#answer6").fadeOut("slow");
			$("#answer6b").fadeOut("slow");
			$("#question7").fadeIn("slow");
		});
		
		$("#real7").click(function(){
			$("#question7").fadeOut("slow");
			$("#answer7").fadeIn("slow");			
			score++; 
		});
		
		$("#fake7").click(function(){
			$("#question7").fadeOut("slow");
			$("#answer7b").fadeIn("slow");			
		});
		
		$(".a7next").click(function(){
			$("#answer7").fadeOut("slow");
			$("#answer7b").fadeOut("slow");
			$("#question8").fadeIn("slow");
		});
		
		$("#real8").click(function(){
			$("#question8").fadeOut("slow");
			$("#answer8b").fadeIn("slow");
		});
		
		$("#fake8").click(function(){
			$("#question8").fadeOut("slow");
			$("#answer8").fadeIn("slow");			
			score++; 
		});
		
		$(".a8next").click(function(){
			$("#answer8").fadeOut("slow");
			$("#answer8b").fadeOut("slow");
			$("#question9").fadeIn("slow");
		});
		
		$("#real9").click(function(){
			$("#question9").fadeOut("slow");
			$("#answer9").fadeIn("slow");			
			score++; 
		});
		
		$("#fake9").click(function(){
			$("#question9").fadeOut("slow");
			$("#answer9b").fadeIn("slow");
		});
		
		$(".a9next").click(function(){
			$("#answer9").fadeOut("slow");
			$("#answer9b").fadeOut("slow");
			$("#question10").fadeIn("slow");
		});
		
		$("#real10").click(function(){
			$("#question10").fadeOut("slow");
			$("#answer10b").fadeIn("slow");
		});
		
		$("#fake10").click(function(){
			$("#question10").fadeOut("slow");
			$("#answer10").fadeIn("slow");						
			score++; 
		});
		
		$(".a10next").click(function(){
			$("#answer10").fadeOut("slow");
			$("#answer10b").fadeOut("slow");
			$("#question11").fadeIn("slow");
		});
		
		$("#real11").click(function(){
			$("#question11").fadeOut("slow");
			$("#answer11").fadeIn("slow");
			score++; 
		});
		
		$("#fake11").click(function(){
			$("#question11").fadeOut("slow");
			$("#answer11b").fadeIn("slow");
		});
		
		$(".a11next").click(function(){
			$("#answer11").fadeOut("slow");
			$("#answer11b").fadeOut("slow");
			$("#question12").fadeIn("slow");
		});
		
		$("#real12").click(function(){
			$("#question12").fadeOut("slow");
			$("#answer12").fadeIn("slow");
			score++; 
		});
		
		$("#fake12").click(function(){
			$("#question12").fadeOut("slow");
			$("#answer12b").fadeIn("slow");
		});
		
		$(".a12next").click(function(){
			$("#answer12").fadeOut("slow");
			$("#answer12b").fadeOut("slow");
			$("#question13").fadeIn("slow");
		});
		
		$("#real13").click(function(){
			$("#question13").fadeOut("slow");
			$("#answer13").fadeIn("slow");
			score++; 
		});
		
		$("#fake13").click(function(){
			$("#question13").fadeOut("slow");
			$("#answer13b").fadeIn("slow");
		});
		
		$(".a13next").click(function(){
			$("#answer13").fadeOut("slow");
			$("#answer13b").fadeOut("slow");
			$("#closingtime").fadeIn("slow");
			$("#score").html("<h1>"+score+"</h1>");	
				
			var final = escape($("#score").html);
			var tweet = escape("Who is a real athlete and who is made up? I scored "+score+"/13 on the #IndySportsWeekly quiz. Can you beat me?");
		
		$('a.tweet').click(function(e){
  			e.preventDefault();
  			var loc = $(this).attr('href');
  			var title  = tweet;
  			window.open('http://twitter.com/share?url=' + loc + '&text=' + title + '&', 'twitterwindow', 'height=450, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
 
		});
		
		
});
		
	});