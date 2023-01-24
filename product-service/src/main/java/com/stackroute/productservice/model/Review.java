package com.stackroute.productservice.model;

import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Data
@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
public class Review {
    private String reviewerEmailId;
    private String comment;
    private long dateOfReview;
    private List<Reply> replyBody;

}
