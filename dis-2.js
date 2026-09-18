const toggleButton = document.querySelector('#toggle-button');
const cuteContent = document.querySelector('#cute-content');
const scaryContent = document.querySelector('#scary-content');

let booleanVar = false;

function toggleContent() {
	booleanVar = !booleanVar;
	if (booleanVar) {
		cuteContent.style.display = 'none';
		scaryContent.style.display = 'block';
		toggleButton.textContent = 'Show cute and cuddly content';
	} else {
		cuteContent.style.display = 'block';
		scaryContent.style.display = 'none';
		toggleButton.textContent = 'Show scary monsters';
	}
}

toggleButton.addEventListener('click', toggleContent);
