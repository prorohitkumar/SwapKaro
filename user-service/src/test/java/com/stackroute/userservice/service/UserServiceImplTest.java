//package com.stackroute.userservice.service;
//
//import com.stackroute.userservice.exception.UserAlreadyExistException;
//import com.stackroute.userservice.model.Address;
//import com.stackroute.userservice.model.User;
//import com.stackroute.userservice.repository.AccountRepository;
//import com.stackroute.userservice.repository.UserRepository;
//import org.junit.jupiter.api.Assertions;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.DisplayName;
//import org.junit.jupiter.api.Test;
//import org.mockito.Mockito;
//
//import java.io.IOException;
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Optional;
//
//import static org.junit.jupiter.api.Assertions.*;
//
//public class UserServiceImplTest {
//
//    // mocks for all the dependencies
//    private UserRepository userRepository = Mockito.mock(UserRepository.class);
//    private AccountRepository accountRepository = Mockito.mock(AccountRepository.class);
//
//    public Address address;
//    public User user;
//
//    @BeforeEach
//    public void setUp () {
//        address = new Address("Flat No. 2", "Street Palace", "Delhi", "New Delhi", 111111);
//        user = new User("user@gmail.com", address, "user@12345", 250);
//    }
//
//    @Test
//    @DisplayName("Test should pass when a user details are saved into the database.")
//    void shouldSaveUserInDatabase() {
//        UserServiceImpl userService = new UserServiceImpl(userRepository, accountRepository);
//        User savedUser = userRepository.save(user);
//        Mockito.when(savedUser).thenReturn(user);
//    }
//
//    @Test
//    @DisplayName("Test should pass when details of all users in the database are returned.")
//    void shouldGetAllUser() {
//        List<User> users = new ArrayList<>();
//        UserServiceImpl userService = new UserServiceImpl(userRepository, accountRepository);
//        Address address = new Address("Flat No. 2", "Street Palace", "Delhi", "New Delhi", 111111);
//        User user1 = new User("user1@gmail.com", address, "user@12345", 250);
//        User user2 = new User("user2@gmail.com", address, "user@12345", 250);
//        User user3 = new User("user3@gmail.com", address, "user@12345", 250);
//        User user4 = new User("user4@gmail.com", address, "user@12345", 250);
//        users.add(user1);
//        users.add(user2);
//        users.add(user3);
//        users.add(user4);
//        Mockito.when(userRepository.findAll()).thenReturn(users);
//        Assertions.assertEquals(4, users.size());
//    }
//
//    @Test
//    @DisplayName("Test should pass when a user is found in database based on email.")
//    void ShouldGetUserById() {
//        UserServiceImpl userService = new UserServiceImpl(userRepository, accountRepository);
//        Mockito.when(userRepository.findById("user@gmail.com")).thenReturn(Optional.of(user));
//    }
//
//    @Test
//    @DisplayName("Test should pass when a user address is updated in the database.")
//    void ShouldUpdateAddressDetails() {
//        UserServiceImpl userService = new UserServiceImpl(userRepository, accountRepository);
//        Address addressNew = new Address("Flat No. 3", "Street Palace Road", "Delhi", "New Delhi", 111111);
//        user.setAddress(addressNew);
//        Mockito.when(userRepository.save(user)).thenReturn(user);
//    }
//}