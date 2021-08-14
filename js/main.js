let targetImage = document.getElementById('image');
let inputRanges = document.querySelectorAll('.inputrange');
document.getElementById('onlineImageUrlForm').addEventListener('submit', (e) => {
    e.preventDefault();
    let ImageUrl = document.getElementById('image_url');
    let ImageUrlValue = ImageUrl.value;
    targetImage.setAttribute('src', ImageUrlValue);
});

for (let i = 0; i <= inputRanges.length - 1; i++) {
    inputRanges[i].addEventListener('input', editImage);
}

function editImage() {
    let gs = document.getElementById('gs').value;
    let blur = document.getElementById('blur').value;
    let hr = document.getElementById('hr').value;
    let sepia = document.getElementById('sepia').value;
    let invert = document.getElementById('invert').value;
    let contrast = document.getElementById('contrast').value;
    let opacity = document.getElementById('opacity').value;
    let saturate = document.getElementById('saturate').value;

    targetImage.style.filter = 'grayscale(' + gs + '%) blur(' + blur + 'px) hue-rotate(' + hr + 'deg) sepia(' + sepia + '%) invert(' + invert + '%)  contrast('+contrast+'%) opacity('+(opacity/100)+') saturate('+(saturate/100)+') ';
    
}


document.getElementById('inputRangesForm').addEventListener('reset', reset);

function reset() {
    inputRangesForm.reset();
    setTimeout(function () {
        editImage();
    }, 0);
}
