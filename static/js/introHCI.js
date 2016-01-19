'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$('#testjs').text("You did it!");
		//$(".jumbotron p").addClass("active");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	$("button#submitBtn").click(changeProj)

	$("a.thumbnail").click(imageChange);

    /*{ 
	    var curr = $(this).attr("src");
      	var toSwap = $(this).attr("data-swap");     
     	var firstSwap = $(this).attr("src", toSwap);
     	$(this).attr("src", toSwap);
     	firstSwap.attr("data-swap",curr);   
});  */
}

function changeProj(e) {
	var projectVal = $('#project').val();
	var newDescrip =$('#description').val();

	$(projectVal).animate({
		width: $('#width').val()
	});
	$(projectVal + " .project-description").text(newDescrip);
}


function projectClick(e) {
  // Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);

    var containingProject = $(this).closest(".project");
    var imgProject = $(containingProject).closest(".img");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
    	$(description).toggleClass("active");
    	//$(description).fadeOut();
       //description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    }
}


function imageChange(e) {
  // Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the leement that fired the event
    var containingProject = $(this).closest(".project");
    var imgProject = $(containingProject).find(".img");
   
    var curr = imgProject.attr("src");
        var toSwap = imgProject.attr("imgSwap");     
        var firstSwap = imgProject.attr("src", toSwap);
        imgProject.attr("src", toSwap);
        firstSwap.attr("imgSwap",curr);   
}