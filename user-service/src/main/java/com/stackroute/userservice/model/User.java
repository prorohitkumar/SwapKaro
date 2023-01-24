package com.stackroute.userservice.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;


@Document
@Getter
@Setter
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class  User {
    @Id
    private String email;
    private Address address;
    private String password;
    private double totalBarterCoin;
}
