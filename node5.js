const nodemailer=require('nodemailer');
//transporter object
let transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'usermail id',
        pass:'password'
    }
});
//set up email options
let mailoptions={
    from:'fromaddressmail',
    to:'toaddressmail',
    subject:'mail using nodemailer-reg',
    text:'Good afternoon'
};
transporter.sendMail(mailoptions,(error,info)=>{
    if(error){
        return console.log('Error:$error');
    }console.log('Email sent'+info.response);
});
