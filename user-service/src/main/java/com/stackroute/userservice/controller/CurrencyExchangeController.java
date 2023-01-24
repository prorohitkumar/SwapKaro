package com.stackroute.userservice.controller;

import com.stackroute.userservice.model.CurrencyExchange;
import com.stackroute.userservice.service.CurrencyExchangeService;
import com.stackroute.userservice.exception.UserNotExistException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
//@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/v4/")
public class CurrencyExchangeController {
    private CurrencyExchangeService currencyExchangeService;
    private ResponseEntity responseEntity;
    @Autowired
    public CurrencyExchangeController(CurrencyExchangeService currencyExchangeService) {
        this.currencyExchangeService = currencyExchangeService;
    }
    @PostMapping("user/coins")
    ResponseEntity addCoin(@RequestParam("user") String emailId, @RequestParam("dollar") double dollar) throws UserNotExistException{
        try {
            CurrencyExchange currencyExchange=new CurrencyExchange();
            currencyExchange.setEmailId(emailId);
            currencyExchange.setDollar(dollar);
            responseEntity = new ResponseEntity(currencyExchangeService.addCoin(currencyExchange), HttpStatus.OK);
        }
        catch (UserNotExistException userNotExistException) {
            responseEntity = new ResponseEntity("User Not Exist", HttpStatus.CONFLICT);
        }
        return responseEntity;
    }
}
