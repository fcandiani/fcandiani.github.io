if(window.innerWidth < 992){
    document.getElementById("form-closed").setAttribute('class','show');
    document.getElementById("form-opened").setAttribute('class','hidden');
}

window.addEventListener('resize', function() {
    if(window.innerWidth < 992){
        document.getElementById("form-closed").setAttribute('class','show');
        document.getElementById("form-opened").setAttribute('class','hidden');
    }
})

document.getElementById("close").addEventListener("click", function() {
    hideElement = document.getElementById("form-opened");
    hideElement.setAttribute('class', 'hide');
    window.setTimeout(hide, 310);

    document.getElementById("form-closed").setAttribute('class', 'show');
});

function hide(){
    hideElement.setAttribute('class', 'hidden');
}

document.getElementById("form-closed").addEventListener("click", function(){
    hideElement = this;
    hideElement.setAttribute('class', 'hide');
    window.setTimeout(hide, 310);

    document.getElementById('form-opened').setAttribute('class', 'show');
});

document.getElementById('submit-contact').addEventListener('click', function(){
    var form = document.getElementById('form');
    if(!form.classList.contains("sending")){
        var name = document.getElementById('name');
        var email = document.getElementById('email')
        var message = document.getElementById('message')

        if(name.value == ""){
            name.classList.toggle('error');
            return;
        } else if(name.classList.contains("error")) {
            name.classList.toggle('error');
        }

        if(email.value == ""){
            email.classList.toggle('error');
            return;
        } else if(email.classList.contains("error")) {
            email.classList.toggle('error');
        }

        if(message.value == ""){
            message.classList.toggle('error');
            return;
        } else if(message.classList.contains("error")) {
            message.classList.toggle('error');
        }

        form.classList.toggle('sending');
        var submit = this;
        submit.innerHTML = '<i id="spinning-circle" class="fa fa-circle-o-notch fa-spin" style="font-size: 25px; margin: 7px 0!important"></i>';
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://script.google.com/macros/s/AKfycbz9qCCaQSe1fCrEiGVvBnbMw8WJBPBVsFTMHq2yb4xJ9oFJsBw/exec', true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.onload = function () {
            console.log('returned');
            submit.innerHTML = '<i class="fa fa-check fa-correction fa-2x" style="position: fixed;margin-top: 5px;margin-left: -25px;"></i> <span style="padding-left:10px;">Enviado</span>';
        };
        xhr.send('name='+name.value+'&email='+email.value+'&message='+message.value);

        
        form.classList.toggle('sending');
    }
});