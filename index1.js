//  Selection de l'espace affichage

const alone = document.querySelector('.alone');

// Selection de tout les photos restants

const phts = document.querySelectorAll(".pht");
//console.log(phts);

const handleshow  =(pht)=>{
     pht.addEventListener('click',(e)=>{
        const phtss =pht.src;
		alone.src= phtss;
	})

}

// Application de la fonction HandleShwo 

phts.forEach((pht)=>{
	 handleshow(pht);

})