@Code
    ViewData("Title") = "Losing"
End Code

<!DOCTYPE html>
<html>
<head>
    <title>@ViewData("Title")</title>
    <link href="~/Content/stylezz.css" rel="stylesheet">
    <title>You lost!</title>
</head>
<body style="background-image: url('../../Assets/back1.jpg');">
    <div class="container">
        <div class="mybutton-container">
            <h2 style="color:aliceblue">BETTER LUCK NEXT TIME LOSER!!</h2>
            <img src="~/Assets/hahaha-laughing.gif" />
            <button class="button" onclick="location.href='@Url.Action("Play", "Home")'">Try Again</button>
            <button class="button" onclick="location.href='@Url.Action("howToPlay", "Home")'">Revise Instructions</button>
            <button class="button " onclick="location.href='@Url.Action("Index", "Home")'">Exit</button>
        </div>
    </div>
</body>
</html>
