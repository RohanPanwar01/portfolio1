function emailsend()
{

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "panwarrohan55@gmail.com",
        Password : "60EB20EAB7B673AD98749FADDB854E427063",
        To : 'panwarrohan484@gmail.com',
        From : "panwarrohan55@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );

}