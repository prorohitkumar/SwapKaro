package com.stackroute.userservice.controller;

import com.stackroute.userservice.model.User;
import com.stackroute.userservice.service.UserService;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
class UserControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Mock
    UserService userService;

    @InjectMocks
    UserController userController;

    private User user;
    List<User> userList;

    @BeforeEach
    public void setUp(){
        userList = new ArrayList<>();
        mockMvc= MockMvcBuilders.standaloneSetup(userController).build();
    }

    @AfterEach
    public void tearDown(){
        user = null;
        userList = null;
    }

//    @Test
//    @DisplayName("Test should pass when a user details are saved into the database.")
//    public void saveChat() throws Exception {
//        when(chatService.saveChat(any())).thenReturn(chat);
//        mockMvc.perform(post("/api/v5/chat")
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .content(jsonToString(chat)))
//                .andExpect(status().isCreated()).andDo(MockMvcResultHandlers.print());
//        verify(chatService,times(1)).saveChat(any());
//    }
//
//    @Test
//    @DisplayName("Test should pass when a user details are saved into the database.")
//    public void getChatByProduct() throws Exception {
//        when(chatService.getChatByProduct(anyInt())).thenReturn(chat);
//        mockMvc.perform(get("/api/v5/chats/1")
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .content(jsonToString(chat)))
//                .andExpect(status().isOk()).andDo(MockMvcResultHandlers.print());
//        verify(chatService,times(1)).getChatByProduct(anyInt());
//    }
//
//    @Test
//    @DisplayName("Test should pass when a user details are saved into the database.")
//    public void getChatByProductAndBuyerEmail() throws Exception {
//        when(chatService.getChatByBuyerEmail(anyInt(),anyString())).thenReturn(chatWithBuyer);
//        mockMvc.perform(get("/api/v5/user/chats?productId=1&buyerEmail=rohit@gmail.com")
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .content(jsonToString( chat.getBuyersChat())))
//                .andExpect(status().isOk()).andDo(MockMvcResultHandlers.print());
//        verify(chatService,times(1)).getChatByBuyerEmail(anyInt(),anyString());
//    }
}
