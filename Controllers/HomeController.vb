Public Class HomeController
    Inherits System.Web.Mvc.Controller

    Function Index() As ActionResult
        ViewData("Title") = "Home Page"

        Return View()
    End Function
    Public Function HowToPlay() As ActionResult
        Return View("howToPlay")
    End Function
    Public Function Play() As ActionResult
        Return View("play") ' Assuming "play.vbhtml" is your view for the game
    End Function
End Class
