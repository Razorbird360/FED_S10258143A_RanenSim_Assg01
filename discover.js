//search bar interactivity, removes hide classlist when search icon is clicked,
// and adds it back when cancel icon is clicked 
const openIcon = document.querySelector('#search_icon');
const closeIcon = document.querySelector('#cancel_icon');
const container = document.querySelector('.search_container');
const bar_bg = document.querySelector('.search_bar');

openIcon.addEventListener('click', ()=>{
    container.classList.remove('hide_container')
    bar_bg.classList.remove('hide_bar_bg')
    openIcon.src = "resources/Iconify/Search_black.svg"
    closeIcon.src = "resources/Iconify/Cancel_black.svg"
});
closeIcon.addEventListener('click', ()=>{
    container.classList.add('hide_container')
    setTimeout(()=> {
        bar_bg.classList.add('hide_bar_bg')
        openIcon.src = "resources/Iconify/Search.svg"
        closeIcon.src = "resources/Iconify/Cancel.svg"
    },500)
});


//change video source for discover page, as css content can only be used for images
//video changes to a cut version for phone media query
function changevideo() {
    const video = document.getElementById('videobg');
    if (window.innerWidth < 1000) {
        video.src = "resources/Animals_Page/Bg_animals_cut.mp4";
    } else {
        video.src = "resources/Animals_Page/Bg_animals.mp4";
    }

    video.load();
}
changevideo();
window.addEventListener("resize", changevideo);