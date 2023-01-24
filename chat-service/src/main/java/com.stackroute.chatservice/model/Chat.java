package com.stackroute.chatservice.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.util.List;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Document
public class Chat {
   @Id
   private int productId;
   @NotNull
   @Email
   private String productOwner;
   private List<ChatWithBuyer> buyersChat;

}
