package com.stackroute.emailservice.service;

import com.stackroute.emailservice.model.Email;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.File;

@Service
public class EmailServiceImp implements EmailService{

    @Autowired
    private JavaMailSender mailSender;

    // send email to the receiver with subject and mail body
    @Override
    public void sendEmail (Email email) throws MessagingException {
        // path to the product details
        // String attachment = "D:\\NIIT\\PROJECT\\CODE\\Main Project\\v1.0.3\\swapkaro\\email-service\\src\\main\\resources\\templates\\share-product.html";
        // --------------------------
        // debugging
        // System.out.println(email);
        // --------------------------
        MimeMessage mailMessage = mailSender.createMimeMessage();
        MimeMessageHelper messageHelper = new MimeMessageHelper(mailMessage, true);
        // FileSystemResource fileSystemResource = new FileSystemResource(new File(attachment));
        for (String receiver: email.getReceiversEmail()) {
            messageHelper.setFrom("swapkaro0@gmail.com");
            messageHelper.setTo(receiver);
            messageHelper.setSubject(email.getSubject());
            messageHelper.setText(email.getMessageBody());
            messageHelper.setText(email.getAttachment());
            // messageHelper.addAttachment(fileSystemResource.getFilename(), fileSystemResource);
            // sending the email to receivers
            mailSender.send(mailMessage);
        }
        // confirmation message
        System.out.println("Email sent successfully...");
    }

    // send email to the owner about the interested buyers of their products
    @Override
    public void notifyOwner(Email email) throws MessagingException {
        MimeMessage mailMessage = mailSender.createMimeMessage();
        MimeMessageHelper messageHelper = new MimeMessageHelper(mailMessage, true);
        // configuring email
        messageHelper.setFrom("swapkaro0@gmail.com");
        messageHelper.setTo(email.getReceiversEmail()[0]);
        messageHelper.setSubject(email.getSubject());
        messageHelper.setText(email.getMessageBody());
        messageHelper.setText("The Below user is interested in doing business with you " + email.getReceiversEmail()[1]);
        messageHelper.setText(email.getAttachment());
        // sending the email to receivers
        mailSender.send(mailMessage);
        // confirmation message
        System.out.println("Email sent successfully...");
    }
}
