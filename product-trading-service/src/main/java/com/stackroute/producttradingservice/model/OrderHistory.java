package com.stackroute.producttradingservice.model;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;


@Document
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString

public class OrderHistory {
    @Transient
    public static final String Sequence_Number= "order_Id";
    @Id
    @NotNull
    @Positive
    private int orderId;
    @NotNull
    @Positive
    private int productId;
    @NotNull
    private  String productName;
    @NotNull
    private String buyerName;
    @NotNull
    private String sellerName;
    @NotNull
    private LocalDate dateOfTransaction;
    @NotNull
    @Positive
    private String paymentMode;
    @Positive
    private long amount;
    @Positive
    private int exchangeOrderId;
    @Positive
    private int exchangeProductId;
    @NotNull
    private String productCategory;
    @NotNull
    private byte[] image;


}
