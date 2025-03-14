const buttonAlert = document.querySelector('#back-button');
const cover = document.querySelector('#cover');
const openBtn = document.querySelector('#open-button');
const closeBtn = document.querySelector('#close-button');
const switchButton = document.querySelector('#switch-button');

window.onscroll = function() {scrollFunction(); 
};
const scrollFunction = () => {
    if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        buttonAlert.style.display = "block";
    } else {
        buttonAlert.style.display = "none";
    }
}

const displayElement = () => {
   cover.classList.toggle('hidden');
}
const switchTheme = () => {
    document.body.classList.toggle('switch-mode');
}
const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
buttonAlert.addEventListener('click', backToTop);

switchButton.addEventListener('click', switchTheme);
openBtn.addEventListener('click', displayElement);
closeBtn.addEventListener('click', displayElement);