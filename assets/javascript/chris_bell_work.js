// Make our variables global to the runtime of our application

 var blueCounter = 0;
 var greenCounter = 0;
 var yellowCounter = 0;
 var pinkCounter = 0;

// Here we created an on-click event that responds to button clicks of the crystal image.
 $("#blue-gem").on("click", function() {
   blueCounter += 1;
   alert("You clicked the blue crystal " + blueCounter + " times!");
 });

 $("#green-gem").on("click", function() {
   greenCounter += 1;
   alert("You clicked the green crystal " + greenCounter + " times!");
 });

 $("#yellow-gem").on("click", function() {
   yellowCounter += 1;
   alert("You clicked the yellow crystal " + yellowCounter + " times!");
 });

 $("#pink-gem").on("click", function() {
   pinkCounter += 1;
   alert("You clicked the pink crystal " + pinkCounter + " times!");
 });