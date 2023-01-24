package com.stackroute.producttradingservice.repository;

import com.stackroute.producttradingservice.model.OrderHistory;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(SpringExtension.class)
@DataMongoTest
public class OrderHistoryRepositoryTest {

    @Autowired
    private OrderHistoryRepository orderHistoryRepository;

//    @Test
//    public void saveOrderTest(){
//
//        OrderHistory orderHistory;
//        orderHistory = new OrderHistory(1,1,
//                "Laptop","","",
//                46,"",
//                5665,5,5,"",null);
//        orderHistoryRepository.save(orderHistory);
//        assertNotNull(orderHistory);
//
//    }


}
