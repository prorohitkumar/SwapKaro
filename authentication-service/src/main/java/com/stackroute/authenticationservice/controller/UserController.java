package com.stackroute.authenticationservice.controller;


import com.stackroute.authenticationservice.configuration.Producer;
import com.stackroute.authenticationservice.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.security.Principal;
import java.util.HashMap;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/v5")

public class UserController {

    private Producer producer;
    private String email="";
    @Autowired
    public UserController(Producer producer) {
        this.producer = producer;
    }

    @GetMapping("/signin")
    public RedirectView isGoogleLogin(Principal principal){
        RedirectView redirectView=new RedirectView();
//        redirectView.setUrl("https://swapkaro.stackroute.io/#/header/products");
        redirectView.setUrl("http://localhost:4200/header/products");
        String arr[]=principal.toString().split(",");
        System.out.println(arr[19].substring(7,arr[19].length()-2));
        producer.sendMessageToBroker(arr[19].substring(7,arr[19].length()-2));
        return redirectView;
    }

    @GetMapping("/login")
    public ResponseEntity<?> getUserName(@AuthenticationPrincipal(expression = "attributes['email']") String mailId, @AuthenticationPrincipal(expression = "attributes['name']") String username) {
        HashMap<String, String> userDetails = new HashMap<>();

        User userProfile = new User();

        userDetails.put("emailId", mailId);

        System.out.println("login api response " + userDetails);
        return new ResponseEntity<>(userDetails, HttpStatus.OK);
    }

    @GetMapping("/login/user")
    public String getLoginID(Principal principal){
        String arr[]=principal.toString().split(",");
        email=arr[19].substring(7,arr[19].length()-2);
        System.out.println("email"+email);
        return email;
    }





}
