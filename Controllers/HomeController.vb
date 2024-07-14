Public Class HomeController
    Inherits System.Web.Mvc.Controller

    Function Index() As ActionResult
        ViewData("Title") = "Home Page"

        Return View()
    End Function
    Public Function HowToPlay() As ActionResult
        Return View("howToPlay")
    End Function
End Class
