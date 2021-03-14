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
