package com.stackroute.userservice.service;

import com.stackroute.userservice.model.AccountDetails;
import com.stackroute.userservice.model.CurrencyExchange;
import com.stackroute.userservice.exception.UserNotExistException;
import com.stackroute.userservice.model.User;
import com.stackroute.userservice.repository.AccountRepository;
import com.stackroute.userservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CurrencyExchangeServiceImpl implements CurrencyExchangeService {
    private UserRepository userRepository;
    private AccountRepository accountRepository;
    @Autowired
    public CurrencyExchangeServiceImpl(UserRepository userRepository,AccountRepository accountRepository) {
        this.userRepository = userRepository;
        this.accountRepository=accountRepository;
    }

    @Override
    public String addCoin(CurrencyExchange currencyExchange) throws UserNotExistException {
        if(userRepository.findById(currencyExchange.getEmailId()).isEmpty()){
            throw new UserNotExistException();
            }
        User user=userRepository.findById(currencyExchange.getEmailId()).get();
        double newCoin=user.getTotalBarterCoin()+currencyExchange.getDollar();
        user.setTotalBarterCoin(newCoin);
        AccountDetails account=accountRepository.findById(321456).get();
        account.setAmount(account.getAmount()-currencyExchange.getDollar());
        accountRepository.save(account);
        userRepository.save(user);
        return "coins added successfully";
    }
}
