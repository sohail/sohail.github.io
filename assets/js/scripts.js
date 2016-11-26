$(window).load(function()
{
	$(function()
	{    
    	// matrix is the DOM element
    	var matrix = $("#matrix");

    	// Shuffle the contents of container
		matrix.shuffleLetters();
  
    	// Leave a 4 second pause
		setTimeout(function()
    	{
			// Shuffle the container with custom text
			matrix.shuffleLetters({
				"text": "Hello World!"
			});
		},4000);
	});

	$( "#matrix" ).click(function() 
	{
    	// matrix is the DOM element
    	var matrix = $("#matrix");
		matrix.shuffleLetters({
			"text": "free thinking and power of opensource"
		});
    	// Shuffle the contents of container
		matrix.shuffleLetters();
  
    	// Leave a 4 second pause
		setTimeout(function()
    	{
			// Shuffle the container with custom text
			matrix.shuffleLetters({
				"text": "Hello World!"
			});
		},4000);
  		
	});
});
