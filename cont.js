function sendMail(){
    const params={
        name: document.getElementById("name").value ,
        email: document.getElementById("email").value ,
        message:document.getElementById("message").value ,
    };

const serviceID ="service_36stk77";
const templateID="template_jg7eaiu";

emailjs.send(serviceID,templateID,params).then(
    function (res){
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message sent successfully")
    })
    .catch(err => console.log(err));
}