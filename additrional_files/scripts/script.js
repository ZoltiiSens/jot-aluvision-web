// const videoButtons = document.querySelectorAll('.video-button');
// const videoPlayer = document.getElementById('video-player');

// // videoPlayer.play();

// videoButtons.forEach(button => {
// 	button.addEventListener('click', () => {
// 		const newSource = button.getAttribute('video-source');
// 		const sourceElement = videoPlayer.querySelector('source');
// 		sourceElement.src = newSource;
// 		videoPlayer.load();
// 		videoPlayer.play();
// 	});
// });

let button = document.querySelector('.video-start-button')
button.addEventListener('click', () => {
	document.querySelector('#video-player').play();
	button.style.display = 'none';
})

document.querySelector('#video-burger').addEventListener('click', () => document.querySelector('.video_ul').classList.toggle('transparent'))
