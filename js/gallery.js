/*Name this external file gallery.js*/

function upDate(previewPic){

	var imageContainer = document.getElementById('image');
	imageContainer.setAttribute('data-original', imageContainer.innerHTML);
	imageContainer.style.background = 'url('+previewPic.src+')';
	imageContainer.innerHTML = previewPic.alt;

}

function unDo(){

	var imageContainer = document.getElementById('image');
	imageContainer.style.background = 'url()';
	imageContainer.innerHTML = imageContainer.dataset.original;
	
}
