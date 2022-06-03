const defaultBtn = document.querySelector('#default-btn');
const chooseBtn = document.querySelector(".custom-btn");
const cancelBtn = document.querySelector('#cancel-btn');
const fileName = document.querySelector('.file-name');
const wrapper = document.querySelector('.wrapper');
const img = document.querySelector('.image img');


let reguExpr = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;

// Makes so that clicking the custom 'Choose file' button work 
// similarly to the default 'Choose file' button 
function defaultBtnActive() {
    defaultBtn.click();
}

// Preview the uploaded image and display the file name
defaultBtn.addEventListener('change', () => {
    const file = defaultBtn.files[0];
    if (file) {
        reader = new FileReader();
        reader.onload = () => {
            img.src = reader.result;
            wrapper.classList.add("active");
        }

        cancelBtn.addEventListener("click", () => {
            img.src = "";
            wrapper.classList.remove("active");
        })
        reader.readAsDataURL(file); // read data of image as URL 
    }

    // Display the file name
    if (defaultBtn.value) {
        fileName.textContent = defaultBtn.value.match(reguExpr);

    }

})