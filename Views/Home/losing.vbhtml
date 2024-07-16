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

<body style="background-image: url('../../Assets/back1.jpg');" class="d-flex justify-content-center align-items-center vh-100">
    
    <div class="container text-center">
        <div class="row align-items-center">
            <h2 style="color:aliceblue">BETTER LUCK NEXT TIME LOSER!!</h2>
            <div class="col-md-6">
                <img src="~/Assets/hahaha-laughing.gif" />
            </div>
            <div class="col-md-6 d-flex flex-column align-items-center">
                <button class="button" onclick="location.href='@Url.Action("Play", "Home")'">Try Again</button>
                <button class="button" onclick="location.href='@Url.Action("howToPlay", "Home")'">Revise Instructions</button>
                <button class="button " onclick="location.href='@Url.Action("Index", "Home")'">Exit</button>
            </div>
        </div>
    </div>

    <script src="~/Scripts/jquery.min.js"></script>
    <script src="~/Scripts/bootstrap.bundle.min.js"></script>
</body>
</html>
