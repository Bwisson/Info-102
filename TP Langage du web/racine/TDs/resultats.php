<!doctype html>
<html lang="fr">

<head>
  <meta charset="utf-8">
  <title>Top 5</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
<section>

  <div id="top">
	<h1>TOP 5</h1>
  
	<?php
	$db = new PDO('mysql:dbname=top5td;host=localhost;charset=utf8', 'root', 'root');

	$result = $db->query("SELECT * FROM anime ORDER BY vote_anime DESC LIMIT 5");
	
	$rang = 1;
	while ($row = $result->fetch(PDO::FETCH_ASSOC)){
		echo "<p>\n"; // Affiche un retour à la ligne
		echo $rang.' - '.$row['titre_anime'].' ('.$row['vote_anime'].')';
		echo "</p>\n";
		$rang++;
	}
	?>
  </div>

  
  <?php
	$result = $db->query("SELECT image_anime FROM anime WHERE vote_anime=(SELECT MAX(vote_anime) FROM anime)");
	$row = $result->fetch(PDO::FETCH_ASSOC);
	
	echo '<img class="cover" src="Images/'.$row['image_anime'].'" />';
  ?>

</section>
<a href="index.php">Retour aux votes</a>
</body>
</html>
  