window.addEventListener("load", function () {
    tmr=this.setInterval(LoadPage,3000);
});
function LoadPage()
{
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
}