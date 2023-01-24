package com.stackroute.chatservice.service;


import com.stackroute.chatservice.model.Chat;
import com.stackroute.chatservice.model.ChatWithBuyer;
import com.stackroute.chatservice.model.MessageBody;
import com.stackroute.chatservice.repository.ChatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicReference;

@Service
public class ChatServiceImpl implements ChatService{

    private ChatRepository chatRepository;

    @Autowired
    public ChatServiceImpl(ChatRepository chatRepository) {
        this.chatRepository = chatRepository;
    }

    @Override
    public Chat saveChat(Chat chat) throws Exception{
//        product already present
        if(chatRepository.findById(chat.getProductId()).isEmpty()){
            chatRepository.save(chat);
            return chat;
        }
        else{
            throw new Exception("product chat already available");
        }
    }

    @Override
    public Chat editChatOfProduct(String buyerEmail,String loginedEmail,String message,Chat chat) throws Exception {

        if(chatRepository.findById(chat.getProductId()).isEmpty()){
            throw new Exception("Product not available");
        }


       List<ChatWithBuyer> chatWithBuyers=chatRepository.findById(chat.getProductId()).get().getBuyersChat();
       AtomicReference<Boolean> isBuyerEmailPresent= new AtomicReference<>(false);

       if(chatWithBuyers.size()!=0) {
           chatWithBuyers.forEach((userChat) -> {
               if (userChat.getBuyerEmail().equals(buyerEmail)) {
                   isBuyerEmailPresent.set(true);
               }
           });
           if(isBuyerEmailPresent.get()){
               System.out.println(chat);
               chatWithBuyers.forEach(userChat->{
                   if(userChat.getBuyerEmail().equals(buyerEmail)){
                       userChat.getMessageBody().add(new MessageBody(message,LocalDateTime.now(),loginedEmail));
                   }
               });
           }
           else{
               List messages=new ArrayList<>();
               messages.add(new MessageBody(message,LocalDateTime.now(),loginedEmail));
               chatWithBuyers.add(new ChatWithBuyer(loginedEmail,messages));
           }
       }
       else{
           List messages=new ArrayList<>();
           messages.add(new MessageBody(message,LocalDateTime.now(),loginedEmail));
           chatWithBuyers.add(new ChatWithBuyer(loginedEmail,messages));
       }
       Chat updatedChat=new Chat(chat.getProductId(),chat.getProductOwner(),chatWithBuyers);
       chatRepository.save(updatedChat);
        return updatedChat;
    }

    @Override
    public Chat getChatByProduct(int productId) throws Exception{

        if(chatRepository.findById(productId).isEmpty()){
            throw new Exception("product not present");
        }
        return chatRepository.findById(productId).get();
    }

    @Override
    public ChatWithBuyer getChatByBuyerEmail(int productId, String buyerEmail) throws Exception {

        if(chatRepository.findById(productId).isEmpty()){
            throw new Exception("product not available");
        }
        AtomicBoolean isBuyerEmailPresent= new AtomicBoolean(false);
        ChatWithBuyer chatWithBuyer = new ChatWithBuyer();
        Chat chat=getChatByProduct(productId);
        chatRepository.findById(productId).get().getBuyersChat().forEach(buyerChat->{
            if(buyerChat.getBuyerEmail().equals(buyerEmail)){
                isBuyerEmailPresent.set(true);
                chatWithBuyer.setBuyerEmail(buyerChat.getBuyerEmail());
                chatWithBuyer.setMessageBody(buyerChat.getMessageBody());
            }
        });

        return chatWithBuyer;

    }


}
