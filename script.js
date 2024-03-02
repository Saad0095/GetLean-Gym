document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('exampleInputName').value;
        var email = document.getElementById('exampleInputEmail1').value;
        var message = document.getElementById('exampleFormControlTextarea1').value;
        if (!name || !email || !message) {
            alert("Please fill in all details before submitting");
            return;
        }
        if (/\d/.test(name)) {
            alert("Name should not contain numbers");
            return;
        }
        if (!/@/.test(email)) {
            alert("Invalid email address. Email should contain @");
            return;
        }
        alert("Your details have been submitted successfully");
    });
});
