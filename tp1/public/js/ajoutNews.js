function addNews(){
  let h3 = document.createElement('h3');
  h3.className="title";
  h3.innerHTML=document.querySelector("input[name='titleToAdd']").value;
  let article = document.createElement('article');
  article.append(h3);
  let section = document.querySelector('section');
  section.append(article);
  return false;
}
