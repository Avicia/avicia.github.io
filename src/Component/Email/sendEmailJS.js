
import emailjs from 'emailjs-com';

const sender = {
    service: 'gmail',
    auth: {
        user: 'developeravicia@gmail.com',
        pass: 'KonnichiwaAvicia',
        service_id: 'service_i4w43l9'
    }
}
export default function sendNodeMail(fromName, fromEmail, subject, message) {
    var params = {
        fromName: fromName,
        fromEmail: fromEmail,
        toName: 'Avicia',
        toEmail: 'developeravicia@gmail.com',
        subject: subject,
        message: message,
        contact_number: 'Check this out!',
        replyTo: fromEmail
    };

    console.log('Message sent', '\n' + fromName);
    console.log(fromEmail);
    console.log(message);
    emailjs.send('service_i4w43l9', 'template_6sbm5o2', params)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        })
}