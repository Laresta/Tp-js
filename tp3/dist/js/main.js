let h1 = $('h1');
logMessageWithDate(h1.html());

let titleNews = $('#titleNews');
logMessageWithDate(titleNews.html());

let button = $('input[name="addNewsBtn"]')[0];
bindButton(button);

let buttons = $('article button');
$(buttons).each(function(i,element){
	element.onclick = viewdetailClick;
});

let articles = JSON.parse(ALLNEWSJSON);
$(articles).each(function(i, element){
	let a = new Article(element.id, element.title, element.description);
	a.addArticle();
});

let titles = $('.title');
if (titles === undefined || titles.length <=1){
    throw new Error('Un seul title trouvé !');
}
$.each(titles, function(index, value){
	logMessageWithDate($(value).html());
});

/*
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
today = yyyy + '-' + dd + '-' + mm;

var url = 'http://newsapi.org/v2/everything?q=minecraft&from='+ today +'&sortBy=publishedAt&apiKey=9b4e42c6404c48cab0f04cb200654d6c&pageSize=5';

$.ajax({
	url: url,
	method: 'GET',
	dtaType: 'jsonp',
	cors: true ,
	contentType:'application/json',
	secure: true,
	headers: {
		'Access-Control-Allow-Origin': '*',
	},
	beforeSend: function (xhr) {
		xhr.setRequestHeader ("Authorization", "Basic " + btoa(""));
	},
})

.done(function(data, textStatus, xhr) {
	if(xhr.status >= 300 && xhr.status < 400)
		console.log('Attention redirection');

	console.log(xhr);
	console.log(xhr.status);
	console.log(textStatus);
	console.log(data); //JSON
	console.log(data.headers); //JSON
})

.fail(function(xhr, textStatus, error) {
	console.log(xhr.status);
	console.log(textStatus);
	throw new Error(error);
});
*/
