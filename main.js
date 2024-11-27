//search bar
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


//countdown timer for front page
let now = new Date();

let UpcomingDay = new Date(
    now.getFullYear(), 
    now.getMonth(),     
    now.getDate() + 1,  
    0, 0, 0, 0         
);

function CountdownDate(CountdownTime) {
    let now = new Date();
    let TimeRemaining = CountdownTime - now;
    console.log(TimeRemaining);

    let seconds = Math.floor(TimeRemaining / 1000);
    let minutes = Math.floor(TimeRemaining / (1000 *60));
    let hours = Math.floor(TimeRemaining / (1000 *60*60));

    let DisplayHour = hours;
    let DisplayMinute = minutes - (hours*60);
    let DisplaySecond = seconds - (minutes*60);

    const SecondElement = document.getElementById('seconds');
    const MinuteElement = document.getElementById('minutes');
    const HourElement = document.getElementById('hours');

    if (DisplaySecond < 10) {
        DisplaySecond = "0" + DisplaySecond;
    }
    if (DisplayMinute < 10) {
        DisplayMinute = "0" + DisplayMinute;
    }
    if (DisplayHour < 10) {
        DisplayHour = "0" + DisplayHour;
    }

    SecondElement.textContent = DisplaySecond;
    MinuteElement.textContent = DisplayMinute;
    HourElement.textContent = DisplayHour;

}
CountdownDate(UpcomingDay);
setInterval(function(){
    CountdownDate(UpcomingDay);
}, 1000);

//navbar
document.getElementById('select_box').addEventListener('change', function () {
    if (this.value) {
        window.location.href = this.value;
    }
});

const dropdown = document.getElementById('select_box');
const menu_carot = document.getElementById('menu_carot')
dropdown.addEventListener('focus', function () {
    menu_carot.classList.add('rotate');
});
dropdown.addEventListener('blur', function () {
    menu_carot.classList.remove('rotate');

});
function open_dropdown() {
    dropdown.focus();
}
menu_carot.addEventListener('click', open_dropdown);



//cloud interactivity
const left_cloud = document.getElementById('left_cloud');
const right_cloud = document.getElementById('right_cloud');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const opacity = Math.max(1 - scrollY / 750, 0);

    if (window.innerWidth > 1000) {
        const move_distance = scrollY * Math.pow(1, scrollY * 0.5);
        left_cloud.style.transform = `translateX(${-move_distance}px)`;
        right_cloud.style.transform = `translateX(${move_distance}px)`;

        left_cloud.style.opacity = opacity;
        right_cloud.style.opacity = opacity;
    }
    else {
        left_cloud.style.transform = '';
        right_cloud.style.transform = '';
    }
});


//mute button
const mute_image = document.getElementById('mute_image');
const mute_checkbox = document.getElementById('toggle_mute');
const animals_video = document.getElementById('animals_video');
const muted = 'resources/Iconify/mute.svg';
const unmuted = 'resources/Iconify/audio.svg';


mute_checkbox.addEventListener('change', ()=> {
   if (mute_checkbox.checked) {
    mute_image.src = unmuted;
    animals_video.muted = false;
   } else {
    mute_image.src = muted;
    animals_video.muted = true;
   }
});



