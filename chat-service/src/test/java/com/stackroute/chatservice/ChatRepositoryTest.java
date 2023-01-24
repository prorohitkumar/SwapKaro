package com.stackroute.chatservice;

import com.stackroute.chatservice.model.Chat;
import com.stackroute.chatservice.repository.ChatRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@ExtendWith(SpringExtension.class)
@DataMongoTest
public class ChatRepositoryTest {

    private ChatRepository chatRepository;
    @Autowired
    public ChatRepositoryTest(ChatRepository chatRepository) {
        this.chatRepository = chatRepository;
    }
    private Chat chat;
    private Chat chat1;

    @BeforeEach
    public void setUp(){
        chat=new Chat(1,"mohit@gmail",null);
        chat1=new Chat(2,"rohit@gmail",null);
    }

    @AfterEach
    public void tearDown(){
        chat=null;
        chat1=null;
        chatRepository.deleteAll();
    }

//    @Test
//    public void givenChatToSaveChat(){
//        chatRepository.save(chat);
//        Chat demoChat=chatRepository.findById(chat.getProductId()).get();
//        assertNotNull(demoChat);
//    }
//
//    @Test
//    public void allChats(){
//        chatRepository.save(chat);
//        chatRepository.save(chat1);
//        List list=chatRepository.findAll();
//        assertEquals(2,list.size());
//    }
//
//    @Test
//    public void chatByProduct(){
//        chatRepository.save(chat);
//        Chat chatDemo=chatRepository.findById(chat.getProductId()).get();
//        assertEquals(chatDemo.getProductId(),chat.getProductId());
//    }
}
