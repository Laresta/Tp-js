class Article{
  id = null;
  title = null;
  description = null;

  constructor(title , id , description){
    this.title = title;
    this.id = id;
    this.description = description;
  }
  createArticle() {
      let newArticle = document.createElement('article');
      let h3 = document.createElement('h3');
      let news = document.querySelector('#news');
      let description = document.createElement('p');
      let button = document.createElement('button');
      button.innerHTML = "View Details";
      newArticle.id = this.id;
      description.innerHTML = this.description;
      h3.innerHTML = this.title;
      h3.classList.add('title');
      button.onclick = clickButtonDetails;
      newArticle.append(h3);
      newArticle.append(description);
      newArticle.append(button);
      news.append(newArticle);
      return this;
  }
  checkArticleUnicity() {
      let h3s = document.querySelectorAll('.title');
      for (let i = 0; i < h3s.length; i++) {
          if (h3s[i].innerHTML.toLowerCase().trim() === this.title.toLowerCase().trim()) {
              let error = document.createElement('p');
              error.innerHTML = 'Erreur article deja existant';
              error.style.color = ROUGE;
              error.classList.add('error');
              let form = document.querySelector('#addNewsForm');
              form.prepend(error);
              return false;
          }
      }
      return true;
  }

  addArticle() {
      let errors = document.querySelectorAll('.error');
      if(errors){
          while(errors.length > 0){
              errors[0].parentNode.removeChild(errors[0]);
          }
      }
      if (!this.checkArticleUnicity()) {
          return;
      }
      this.createArticle();
      return this;

  }
}
