
function myFunction(search)
{
    var searchText = document.getElementById(search).value.toLowerCase().trim();

    var letters = /^[A-Za-z]+$/;

    var newText = searchText.replace(/\s/g, "");

    if(newText.match(letters))
    {
        let newSearchText = searchText.replace(/\s/g, "-");
        let url = "https://www.worldometers.info/world-population/";
        let urlNew = url.concat(newSearchText,'-population/');

        document.getElementById("frmSearch").action = urlNew;
        document.getElementById("frmSearch").submit();
    }
    else
    {
        alert("Please, Enter a Correct Country name.");
    }
}
