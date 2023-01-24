package com.stackroute.producttradingservice.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;

@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
@Component
public class AutoGenerateId {

    @Id
    private String  orderAutoId;
    private int seq;
}
