// displays article if there is any
//adds article if it exists in local storage
let articles = JSON.parse(localStorage.getItem('articles')) || [];
let article_container = document.getElementById('saved_articles_container');
const empty_page = document.querySelector('.empty_page');

if (articles.length === 0) {
    empty_page.style.display = `flex`;
}
else {
    empty_page.style.display = `none`;
    articles.forEach((article, index) => {
        const temp_article = document.createElement('div');
        temp_article.classList.add('article_item');

        temp_article.innerHTML = `
        <img src="${article.Image}" alt="article image">
        <div class="article_item_text">
            <h3>${article.title}</h3>
            <p>${article.desc}</p>
        </div>
        <img src="resources/Iconify/trashcan.svg" alt="remove item icon" class="remove_icon" id="removeiconstyle" data-index="${index}">`
        

        article_container.appendChild(temp_article);
    });

    //add the event listener for the delete icon
    document.querySelectorAll('.remove_icon').forEach(icon => {
        icon.addEventListener('click', (e) => {
            const article_index = e.target.getAttribute('data-index'); 
            removeArticle(article_index);
        });
    });
}

function removeArticle(index) {
    articles.splice(index, 1);

    localStorage.setItem('articles', JSON.stringify(articles));
    const article_items = document.querySelectorAll('.article_item');
    article_items[index].remove();
    if (articles.length === 0) {
        empty_page.style.display = `flex`;
    }
}
