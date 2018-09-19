/**
 * @author Landmaster
 */

const GALLERY_LEN = document.getElementsByClassName('galleryImg').length;

let curImgIdx = 0;

function updateGallery() {
	let images = document.getElementsByClassName('galleryImg');
	let prevActive = document.querySelector('.galleryImg.active');
	if (prevActive) prevActive.classList.remove('active');
	images[curImgIdx].classList.add('active');
	
	let galleryDescs = document.getElementsByClassName('galleryDesc');
	prevActive = document.querySelector('.galleryDesc.active');
	if (prevActive) prevActive.classList.remove('active');
	galleryDescs[curImgIdx].classList.add('active');
}

updateGallery();

setInterval(function () { ++curImgIdx; curImgIdx %= GALLERY_LEN; updateGallery(); }, 6000);