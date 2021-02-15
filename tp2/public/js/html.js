
/*
function bindButton(button){
	button.onclick = function(e){
		e.preventDefault();
    	let champ = document.querySelector('input[name="titleToAdd"]');
		addArticle(champ.value);
		return false;
	}
}
*/

function bindAllButton(){
	let buttons = document.querySelectorAll("button");
	buttons.forEach(button => {
		button.onclick = clickButtonDetails;
	});
}
