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
        Return View("play")
    End Function
    Public Function Losing() As ActionResult
        Return View("losing")
    End Function
    Public Function Winning() As ActionResult
        Return View("winning")
    End Function

End Class
