package com.stackroute.userservice.security;




import com.stackroute.userservice.model.User;
import com.stackroute.userservice.repository.UserRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class SecurityTokenGeneratorImpl implements SecurityTokenGenerator {
    private UserRepository userRepository;
    @Autowired
    public SecurityTokenGeneratorImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public Map<String, String> generateToken(User user) {
        String jwtToken=null;
        jwtToken= Jwts.builder().setSubject(user.getEmail())
                .setIssuedAt(new Date()).signWith(SignatureAlgorithm.HS256,"secret_key").compact();
        Map<String ,String > map= new HashMap<>();
        map.put("token",jwtToken);
        map.put("message","Authentication Successfull");
        return map;
    }
}
