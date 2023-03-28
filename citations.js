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
			"La vie est un mystère qu'il faut vivre, et non un problème à résoudre. - Gandhi",
			"Il n'y a qu'une façon d'échouer, c'est d'abandonner avant d'avoir réussi. - Georges Clemenceau",
			"La patience est amère, mais son fruit est doux. - Jean-Jacques Rousseau",
			"Le bonheur est souvent la seule chose qu'on puisse donner sans l'avoir et c'est en le donnant qu'on l'acquiert. - Voltaire",
			"Tout ce que nous avons à décider, c'est ce que nous devons faire du temps qui nous est imparti. - J.R.R. Tolkien",
      "Je suis le developpeur qu'il vous faut pour votre projet. - Faïz Ali",
      "N'importe quel idiot peut écrire du code qu'un ordinateur peut comprendre. Les bons programmeurs écrivent du code que les humains peuvent comprendre. - Martin Fowler"
		];

		
		function generate() {
			let citation = document.getElementById("citation");
			let index = Math.floor(Math.random() * citations.length);
			citation.innerHTML = citations[index];
		}
	</script>
</body>
</html>
