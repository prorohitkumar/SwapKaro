package com.stackroute.productservice.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.index.TextIndexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Document
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Product {
    @Transient
    public static final String SEQUENCE_NAME="product_id";
    @Id
    private int productId;
    private  String productName;
    private long yearOfPurchase;
    private Date dateOfPosting;
    private String productCategory;
    private String categoryDescription;
    private Address address;
    private String productDescription;
    private  int quantity;
    private ProductStatus productStatus;
    private ModeOfPayment modeOfPayment;
    private int noOfBarterCoin;
    private List<String> exchangeItems;
    private String productOwner;//emailId of owner
    private int ratings;
    private byte[] productImage;
    private List<Review> reviews;
    private String productQR;

}
