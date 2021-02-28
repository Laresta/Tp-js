let h1 = $('h1');
logMessageWithDate(h1.html());

let titleNews = $('#titleNews');
logMessageWithDate(titleNews.html());




let button = $('input[name="addNewsBtn"]');
bindButton(button);

let buttons = $('article button');
$.each(function(element){
	element.onclick = viewdetailClick;
});

let articles = JSON.parse(ALLNEWSJSON);
articles.forEach(function(element){
	let a = new Article(element.id, element.title, element.description);
	a.addArticle();
});

let titles = $('.title');
if (titles == undefined || titles.length <=1){
    throw new Error('Un seul title trouvé !');
}
$.each(titles, function(index, value){ logMessageWithDate(value.InnerHtml)});
