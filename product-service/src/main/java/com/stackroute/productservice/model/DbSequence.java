package com.stackroute.productservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
@Component
public class DbSequence {
    @Id
    private String id;
    private int seqNo;
}
