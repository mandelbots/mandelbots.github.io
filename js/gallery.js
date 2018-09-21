/**
 * @author Landmaster
 */

const GALLERY_LEN = document.getElementsByClassName('galleryCont').length;

let curImgIdx = 0;

function updateGallery() {
	let conts = document.getElementsByClassName('galleryCont');
	let prevActive = document.querySelector('.galleryCont.active');
	if (prevActive) prevActive.classList.remove('active');
	conts[curImgIdx].classList.add('active');
	
	setTimeout(function () { ++curImgIdx; curImgIdx %= GALLERY_LEN; updateGallery(); }, 6000);
}

updateGallery();
