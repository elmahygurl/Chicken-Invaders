
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="~/Content/stylezz.css" rel="stylesheet">
    <script src="~/Scripts/HomeScriptt.js"></script>
    <title>Chicken Invaders</title>
</head>

<body style="background-image: url('../../Assets/back1.jpg');">
    <div class="container">
        <h1 style="font-size: 60px; color:aliceblue;">Chicken Invaders</h1>
        <div class="button-container">
            <button class="button">Start Game</button>
            <button class="button" onclick="location.href='@Url.Action("howToPlay", "Home")'">How to play</button>
            <button class="button exit-button">Exit</button>  @*handle later*@ 
            
        </div>
    </div>
</body>
