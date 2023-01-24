package com.stackroute.producttradingservice.service;

import com.stackroute.producttradingservice.model.OrderHistory;
import com.stackroute.producttradingservice.repository.OrderHistoryRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;


@ExtendWith(MockitoExtension.class)
@ExtendWith(SpringExtension.class)
@SpringBootTest
public class OrderHistoryServiceTest {

    @Autowired
    private OrderHistoryServiceImpl orderHistoryService;
    private OrderHistory orderHistory;
    List<OrderHistory> orderHistoryList;

    @BeforeEach

    public void setUp() {
        orderHistoryList = new ArrayList<>();
        orderHistory = new OrderHistory();
        orderHistoryList.add(orderHistory);
    }

    @AfterEach
    public void tearDown() {
        orderHistory = null;
        orderHistoryList = null;
    }

    @MockBean
    private OrderHistoryRepository orderHistoryRepository;


    @Test
    public void saveOrderHistory() throws IOException {
        OrderHistory orderHistory = new OrderHistory();
        orderHistory.setOrderId(1);
        orderHistory.setProductId(1);
        orderHistory.setProductName("Laptop");
        when(orderHistoryRepository.save(any(OrderHistory.class))).thenReturn(orderHistory);
        OrderHistory saveProduct = orderHistoryRepository.save(orderHistory);
        assertThat(saveProduct.getOrderId()).isNotNull();
    }

    @Test
    public void getAllOrderHistories() {
        OrderHistory orderHistory = new OrderHistory();
        orderHistory.setOrderId(1);
        orderHistory.setProductId(1);
        orderHistory.setProductName("Laptop");
        List<OrderHistory> orderHistoryList = new ArrayList<>();
        orderHistoryList.add(orderHistory);
        when(orderHistoryRepository.findAll()).thenReturn(orderHistoryList);
        List<OrderHistory> getAllOrderHistories = orderHistoryService.getAllOrderHistories();
        assertThat(getAllOrderHistories.size()).isGreaterThan(0);

    }
}
