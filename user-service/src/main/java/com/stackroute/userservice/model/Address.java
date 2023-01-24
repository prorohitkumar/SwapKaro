package com.stackroute.userservice.model;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Address {

    private String houseNumber;
    private String streetName;
    private String state;
    private String city;
    private int pincode;


}
