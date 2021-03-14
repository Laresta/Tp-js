class Article {
    id;
    title;
    description;

    constructor(id, title, description){
        this.id = id;
        this.title = title;
        this.description = description;
    }

    createArticleHtml() {
        let newArticle = $('<article> </article>');
        let h3 = $('<h3> </h3>');
        let p = $('<p> </p>');
        let button = $('<button> </button>');
        let news = $('#news');

        h3.html(this.title);
        p.html(this.description);
        button.html('View detail');
        this.bindButtonViewdetail(button[0], viewdetailClick);
        h3.attr('class','title');
        newArticle.attr('id',this.id);

        newArticle.append(h3);
        newArticle.append(p);
        newArticle.append(button);
        news.append(newArticle);
    }

    checkArticleUnicity() {
        let h3s =$('.title');
        let form = $('#addNewsForm');
        for (let i = 0; i < h3s.length; i++) {
            if (h3s[i].innerHTML.toLowerCase().trim() === this.title.toLowerCase().trim()) {
                addError('Erreur article deja existant', form);
                return false;
            }
        }
        return true;
    }

    checkValue() {
        if (this.title === '') {
            let form = $('#addNewsForm');
            addError('Title vide', form);
            return false;
        }

        if (this.description === '') {
            let form = $('#addNewsForm');
            addError('Description vide', form);
            return false;
        }

        return true;
    }

    addArticle() {
        clearErrors();

        if (!this.checkValue()) {
            return false;
        }

        if (!this.checkArticleUnicity()) {
            return false;
        }

        this.createArticleHtml();
        return true;
    }

    bindButtonViewdetail(button, callback){
        button.onclick = callback;
    }
}

const ROUGE = '#FF0000'; //écrire en MAJ par convention
const BLEU = '#0000FF';
const VERT = '#008000';

const ALLNEWSJSON = `[
						{"id": "4", "title": "News 4", "description": "Ma super news 4"},
						{"id": "5", "title": "News 5", "description": "Ma super news 5"}
					]`;
function bindButton(button){
    button.onclick = function(event){
        event.preventDefault();
        let title = $('input[name="titleToAdd"]');
        let description = $('textarea[name="descriptionToAdd"]');

        let article = new Article(0, title.val(), description.val());
        if(article.addArticle()){
            title.val('');
            description.val('');
        }
        return false;
    };
}

function clearErrors(){
    let errors = $('.error');

    if(errors){
        while(errors.length > 0 && errors[0].parentNode != null){
            errors[0].remove(errors[0]);
        }
    }
}

function addError(message, parent){
    let error = $('<p> </p>');
    error.html(message);
    error.css("color", ROUGE);
    error.attr('class','error');
    parent.prepend(error);
}

function viewdetailClick(){
    let p = $(this).parent().children('p');
    logMessageWithDate(p.html());
}

function changementOnglet(nameClass){
    let onglet;
    switch(nameClass){
      case 'Recherche':
        onglet= document.querySelector('.AjoutArticle');
        onglet.hidden=true;
        document.querySelector('div.Recherche').hidden=false;
        break;
      case 'AjoutArticle':
        onglet=document.querySelector('.Recherche');
        onglet.hidden=true;
        document.querySelector('div.AjoutArticle').hidden=false;
        break;
    }
}

function logMessageWithDate(message){
	let today = new Date();
	console.log(today.toLocaleString() + ' : ' + message );
}
let button = $('input[name="addNewsBtn"]')[0];
bindButton(button);

function switchTab(){
    $('.onglet').hide(); //on cache tous les éléments
    $($(this).data('target')).show(); //on affiche uniquement le tab que l'on veut
}

let tabs = $('.tab');
tabs.each(function(){
    $(this).click(switchTab);
});

function iterate(){
	for (let i = 0; i < 5; i++) {
		logMessageWithDate(i);
		
		if (i === 0) 
			logMessageWithDate(VERT); 
		else if (i % 2 === 0) 
			logMessageWithDate(ROUGE); 
		else 
			logMessageWithDate(BLEU); 
	}
}
var app = {
  data() {
  return {
    test : 'ahhh'
  }
}
};
Vue.createApp(app).mount('#ah');

const Articles = {
  data() {
    let articles = JSON.parse(ALLNEWSJSON);
    return {
      articles: articles,
    };
  }
};

const newsTemplate = `<article>
			              <h3 class="title">{{ article.title }}</h3>
			              <button @click="log(article.description)">View detail</button>
		              </article>`;

const newsComponent = {
  props: ['article'],
  template: newsTemplate,
  methods: {
    log: logMessageWithDate
  }
};


Vue.createApp(Articles).component('news', newsComponent).mount('#news');
