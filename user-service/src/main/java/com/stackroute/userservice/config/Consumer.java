package com.stackroute.userservice.config;

import com.stackroute.userservice.exception.UserAlreadyExistException;
import com.stackroute.userservice.model.User;
import com.stackroute.userservice.rabbitMq.model.UserDTO;
import com.stackroute.userservice.repository.UserRepository;
import com.stackroute.userservice.service.UserService;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class Consumer {

    private UserService userService;
    private UserRepository userRepository;

    @Autowired
    public Consumer(UserService userService, UserRepository userRepository) {
        this.userService = userService;
        this.userRepository = userRepository;
    }

    @RabbitListener(queues="google-queue")
    public void getUserDTOFromRabbitMq(UserDTO userDTO) throws UserAlreadyExistException, IOException {
        if(userRepository.findById(userDTO.getEmail()).isEmpty()){
            User user=new User();
            user.setEmail(userDTO.getEmail());
            userService.saveUser(user);
        }


    }
}
