// Vérification de soumition du formulaire 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Récupérez les données du formulaire
  $username = $_POST["username"];
  $password = $_POST["password"];
  $email = $_POST["email"];

  // Connection à la base de données MySQL
  $conn = mysqli_connect("localhost", "username", "password", "database_name");

  // Vérification de la connexion
  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }

  // Vérification utilisateur dans la base de données
  $sql = "SELECT * FROM users WHERE username='$username'";
  $result = mysqli_query($conn, $sql);

  if (mysqli_num_rows($result) > 0) {
    // L'utilisateur existe déjà
    echo "Cet utilisateur existe déjà.";
  } else {
    // Hachage du mot de passe avant de le stocker dans la base de données
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Génération d'un code de confirmation aléatoire
    $confirmation_code = bin2hex(random_bytes(16));

    // Inséretion des informations utilisateur dans la base de données
    $sql = "INSERT INTO users (username, password, email, confirmation_code)
    VALUES ('$username', '$hashed_password', '$email', '$confirmation_code')";

    if (mysqli_query($conn, $sql)) {
      // Envoi d'un e-mail de confirmation
      $to = $email;
      $subject = "Confirmation de l'inscription";
      $message = "Cliquez sur ce lien pour confirmer votre inscription : http://www.example.com/confirm.php?code=$confirmation_code";
      $headers = "From: webmaster@example.com\r\n";
      $headers .= "Content-type: text/html\r\n";
      mail($to, $subject, $message, $headers);

      echo "Un e-mail de confirmation a été envoyé à votre adresse e-mail.";
    } else {
      echo "Erreur: " . $sql . "<br>" . mysqli_error($conn);
    }
  }

  // Fermeture la connexion à la base de données
  mysqli_close($conn);
}
