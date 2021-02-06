function affichlogcolor(){
  let i = 0;
  while(i < 5){
    if (i === 0)couleur = vert;
    else if( i % 2 === 0)couleur = rouge;
    else couleur = bleu;
    console.log("%cindex :"+i,`color:${couleur}`);
    i++ ;
  }
}
