let index = 0;

showImage(index);

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