/**
 * @author Landmaster
 */

const GALLERY_PICS = ['images/screamziki.png', 'images/boldrobotfighters.jpg'];
const GALLERY_DESCS = [
	'<h1>The Mandelbots</h1><p>We are small team of dedicated designers, builders, and programmers, creating, testing, and using robots for competitions across the region.</p>',
	'<h1>Robot Duelists</h1><p>Our robot is put to the test through a variety of challenges, both on its own and with human aid.</p>'
];

let _imgs = new Array(GALLERY_PICS.length);

for (let i=0; i<GALLERY_PICS.length; ++i) {
	_imgs[i] = new Image();
	_imgs[i].src = GALLERY_PICS[i];
}

let gallery = document.getElementById('gallery');

let curImgIdx = 0;

function updateGallery() {
	gallery.style.backgroundImage = "url('" + GALLERY_PICS[curImgIdx] +"')";
	let oldGalleryDesc = document.getElementsByClassName('gallery_desc')[0];
	let newGalleryDesc = document.createElement('div');
	newGalleryDesc.classList.add('gallery_desc');
	newGalleryDesc.innerHTML = GALLERY_DESCS[curImgIdx];
	gallery.appendChild(newGalleryDesc);
	if (oldGalleryDesc) {
		oldGalleryDesc.style.opacity = '0';
		let deathKnell = function () {
			oldGalleryDesc.remove();
		};
		oldGalleryDesc.addEventListener('transitionend', deathKnell);
	}
}

updateGallery();

setInterval(function () { ++curImgIdx; curImgIdx %= GALLERY_PICS.length; updateGallery(); }, 6000);