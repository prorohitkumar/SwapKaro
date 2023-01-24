package com.stackroute.userservice.service;

import com.stackroute.userservice.model.CurrencyExchange;
import com.stackroute.userservice.exception.UserNotExistException;

public interface CurrencyExchangeService {
    String addCoin(CurrencyExchange currencyExchange) throws UserNotExistException;
}
