package com.stackroute.chatservice.controller;


import com.stackroute.chatservice.model.Chat;
import com.stackroute.chatservice.model.ChatWithBuyer;
import com.stackroute.chatservice.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
//@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/v5")
public class ChatController {

    ChatService chatService;

    @Autowired
    public ChatController(ChatService chatService) {
        this.chatService = chatService;
    }


    @PostMapping("/chat")
    public ResponseEntity saveChat(@Valid @RequestBody Chat chat) throws Exception{

        return new ResponseEntity(chatService.saveChat(chat), HttpStatus.CREATED);
    }

    @PostMapping("/user/chats")
    public ResponseEntity editChatOfProduct(@RequestParam String buyerEmail,@RequestParam String loginedEmail,@RequestParam String message,@RequestBody Chat chat) throws Exception{

        return new ResponseEntity(chatService.editChatOfProduct(buyerEmail,loginedEmail,message,chat), HttpStatus.CREATED);
    }

    @GetMapping("/chats/{productId}")
    public ResponseEntity getChatByProductId(@PathVariable int productId) throws Exception{
        return new ResponseEntity(chatService.getChatByProduct(productId),HttpStatus.OK);
    }

    @GetMapping("/user/chats")
    public ResponseEntity getChatByBuyerEmail(@RequestParam int productId,@RequestParam String buyerEmail) throws Exception {

        return new ResponseEntity(chatService.getChatByBuyerEmail(productId,buyerEmail),HttpStatus.OK);
    }
}
