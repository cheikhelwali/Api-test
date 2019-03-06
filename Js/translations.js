var data = sessionStorage.getItem('Logged');
if(data=="true")
{
var xhr = new XMLHttpRequest();
var url = "https://expateo.com/app/ajax/ajax_trn.php";


xhr.open("POST", url, true);
xhr.setRequestHeader("Content-type", "application/json");

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);        
        
      for (x in json.translations)
{
    document.getElementById("translation").innerHTML+="<li><span id='attribut'>"+x+"</span></br>"+ json.translations[x] +"</li> ";
}
  
  
}
};

var data = JSON.stringify({"ajaxAction": "RP_List", "TRN_LANGUAGE": "fr"});
xhr.send(data);
}
else
{
    alert("you need to login");
}