<?php
session_start();

// Vérifiez si l'utilisateur est connecté
if (!isset($_SESSION["username"])) {
  header("Location: login.php");
  exit();
}
?>

<!DOCTYPE html>
<html>
<head>
  <title>Tableau de bord</title>
</head>
<body>
  <h1>Bienvenue, <?php echo $_SESSION["username"]; ?></h1>
  <p>Vous êtes connecté.</p>
  <a href="logout.php">Déconnexion</a>
</body>
</html>
