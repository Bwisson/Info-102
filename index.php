<!doctype html>
<html lang="fr">

<head>
  <meta charset="utf-8">
  <title>Top 5</title>
  <link rel="stylesheet" href="style.css">
</head>






<body>
<section>
  <h1>Quel est votre animé préféré ?</h1>
  <form method="post" action="vote.php">
	<?php
	$db = new PDO('mysql:dbname=top5td;host=localhost;charset=utf8', 'root', 'root');
	
	$result = $db->query("SELECT * FROM anime ORDER BY vote_anime DESC");

	while ($row = $result->fetch(PDO::FETCH_ASSOC)){
		echo "<p>\n";
		echo '<label for="'.$row['id_anime'].'">'.$row['titre_anime'].'</label>'."\n";
		echo '<input type="radio" name="anime" size="20px" value="'.$row['id_anime'].'" id="'.$row['id_anime'].'">'."\n";
		echo "</p>\n";
	}
	?>
  <p>
	<input type="submit" value="Mon choix">
  </p>
  </form>
</section>
</body>






</html>