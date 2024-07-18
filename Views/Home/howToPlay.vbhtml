@Code
    ViewBag.Title = "How To Play"
End Code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@ViewBag.Title</title>
    <link href="~/Content/stylezz.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
    <style>
        
        .instructions-list {
            list-style-type: none;
            padding-left: 0; 
        }

            .instructions-list li {
                font-size: 30px; 
                margin-bottom: 10px;
            }
    </style>
</head>
<body style="background-image: url('../../Assets/back1.jpg');">
    <div class="container">
        <h1 style="color: aliceblue; text-decoration: underline dotted aliceblue; ">Instructions</h1>
        <ul style="color:aliceblue" class="instructions-list">
            <li>Use the <strong><i class="fas fa-arrow-up"></i> <i class="fas fa-arrow-down"></i> <i class="fas fa-arrow-left"></i> <i class="fas fa-arrow-right"></i></strong> keys to move your spaceship.</li>
            <li>Press the space bar on your <strong><i class="fas fa-keyboard"></i></strong> to shoot </li>
            @*<li>Collect the chicken bits falling from killed chickens.</li>*@
            @*<li>Shooting eggs might get you presents.</li>*@
            <li ><i class="fas fa-gift"></i><strong> Shooting eggs might get you presents </strong><i class="fas fa-gift"></i></li>
            <li style="font-size: 50px;"><i class="fas fa-turkey"></i><strong> DO NOT TOUCH CHICKENS!!! </strong><i class="fas fa-turkey"></i></li>
            <li style="font-size: 50px;"><i class="fas fa-egg"></i><strong> DO NOT TOUCH FALLING EGGS </strong> <i class="fas fa-egg"></i></li>
            <li style="font-size: 50px;"><i class="fas fa-bolt"></i><strong> AVOID STRIKES AT ALL COSTS </strong> <i class="fas fa-bolt"></i></li>

        </ul>
        <button class="button" onclick='location.href="@Url.Action("Index", "Home")"'>Back to Home</button>
    </div>
</body>
</html>