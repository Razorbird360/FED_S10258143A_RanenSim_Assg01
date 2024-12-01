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



//moves article container down when load more button is clicked, and back up when clicked again
//function is called once first to move the container up first
//article container 2 hides behind article container 1
//rotates the load more button arrow when clicked
//function triggered by load more button onclick
//removes transition when content is hidden
//changes paragraph text when load more button is clicked
let article_down = true;
function change_article_height() {
    const article_container = document.querySelector('.ac_2');
    const load_more_container = document.querySelector('.load_more_container');
    const load_arrow = document.getElementById('load_arrow');
    const load_text = document.getElementById('load_text');

    if (article_down) {
        article_down = false;
        article_container.style.transform = `translateY(-67vh)`;
        load_more_container.style.marginTop = `5vh`;
        load_arrow.style.transform = `rotate(0)`;
        article_container.style.transition = `none`;
        load_text.textContent = "Load More";
    }
    else {
        article_down = true;
        article_container.style.transform = `translateY(0)`;
        load_more_container.style.marginTop = `70vh`;
        load_arrow.style.transform = `rotate(-180deg)`;
        article_container.style.transition = `transform 0.5s ease-in-out`;
        load_text.textContent = "Hide";
    }

}
change_article_height();

//hide article container 2 when window is in mobile view, and does the opposite in desktop view
function change_article_details() {
    if (window.innerWidth < 1000) {
        article_down = true;
        change_article_height();
    } else {
        article_down = false;
        change_article_height();
    }
}

window.addEventListener('resize', change_article_details);
window.addEventListener('load', change_article_details);




// save articles
document.querySelectorAll('.save_button').forEach(button => {
    button.addEventListener('click', () => {
        const articles = JSON.parse(localStorage.getItem('articles')) || [];

        const add_article = {
            id: button.getAttribute('data-id'),
            title: button.getAttribute('data-title'),
            desc: button.getAttribute('data-desc'),
            Image: button.getAttribute('data-image')
        }

        let exist = false
        for (let i = 0; i < articles.length; i++) {
            if (articles[i].id === add_article.id) {
                exist = true;
                break;
            }
        }

        if (!exist) {
            articles.push(add_article);
            localStorage.setItem('articles', JSON.stringify(articles));
        }

    })
})    
    
    
    
    
    
    
