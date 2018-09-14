/**
 * @author Landmaster
 */

const GALLERY_PICS = ['images/screamziki.png', 'images/boldrobotfighters.jpg'];
const GALLERY_DESCS = [
	'<h1>The Mandelbots</h1><p>We are small team of dedicated designers, builders, and programmers, creating, testing, and using robots for competitions across the region.</p>',
	'<h1>Robot Duelists</h1><p>Our robot is put to the test through a variety of challenges, both on its own and with human aid.</p>'
];

let gallery = document.getElementById('gallery');

for (let i=0; i<GALLERY_PICS.length; ++i) {
	let image = new Image();
	image.src = GALLERY_PICS[i];
	image.classList.add('gallery_img');
	if (i === 0) image.classList.add('active');
	gallery.appendChild(image);
	
	let galleryDesc = document.createElement('div');
	galleryDesc.innerHTML = GALLERY_DESCS[i];
	galleryDesc.classList.add('gallery_desc');
	if (i === 0) galleryDesc.classList.add('active');
	gallery.appendChild(galleryDesc);
}

let curImgIdx = 0;

function updateGallery() {
	let images = document.getElementsByClassName('gallery_img');
	document.querySelector('.gallery_img.active').classList.remove('active');
	images[curImgIdx].classList.add('active');
	
	let galleryDescs = document.getElementsByClassName('gallery_desc');
	document.querySelector('.gallery_desc.active').classList.remove('active');
	galleryDescs[curImgIdx].classList.add('active');
}

updateGallery();

setInterval(function () { ++curImgIdx; curImgIdx %= GALLERY_PICS.length; updateGallery(); }, 6000);