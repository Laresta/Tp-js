
addIdArticle();
bindAllButton();

let a = new Article("oui",55,"caca");
a.addArticle();

let json = JSON.parse(ALLNEWSJSON);
logMessageConsole(a);
console.log(json);

json.forEach(item => {
  let a = new Article(item.title,item.id,item.desc);
  a.addArticle();
  logMessageConsole(a);
  console.log(a);
});
