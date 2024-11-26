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