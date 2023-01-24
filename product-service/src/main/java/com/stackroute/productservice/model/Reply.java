package com.stackroute.productservice.model;

import lombok.*;

@Data
@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
public class Reply {
    private String replyerEmailId;
    private String comment;
    private  long dateOfReply;
}
