package com.stackroute.chatservice;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.chatservice.controller.ChatController;
import com.stackroute.chatservice.model.Chat;
import com.stackroute.chatservice.model.ChatWithBuyer;
import com.stackroute.chatservice.service.ChatService;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
public class ChatControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Mock
    ChatService chatService;

    @InjectMocks
    ChatController chatController;

    private Chat chat;
    List<ChatWithBuyer> list;
    ChatWithBuyer chatWithBuyer;

    @BeforeEach
    public void setUp(){
        list=new ArrayList<>();
        chatWithBuyer=new ChatWithBuyer("rohit@gmail.com",null);
        list.add(chatWithBuyer);
        chat=new Chat(1,"m@gmail.com",list);
        mockMvc= MockMvcBuilders.standaloneSetup(chatController).build();
    }

    @AfterEach
    public void tearDown(){
        chat=null;
        list=null;
        chatWithBuyer=null;
    }

    @Test
    public void saveChat() throws Exception {
        when(chatService.saveChat(any())).thenReturn(chat);
        mockMvc.perform(post("/api/v5/chat")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(jsonToString(chat)))
                .andExpect(status().isCreated()).andDo(MockMvcResultHandlers.print());
        verify(chatService,times(1)).saveChat(any());
    }

    @Test
    public void getChatByProduct() throws Exception {
        when(chatService.getChatByProduct(anyInt())).thenReturn(chat);
        mockMvc.perform(get("/api/v5/chats/1")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonToString(chat)))
                .andExpect(status().isOk()).andDo(MockMvcResultHandlers.print());
        verify(chatService,times(1)).getChatByProduct(anyInt());
    }

    @Test
    public void getChatByProductAndBuyerEmail() throws Exception {
        when(chatService.getChatByBuyerEmail(anyInt(),anyString())).thenReturn(chatWithBuyer);
        mockMvc.perform(get("/api/v5/user/chats?productId=1&buyerEmail=rohit@gmail.com")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(jsonToString( chat.getBuyersChat())))
                .andExpect(status().isOk()).andDo(MockMvcResultHandlers.print());
        verify(chatService,times(1)).getChatByBuyerEmail(anyInt(),anyString());
    }


    private static String jsonToString(final Object o) throws JsonProcessingException
    {
        String result;
        try {
            ObjectMapper mapper = new ObjectMapper();
            //we are converting json data into using ObjectMapper class

            String jsonContent = mapper.writeValueAsString(o);
            result=jsonContent;
            return result;

        }
        catch (JsonProcessingException e)
        {
            result="JsonProcessingException";
        }
        return result;
    }
}
