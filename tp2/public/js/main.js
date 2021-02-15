
addIdArticle();
bindAllButton();

let a = new Article("oui",55,"caca");
a.addArticle();

let json = JSON.parse(ALLNEWSJSON);
console.log(json);

json.forEach(item => {
  let a = new Article(item.title,item.id,item.desc);
  a.addArticle();
  console.log(a);
});
