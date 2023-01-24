package com.stackroute.chatservice;

import com.stackroute.chatservice.model.Chat;
import com.stackroute.chatservice.model.ChatWithBuyer;
import com.stackroute.chatservice.repository.ChatRepository;
import com.stackroute.chatservice.service.ChatServiceImpl;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class ChatServiceTest {

    private Chat chat;
    List<ChatWithBuyer> list;
    ChatWithBuyer chatWithBuyer;
    @Mock
    private ChatRepository chatRepository;

    @InjectMocks
    private ChatServiceImpl chatService;

    @BeforeEach
    public void setUp(){
        list=new ArrayList<>();
        chatWithBuyer=new ChatWithBuyer("rohit@gmail.com",null);
        list.add(chatWithBuyer);
        chat=new Chat(1,"m@gmail.com",list);
    }

    @AfterEach
    public void tearDown(){
        chat=null;
        list=null;
        chatWithBuyer=null;
    }

    @Test
    public void chatSave()   {

        when(chatRepository.save(chat)).thenReturn(chat);
        try {
            assertEquals(chat,chatService.saveChat(chat));
        } catch (Exception e) {
            e.printStackTrace();
        }
        verify(chatRepository,times(1)).save(any());
    }

    @Test
    public void getChatByProduct() throws Exception {
        when(chatRepository.findById(chat.getProductId())).thenReturn(Optional.ofNullable(chat));
        Chat chatDemo=chat;
        assertEquals(chatDemo,chatService.getChatByProduct(chat.getProductId()));
        verify(chatRepository,times(2)).findById(any());
    }

    @Test
    public void getChatByBuyerEmail() throws Exception {
        when(chatRepository.findById(chat.getProductId())).thenReturn(Optional.ofNullable(chat));
        Chat chatDemo=chat;
        assertEquals(chatDemo.getBuyersChat().get(0).getBuyerEmail(),(chatService.getChatByBuyerEmail(chat.getProductId(),chat.getBuyersChat().get(0).getBuyerEmail())).getBuyerEmail());
    }
}
