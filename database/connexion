// Vérification de soumission du formulaire
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Récupérez les données du formulaire
  $username = $_POST["username"];
  $password = $_POST["password"];

  // Connexion à la base de données MySQL
  $conn = mysqli_connect("localhost", "username", "password", "database_name");

   // Vérification de la connexion
  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }

  // Recherche de l'utilisateur dans la base de données
  $sql = "SELECT * FROM users WHERE username='$username'";
  $result = mysqli_query($conn, $sql);

  if (mysqli_num_rows($result) > 0) {
    // L'utilisateur existe, vérifiez le mot de passe
    $row = mysqli_fetch_assoc($result);
    $hashed_password = $row["password"];
    if (password_verify($password, $hashed_password)) {
      // Mot de passe correct, démarrage de la session
      session_start();
      $_SESSION["username"] = $username;
      header("Location: dashboard.php");
    } else {
      // Mot de passe incorrect
      echo "Nom d'utilisateur ou mot de passe incorrect.";
    }
  } else {
    // L'utilisateur n'existe pas
    echo "Nom d'utilisateur ou mot de passe incorrect.";
  }

  // Fermeture la connexion à la base de données
  mysqli_close($conn);
}

