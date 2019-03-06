function submit_() {
    
var email = document.getElementById("email").value;
var pass = document.getElementById("password").value;

var xhr = new XMLHttpRequest();
var url = "https://expateo.com/app/ajax/ajax_usr.php";
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-type", "application/json");

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);
    
        if(json.gSesGuid==0){
       window.alert("Email ou Mot de passe incorrect");    
        }
        else
        {
            sessionStorage.setItem('Logged', 'true');
            window.location.href = "translations.html";  
        }
    }
};

var data = JSON.stringify({"ajaxAction": "connect", "gApp": "PG", "USR_EMAIL" : email, "USR_PASSWORD" : pass, "USR_APP" : "PG"});
xhr.send(data);





}