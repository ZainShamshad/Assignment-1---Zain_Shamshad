
function send() {
    var un = document.getElementById("fn");
    var em = document.getElementById("em");
    var pn = document.getElementById("pn");
    var msg = document.getElementById("msg");

    alert('Fullname: '+un.value
    +'\n'
    +'Email: '+em.value
    +'\n'
    +'Phone no: '+pn.value
    +'\n'
    +'Message: '+msg.value
    );
}