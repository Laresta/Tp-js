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

function change_onglet(name)
{
    document.getElementById('onglet_'+name_onglet).className = 'onglet_0 onglet';
    document.getElementById('onglet_'+name).className = 'onglet_1 onglet';
    document.getElementById('contenu_onglet_'+name_onglet).style.display = 'none';
    document.getElementById('contenu_onglet_'+name).style.display = 'block';
    name_onglet = name;
}

var name_onglet = 'NewsEtRecherche'; //permet de spécifier l'onglet qui apparait de base
change_onglet(name_onglet); //change l'onglet pour News Et Recherche
