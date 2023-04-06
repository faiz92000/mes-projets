<!DOCTYPE html>
<html>
<head>
	<title>Generator de citations</title>
</head>
<body>
	<h1>Générateur de citations</h1>
	<button onclick="generate()">Générer une citation</button>
	<p id="citation"></p>

	<script>
	
		let citations = [
			"La passion et les rêves sont comme le temps, rien ne peut les arrêter, et il en sera ainsi tant qu’il aura des hommes prêts à donner un sens au mot « LIBERTE » – Gold D.Roger",
			" Un pirate doit être fier de son nom. Tâchez de vous souvenir du mien – Monkey D.Luffy",
			"À quoi te sert ton ambition si tu ne peux pas protéger ton capitaine ? – Roronoa Zoro",
			"Quoi qu’il arrive, ne perdez jamais espoir face aux adversités du monde qui vous entoure ! Soyez assez forts pour pouvoir rire de tout, ne vous préoccupez pas du regard des autres. – Belmer",
			"J’ai beaucoup changé. Avant, pour avoir l’air plus fort, j’inventais des mensonges. Maintenant, je n’ai plus besoin de mentir. – Usopp",
      		"Ne pas voir la pourriture de ce monde, est un plaisir uniquement connu des aveugles. – Fujitora",
      		"Il y a des batailles qu’on ne gagne pas avec les poings ! – Barbe noire"
		];

		
		function generate() {
			let citation = document.getElementById("citation");
			let index = Math.floor(Math.random() * citations.length);
			citation.innerHTML = citations[index];
		}
	</script>
	<style>
        
		body {
  background-image: url("Logo_One_piece.svg.png");
  background-size: cover;
  background-repeat: no-repeat;
}

	</style>
</body>
</html>
