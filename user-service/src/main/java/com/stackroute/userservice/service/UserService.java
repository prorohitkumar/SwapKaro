package com.stackroute.userservice.service;

import com.stackroute.userservice.exception.UserAlreadyExistException;
import com.stackroute.userservice.exception.UserNotExistException;
import com.stackroute.userservice.model.AccountDetails;
import com.stackroute.userservice.model.Address;
import com.stackroute.userservice.model.User;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface UserService {

    User saveUser(User user) throws UserAlreadyExistException, IOException;
    List<User> getAllUser() throws UserNotExistException;
    User getUserById(String emailId);
    User updateAddressDetails(Address address, String emailId) throws UserNotExistException;
    String exchangeUsingBarterCoin(String buyerEmailId,String sellerEmailId,double coin) throws UserNotExistException;
    boolean checkingLoginDetails(User user) throws UserNotExistException;
    String withdrawCoin(String emailId,double coin) throws UserNotExistException;
    AccountDetails saveAccount(AccountDetails accountDetails);
    List<AccountDetails> getAccountDetails();

}
