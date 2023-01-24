package com.stackroute.userservice.service;

import com.stackroute.userservice.exception.UserAlreadyExistException;
import com.stackroute.userservice.exception.UserNotExistException;
import com.stackroute.userservice.model.AccountDetails;
import com.stackroute.userservice.model.Address;
import com.stackroute.userservice.model.User;
import com.stackroute.userservice.repository.AccountRepository;
import com.stackroute.userservice.repository.UserRepository;
import com.stackroute.userservice.utilities.PropertyConfigReader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    private UserRepository userRepository;
    private AccountRepository accountRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository,AccountRepository accountRepository) {
        this.userRepository = userRepository;
        this.accountRepository=accountRepository;
    }

    @Override
    public User saveUser(User user) throws UserAlreadyExistException, IOException {
        user.setTotalBarterCoin(2500);
        if(userRepository.findById(user.getEmail()).isPresent()){
            throw new UserAlreadyExistException();
        }
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUser() throws UserNotExistException {

        List userList=userRepository.findAll();

        if(userList.size()==0){
            throw new UserNotExistException();
        }
        return userList;
    }

    @Override
    public User getUserById(String emailId){

        if(userRepository.findById(emailId).isEmpty()){
            return null;
        }
        return userRepository.findById(emailId).get();
    }

    @Override
    public User updateAddressDetails(Address address, String emailId) throws UserNotExistException {
        if(userRepository.findById(emailId).isEmpty()){
            throw new UserNotExistException();
        }
        User existingUser=userRepository.findById(emailId).get();
        existingUser.setAddress(address);
        return userRepository.save(existingUser);
    }

    @Override
    public String exchangeUsingBarterCoin(String buyerEmailId, String sellerEmailId, double coin) throws UserNotExistException {
       if(userRepository.findById(buyerEmailId).isEmpty()){
           throw  new UserNotExistException();
       }
        if(userRepository.findById(sellerEmailId).isEmpty()){
            throw  new UserNotExistException();
        }
        User buyer=userRepository.findById(buyerEmailId).get();
        User seller=userRepository.findById(sellerEmailId).get();
        if(buyer.getTotalBarterCoin()<coin){
            return PropertyConfigReader.unsufficientCoinMessage;
        }
        double buyerNewTotalCoin=buyer.getTotalBarterCoin()-coin;
        double sellerNewTotalCoin=seller.getTotalBarterCoin()+coin;
        buyer.setTotalBarterCoin(buyerNewTotalCoin);
        seller.setTotalBarterCoin(sellerNewTotalCoin);
        userRepository.save(buyer);
        userRepository.save(seller);
        return "Coins updated Successfully";
    }

    @Override
    public boolean checkingLoginDetails(User user) throws UserNotExistException {
        if(userRepository.findById(user.getEmail()).isEmpty()){
            throw new UserNotExistException();
        }
        User retrieveUser=userRepository.findById(user.getEmail()).get();
        if(user.getPassword().equals(retrieveUser.getPassword())){
            return true;
        }

        return false;
    }

    @Override
    public String withdrawCoin(String emailId,double coin) throws UserNotExistException {
        if(userRepository.findById(emailId).isEmpty()){
            throw new UserNotExistException();
        }
        User user=userRepository.findById(emailId).get();
        user.setTotalBarterCoin(user.getTotalBarterCoin()-coin);
        userRepository.save(user);
        AccountDetails account=accountRepository.findById(321456).get();
        account.setAmount(account.getAmount()+coin);
        accountRepository.save(account);
        return "amount deducted successfully";
    }

    @Override
    public AccountDetails saveAccount(AccountDetails accountDetails) {
        accountDetails.setAccountNo(321456);
        accountDetails.setHolderName("Swapkaro");
        accountDetails.setExpiryMonth("03/26");
        accountDetails.setCvv(256);
        accountDetails.setAmount(5000.00);
        if(accountRepository.findById(32156).isPresent()){
            return null;
        }
        else{
            return accountRepository.save(accountDetails);
        }

    }

    @Override
    public List<AccountDetails> getAccountDetails() {
        List<AccountDetails> account=accountRepository.findAll();
        return account;
    }


}
