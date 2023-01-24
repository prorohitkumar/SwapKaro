package com.stackroute.userservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
@NoArgsConstructor
@AllArgsConstructor
public class AccountDetails {
    private String holderName;
    @Id
    private int accountNo;
    private String expiryMonth;
    private int cvv;
    private double amount;
}
