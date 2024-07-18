
@Code
    ViewData("Title") = "Winning"
End Code

<!DOCTYPE html>
<html>
<head>
    <title>@ViewData("Title")</title>
    <link href="~/Content/stylezz.css" rel="stylesheet">
    <title>You won!</title>
</head>

<body style="background-image: url('../../Assets/back1.jpg');" class="d-flex justify-content-center align-items-center vh-100">
    <div class="container text-center">
        <div class="row align-items-center">
            <div class="col-md-6">
                <img class="img-fluid" src="~/Assets/bravo.png" alt="Congratulations" />
            </div>
            <div class="col-md-6 d-flex flex-column align-items-center">
                <button class="button mb-2" onclick="location.href='@Url.Action("Play", "Home")'">Play Again</button>
                <button class="button" onclick="location.href='@Url.Action("Index", "Home")'">Exit</button>
                <p style="color:aliceblue" id="current-score"></p>
                <p style="color:aliceblue" id="high-score"></p>
                <p id="new-high-score" style="display: none;color:aliceblue;">Congratulations! New High Score!</p>
            </div>
        </div>
    </div>

    <script src="~/Scripts/jquery.min.js"></script>
    <script src="~/Scripts/bootstrap.bundle.min.js"></script>
</body>
</html>
<script>
    document.addEventListener('DOMContentLoaded', (event) => {
        const currentScore = localStorage.getItem('currentScore');
        const highScore = localStorage.getItem('highScore');

        document.getElementById('current-score').innerText = `Your Score: ${currentScore}`;
        document.getElementById('high-score').innerText = `High Score: ${highScore}`;

        if (currentScore == highScore) {
            document.getElementById('new-high-score').style.display = 'block';
        }
    });
</script>