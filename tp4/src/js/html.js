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
