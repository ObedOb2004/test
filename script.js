const sections = document.querySelectorAll('section');
const signInSection = document.getElementById('sign-in');
let currentSection = 0;
window.addEventListener('scroll', () => {
	const scrollPosition = window.scrollY + 200;
	sections.forEach((section, index) => {
		if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
			currentSection = index;
		}
	});
	sections.forEach((section, index) => {
		if (index <= currentSection) {
			section.classList.add('animate-in');
		} else {
			section.classList.remove('animate-in');
		}
	});
});
signInSection.addEventListener('click', () => {
	// Sign in functionality goes here
});
