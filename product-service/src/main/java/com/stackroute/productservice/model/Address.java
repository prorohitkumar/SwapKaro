package com.stackroute.productservice.model;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Address {
    private String houseNumber;
    private String streetName;
    private String state;
    private String city;
    private String pincode;
}
