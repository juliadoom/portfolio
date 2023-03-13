var email =
        document.forms.RegForm.Email.value;
    if (email == "" || !regEmail.test(email)) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
