package com.stackroute.authenticationservice.model;

import lombok.*;



@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor

public class User {
    private String emailId;
    private String password;
}
