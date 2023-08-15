
const project = document.getElementsByClassName("portfolio-thumb");
// add onclick event to each project
for (let i = 0; i < project.length; i++) {
	project[i].addEventListener("click", function() {
		var url = "";
		if (i == 0){
			// direct to project page
			url = "https://zihan1997.github.io/presentation/yelp/app/";
		}else if (i == 1){
			// direct to project page
			url = "./bookshelf.html";
		}else{
			// direct to project page
			url = "http://www.google.com";
		}
		window.location.href = url;
	});
}


//
$(document).ready(function() {
			$('#fullpage').fullpage({
				'verticalCentered': false,
				'scrollingSpeed': 600,
				'autoScrolling': false,
				'css3': true,
				'navigation': true,
				'navigationPosition': 'right',
			});
		});



