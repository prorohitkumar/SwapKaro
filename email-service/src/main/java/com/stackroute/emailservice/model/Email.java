package com.stackroute.emailservice.model;

import lombok.Data;

@Data
public class Email {
    private String[] receiversEmail;
    private String subject;
    private String messageBody;
    private String attachment;
}
