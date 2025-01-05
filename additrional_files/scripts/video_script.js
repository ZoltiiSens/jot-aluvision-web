// setTimeout(() => {
// 	let video = document.querySelector('#video-player');
// 	video.muted = !video.muted;
// 	video.play();
// }, 1000)

let video = document.querySelector('#video-player')

document.querySelector('#stop-video').addEventListener('click', (button) => {
	video.pause();
});

document.querySelector('#start-video').addEventListener('click', (button) => {
	video.play();
});