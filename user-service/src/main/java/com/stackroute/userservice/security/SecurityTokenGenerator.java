package com.stackroute.userservice.security;



import com.stackroute.userservice.model.User;

import java.util.Map;

public interface SecurityTokenGenerator {
    Map<String,String> generateToken(User user);
}
