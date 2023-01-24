package com.stackroute.emailservice.controller;

import com.stackroute.emailservice.model.Email;
import com.stackroute.emailservice.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/v1/")
@RestController
//@CrossOrigin(origins = "http://localhost:4200")
public class EmailController {

    private EmailService emailService;

    @Autowired
    public EmailController(EmailService emailService) {
        this.emailService = emailService;
    }

    // method to send the email (email api)
    @PostMapping("sendEmail")
    public ResponseEntity<HttpStatus> sendEmail(@RequestBody Email email) {
        try {
            emailService.sendEmail(email);
//            System.out.println(email);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // method to send the email notification to the product owners about interested buyers
    @PostMapping("notifyOwner")
    public ResponseEntity<HttpStatus> notifyOwner(@RequestBody Email email) {
        try {
            emailService.notifyOwner(email);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
