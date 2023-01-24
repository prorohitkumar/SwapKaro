package com.stackroute.chatservice.service;

import com.stackroute.chatservice.model.Chat;
import com.stackroute.chatservice.model.ChatWithBuyer;
import com.stackroute.chatservice.model.MessageBody;
import org.springframework.stereotype.Service;


public interface ChatService {

    Chat saveChat(Chat chat) throws Exception;
    Chat editChatOfProduct(String buyerEmail,String loginedEmail,String message,Chat chat) throws Exception;
    Chat getChatByProduct(int productId) throws  Exception;
    ChatWithBuyer getChatByBuyerEmail(int productId, String buyerEmail) throws  Exception;
}
