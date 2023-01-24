package com.stackroute.producttradingservice.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.producttradingservice.model.OrderHistory;
import com.stackroute.producttradingservice.service.OrderHistoryService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MockMvcResultHandlersDsl;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.util.List;

import static org.mockito.Matchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;


@ExtendWith(MockitoExtension.class)

public class OrderHistoryControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Mock
    private OrderHistoryService orderHistoryService;
    private OrderHistory orderHistory;
    private List<OrderHistory> orderHistoryList;

    @InjectMocks
    private  OrderHistoryController orderHistoryController;

    @BeforeEach
   public void setUp(){
        OrderHistory orderHistory= new OrderHistory(1,1,
                "Laptop","","", LocalDate.now(),"",
                5665,5,5,"",null);

        mockMvc= MockMvcBuilders.standaloneSetup(orderHistoryController).build();
    }

//    @Test
//    public void saveOrderHistoryTest() throws Exception {
//        when(orderHistoryService.saveOrderHistory(any(),null)).thenReturn(orderHistory);
//        mockMvc.perform(post("/api/v1/order")
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(asJsonString(orderHistory)))
//                .andExpect(status().isCreated());
//        verify(orderHistoryService,times(1)).saveOrderHistory(any(),null);
//
//    }

    @Test
    public void getAllOrderHistoriesTest() throws Exception {
        when(orderHistoryService.getAllOrderHistories()).thenReturn(orderHistoryList);
        mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/orders")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(asJsonString(orderHistory)))
                                .andDo(MockMvcResultHandlers.print());
        verify(orderHistoryService,times(1)).getAllOrderHistories();

    }
    public static String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }


}