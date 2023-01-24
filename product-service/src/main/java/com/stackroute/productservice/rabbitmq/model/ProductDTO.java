package com.stackroute.productservice.rabbitmq.model;

import lombok.*;

import java.time.LocalDate;
import java.util.Date;
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ProductDTO {
    private int productId;
    private String productName;
    private Date dateOfPosting;
    private String productOwner;
    private String modeOfPayment;
    private String productCategory;
    private String pinCode;
    private String state;
    private String city;
    private String productDescription;
    private byte[] productImage;

}
