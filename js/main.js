$(document).ready(function() {
	$("h1").mouseenter(function(){
						$(this).addClass('animated shake');
					})
					.mouseleave(function(){
						$(this).removeClass('animated shake');
					});
	// Some people represent the event parameter as 'e'
	// this is a naming shortcut
	contactForm = $('#contact-form');

	contactForm.on('submit', function(e){
		// Place event handling logic here
		url = '/';
		data = $(this).serialize();

		$.post(url, data)
		 .done(function() {
				// if the data was submitted successfully: alert('You are logged in');
				console.log('You are logged in');		 	
		 }).fail(function() {
				// if the data was submitted and there was an error: alert('Ooops. Something went wrong');
				console.log('Ooops. Something went wrong'); 	
		 });


		// Prevents the default behaviour of the form
		e.preventDefault();
	});

	contactForm.validate({
		rules: {
			fullname: "required",
			email: {
				required: true,
				email: true
			}
		},
		messages: {
			fullname: "Please sepecify your fullname",
			email: {
				required: "We need your email address to reach you.",
				email: "Please use the email format name@domain.com"
			}
		}
	});

	githubReposUrl = 'https://api.github.com/users/muthuridennis/repos';

	$.get(githubReposUrl, function(repositories){
		// parse repositories array
		projectListTemplate = '';
		projectListTemplate += '<ul>';

		repositories.forEach(function(repository){
			projectListTemplate += '<li>';
				projectListTemplate += '<h2><a href="'+ repository.html_url +'">'+ repository.name +'</a></h2>';
				projectListTemplate += '<p>'+ repository.description +'</p>';
				projectListTemplate += '<button type="button" class="btn btn-default btn-lg">';
	  			projectListTemplate += '<span class="glyphicon glyphicon-star" aria-hidden="true">'+ repository.stargazers_count +'</span>';
  			projectListTemplate += '</button>'
			projectListTemplate += '</li>';
		});

		projectListTemplate += '</ul>';

		// projectListTemplate = '<ul>' <li>'
		// 												+ '
		// 						  					 	+	'<h2><a href="#">Introduction to bootstrap</a></h2>'
		// 						  						+	'<p>My project description</p>'
		// 						  						+ '<a href="#">Teams working on project</a>'
		// 					  						+ '</li>'
		// 				  						+ '</ul>';

		$('#open-source-content').html(projectListTemplate);
	});

	nodeServerUrl = 'http://127.0.0.1:8081';
	dataHandler = function(data){
		console.log(data);
	};

	$.get(nodeServerUrl, dataHandler)













});