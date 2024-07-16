@Code
    ViewBag.Title = "Play Game"
End Code

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>@ViewBag.Title</title>
    <link href="~/Content/stylezz.css" rel="stylesheet">
</head>
<body class="backgroundPlay">

    <canvas id="gameCanvas" width="1530" height="732"></canvas>

    <script src="~/Scripts/Boss.js"></script>
    <script src="~/Scripts/Strike.js"></script>
    <script src="~/Scripts/Gift.js"></script>
    <script src="~/Scripts/Fire.js"></script>
    <script src="~/Scripts/Player.js"></script>
    <script src="~/Scripts/Chicken.js"></script>
    <script src="~/Scripts/Egg.js"></script>
    <script src="~/Scripts/GameController.js"></script>
</body>

</html>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        const canvas = document.getElementById('gameCanvas');
        const gameController = new GameController(canvas.width, canvas.height);
        gameController.startGame();
    });
</script>