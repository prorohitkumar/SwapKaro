package com.stackroute.producttradingservice.service;

import com.stackroute.producttradingservice.exception.OrderHistoryException;
import com.stackroute.producttradingservice.model.OrderHistory;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;


public interface OrderHistoryService {

   OrderHistory saveOrderHistory(OrderHistory orderHistory) throws OrderHistoryException, IOException;
   List<OrderHistory> getAllOrderHistories();
   List<OrderHistory> getProductByEmail(String email) throws  OrderHistoryException;
   Optional<OrderHistory> getOrderHistoryByOrderId(int orderId) throws OrderHistoryException, IOException;
}

