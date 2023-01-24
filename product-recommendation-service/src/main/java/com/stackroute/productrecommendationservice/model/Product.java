package com.stackroute.productrecommendationservice.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;

import java.time.LocalDate;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Node("Product")
public class Product {
    @Id
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
