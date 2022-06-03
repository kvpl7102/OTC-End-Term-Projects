let reguExpr = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;

const imageInput = document.querySelector('#img-input');
const container = document.querySelector('.container');
const cancelBtn = document.querySelector('#cancel-btn');

const dots = document.querySelector('.dots');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');


let index = 0;

function showImage(i) {
    index += i;

    const images = document.getElementsByClassName("image");
    const dots = document.getElementsByClassName("dot");

    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }

    for (j = 0; j < dots.length; j++) {
        dots[j].className = dots[j].className.replace(" active", "");
    }

    if (index > images.length - 1) {
        index = 0;
    } else if (index < 0) {
        index = images.length - 1;
    }

    images[index].style.display = "block";
    dots[index].className += " active";
}


imageInput.addEventListener('change', () => {
    const imgFile = imageInput.files[0];
    if (imgFile) {
        reader = new FileReader();
        reader.addEventListener('load', () => {

            prev.classList.add('active');
            next.classList.add('active');

            // Add new image to the gallery
            const div = document.createElement('div');
            div.setAttribute('class', 'image');
            div.innerHTML = `<img src="/img/${imageInput.value.match(reguExpr)}"/>`;
            container.appendChild(div);

            // Create new dot as new images being added to the gallery
            const span = document.createElement('span');
            span.setAttribute('class', 'dot');
            dots.appendChild(span);

            showImage(index);
            index += 1;
        })
        reader.readAsDataURL(imgFile);
    }
})

function defaultBtnActive() {
    imageInput.click();
}