function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        clint_subject: document.getElementById("clint_subject").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_j3iu5ks";
    const templateID = "template_8kegpsa";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("clint_subject").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message sent successfully!!")

        })
        .catch(err => console.log(err));

}
