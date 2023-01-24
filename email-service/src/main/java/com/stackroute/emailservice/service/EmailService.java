package com.stackroute.emailservice.service;

import com.stackroute.emailservice.model.Email;

import javax.mail.MessagingException;

public interface EmailService {
    public void sendEmail(Email email) throws MessagingException;
    public void notifyOwner(Email email) throws MessagingException;
}
