$(document).ready(function () {
    $("#spack").submit(function (event) {
        if (!$(this.fname).val()) {
            event.preventDefault();
            alert("Please Enter your full name !!");
        }
        if (!$(this.email).val()) {
            event.preventDefault();
            alert("Please Enter your email id !!");
        }
        if (!$(this.password).val()) {
            event.preventDefault();
            alert("Please Enter a password !!");
        }
        else{
        alert("SUBMITTED!!! KINDLY CHECK YOUR EMAIL TO PROCEED WITH THE PAYMENT.");
        event.preventDefault();
        }
    });
});