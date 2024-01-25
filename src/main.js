import App from './App.svelte';

new App({
	target: document.body,
	props: {
		// What's your name?
		name: 'Philipp Reger',
		// In the following fiels you can either give a single string, 
		// or an array of bullet points
		
		// What do you associate with the term 'CI/CD'?
		associations: [
			'continuous integration',
			'continuous delivery'
		],
		// Which CI/CD tools do you use in your project?
		tools: 'Jenkins',
		// What do you want to learn in this workshop? 
		expectations: [
			'[insert unknown unknowns here]'
		],
		// What do you like to do when you're not coding?
		hobbies: [
			'play board games',
			'watch tv shows',
			'chill w/ friends'
		]
	}
});
