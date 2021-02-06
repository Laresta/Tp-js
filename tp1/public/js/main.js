affichlogcolor();


let h1 = document.querySelector('h1').innerHTML
logMessage(h1);
let titleNews = document.querySelector('#titleNews').innerHTML;
logMessage(titleNews);
let title = document.querySelectorAll('.title');
logMessageFromList(title);

let button =document.querySelector("input[name='addNewsBtn']");
button.onclick = addNews;
