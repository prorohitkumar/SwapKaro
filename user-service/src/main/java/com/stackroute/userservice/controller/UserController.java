package com.stackroute.userservice.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.stackroute.userservice.exception.UserAlreadyExistException;
import com.stackroute.userservice.exception.UserNotExistException;
import com.stackroute.userservice.model.AccountDetails;
import com.stackroute.userservice.model.Address;
import com.stackroute.userservice.model.CurrencyExchange;
import com.stackroute.userservice.model.User;
import com.stackroute.userservice.security.SecurityTokenGenerator;
import com.stackroute.userservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;


@RestController
//@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v4")
public class UserController {

    private UserService userService;
    private SecurityTokenGenerator securityTokenGenerator;

    ResponseEntity responseEntity;
    @Autowired
    public UserController(UserService userService,SecurityTokenGenerator securityTokenGenerator) {
        this.userService = userService;
        this.securityTokenGenerator=securityTokenGenerator;
    }

    @PostMapping("/register")
    public ResponseEntity saveUser(@RequestBody User user) throws JsonProcessingException {
        try {
            responseEntity=new ResponseEntity(userService.saveUser(user),HttpStatus.CREATED);
        }
        catch (UserAlreadyExistException userAlreadyExistException){
            responseEntity=new ResponseEntity("User Already Exist", HttpStatus.CONFLICT);
        }
        catch (IOException e) {
            e.printStackTrace();
        }
        return responseEntity;
    }

    @PostMapping("/login")
    public ResponseEntity loginUser(@RequestBody User user) throws UserNotExistException
    {
        Map<String,String> map=null;
        try {

            if (userService.checkingLoginDetails(user)) {
                map = securityTokenGenerator.generateToken(user);
            }
            responseEntity = new ResponseEntity(map, HttpStatus.OK);
        }
        catch(UserNotExistException e)
        {
            responseEntity=new ResponseEntity("try after sometime",HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return responseEntity;
    }


    @GetMapping("/user/users")
    public ResponseEntity getAllUser() {

        try {
            responseEntity = new ResponseEntity(userService.getAllUser(), HttpStatus.OK);
        }
        catch (UserNotExistException userNotExistException) {
            responseEntity = new ResponseEntity("User Not Exist", HttpStatus.CONFLICT);
        }
        return responseEntity;
    }

    @GetMapping("/user/{email}")
    public ResponseEntity getUserById(@PathVariable String email) {


        responseEntity = new ResponseEntity(userService.getUserById(email), HttpStatus.OK);


        return responseEntity;
    }

    @PutMapping("/user/location/{emailId}")
    public ResponseEntity updateAddressDetails(@RequestBody Address address,@PathVariable String emailId) throws UserNotExistException{
        try {
            responseEntity = new ResponseEntity(userService.updateAddressDetails(address,emailId), HttpStatus.OK);
        }
        catch (UserNotExistException userNotExistException) {
            responseEntity = new ResponseEntity("User Not Exist", HttpStatus.CONFLICT);
        }
        return responseEntity;
    }
    @PutMapping("/user/coin")
    public ResponseEntity exchangeUsingBarterCoin(@RequestParam("buyer") String buyerEmailId, @RequestParam("seller")String sellerEmailId,@RequestParam("coin") double coins)throws UserNotExistException{
        try {
            responseEntity = new ResponseEntity(userService.exchangeUsingBarterCoin(buyerEmailId,sellerEmailId,coins), HttpStatus.OK);
        }
        catch (UserNotExistException userNotExistException) {
            responseEntity = new ResponseEntity("User Not Exist", HttpStatus.CONFLICT);
        }
        return responseEntity;
    }
    @PostMapping("user/account")
    public ResponseEntity saveAccount(AccountDetails accountDetails){
        try{
            responseEntity=new ResponseEntity(userService.saveAccount(accountDetails),HttpStatus.OK);

        }
        catch (Exception e){
            responseEntity=new ResponseEntity("internal server error",HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }
    @GetMapping("user/accounts")
    public ResponseEntity getAccountDetails(){
        try{
            responseEntity=new ResponseEntity(userService.getAccountDetails(),HttpStatus.OK);
        }
        catch (Exception e)
        {
            responseEntity=new ResponseEntity("internal server error",HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }
    @PutMapping("user/withdraw")
    public ResponseEntity withrawCoin(@RequestParam("user") String emailId,@RequestParam("coin")double coin) throws UserNotExistException{
        try{
            String withdrawStatus=userService.withdrawCoin(emailId, coin);
            responseEntity=new ResponseEntity(withdrawStatus,HttpStatus.OK);
        }
        catch (UserNotExistException userNotExistException) {
            responseEntity = new ResponseEntity("User Not Exist", HttpStatus.NOT_FOUND);
        }
        catch(Exception e)
        {
            responseEntity=new ResponseEntity("try after sometime",HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return responseEntity;
    }

}
