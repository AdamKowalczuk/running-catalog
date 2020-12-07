window.onload = function () {
    var formularz = document.getElementById('form');
    var listener = function (e) {
        e.preventDefault();
        var valid = Sprawdz();
        if (valid) {
            formularz.removeEventListener('submit', listener, true);
            formularz.submit();
        }
        else {
            alert("Popraw pola zaznaczone na czerowno. Jeśli to hasła, to znaczy, że się różnią");
            formularz.removeEventListener('submit', listener, false);
            formularz.onsubmit();
        }

    }
    formularz.addEventListener('submit', listener, true);
}


function Sprawdz() {
    var dobrze = true;
    var obj1=document.getElementById("mylog");
    if(obj1.value.length<4){
        obj1.style.background = "#e74c3c";
        dobrze = false;
    }
    var obj8 = document.getElementById('Nr');
    txt8 = obj8.value;
    var Wyrazenie8 = /^[0-9]{3}-[0-9]{3}-[0-9]{3}$/;
    wynik8 = Wyrazenie8.test(txt8);
    if (txt8 == null || txt8 == "") {
        obj8.style.background = "#e74c3c";
        dobrze = false;
    }
    else if (wynik8) {
        
    }
    else {
        obj8.style.background = "#e74c3c";
        dobrze = false;

    }
    var obj7=document.getElementById("haslo")
    txt7=obj7.value
    var obj6=document.getElementById("haslo2")
    txt6=obj6.value
    if(txt7!=txt6){
        dobrze=false
        obj7.style.background="#e74c3c"
        obj6.style.background="#e74c3c"
    }
    return dobrze;


}