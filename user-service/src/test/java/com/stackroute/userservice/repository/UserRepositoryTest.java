//package com.stackroute.userservice.repository;
//
//import com.stackroute.userservice.model.Address;
//import com.stackroute.userservice.model.User;
//import org.junit.Test;
//import org.junit.jupiter.api.AfterEach;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.DisplayName;
//import org.junit.jupiter.api.extension.ExtendWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
//import org.springframework.test.context.junit.jupiter.SpringExtension;
//
//import java.util.List;
//
//import static org.junit.jupiter.api.Assertions.*;
//
//@ExtendWith(SpringExtension.class)
//@DataMongoTest
//public class UserRepositoryTest {
//
//    @Autowired
//    private UserRepository userRepository;
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
//    @AfterEach
//    public void tearDown(){
//        address=null;
//        user=null;
//        userRepository.deleteAll();
//    }
//
//    @Test
//    @DisplayName("Test should pass when a user is saved")
//    public void shouldSaveUserTest() {
//        if (user != null) {
//            assertNotNull(userRepository.save(user));
//        }
//    }
//
//    @Test
//    @DisplayName("Test should .")
//    public void shouldFindAllUsers(){
//        User user1 = new User("user1@gmail.com", address, "user1@12345", 350);
//        List<User> list;
//        if (user1 != null && user != null) {
//            userRepository.save(user);
//            userRepository.save(user1);
//            list = userRepository.findAll();
//            assertEquals(2,list.size());
//        }
//    }
//
//    @Test
//    @DisplayName("Test should pass when a user details are saved into the database.")
//    public void shouldFindUserById(){
//        if (user != null) {
//            userRepository.save(user);
//            User foundUser = userRepository.findById(user.getEmail()).get();
//            assertEquals(foundUser.getEmail(), user.getEmail());
//        }
//    }
//}