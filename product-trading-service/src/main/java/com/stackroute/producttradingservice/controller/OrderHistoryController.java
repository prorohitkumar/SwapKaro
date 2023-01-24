package com.stackroute.producttradingservice.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.producttradingservice.exception.OrderHistoryException;
import com.stackroute.producttradingservice.model.OrderHistory;
import com.stackroute.producttradingservice.service.OrderHistoryService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
//@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/v1")
public class OrderHistoryController {
    private OrderHistoryService orderHistoryService;
    private ResponseEntity responseEntity;

    public OrderHistoryController(OrderHistoryService orderHistoryService) {
        this.orderHistoryService = orderHistoryService;
    }

    @PostMapping("/order")
    public ResponseEntity<?> saveOrder(@RequestBody OrderHistory orderHistory) throws IOException, OrderHistoryException {
//        try {

            responseEntity = new ResponseEntity(orderHistoryService.saveOrderHistory(orderHistory),HttpStatus.CREATED);

//        } catch (Exception e) {
//            responseEntity = new ResponseEntity<>("ERROR! Try after sometime..", HttpStatus.INTERNAL_SERVER_ERROR);
//        }
        return responseEntity;
    }

    @GetMapping("/orders")
    public ResponseEntity<?> getAllOrderHistories() {
        try {
            List<OrderHistory> orderHistoryList = orderHistoryService.getAllOrderHistories();
            responseEntity = new ResponseEntity<>(orderHistoryList, HttpStatus.OK);
        } catch (Exception e) {
            responseEntity = new ResponseEntity<>("ERROR! Try after sometime..", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }

    @GetMapping("order/buyer/{buyerName}")
    public ResponseEntity<?> getProductIdByBuyerName(@PathVariable("buyerName") String buyerName) throws OrderHistoryException {
        try {
            List<OrderHistory> orders = orderHistoryService.getProductByEmail(buyerName);
            responseEntity = new ResponseEntity<>(orders, HttpStatus.OK);
        } catch (OrderHistoryException orderHistoryException) {
            responseEntity = new ResponseEntity("Order does not exist", HttpStatus.NOT_FOUND);
        }
        return responseEntity;
    }
    @GetMapping("order/{orderId}")
    public ResponseEntity<?> getOrderHistoryByOrderId(@PathVariable("orderId") int orderId)throws OrderHistoryException{
        try{
            Optional<OrderHistory> orderHistory=orderHistoryService.getOrderHistoryByOrderId(orderId);
            responseEntity=new ResponseEntity<>(orderHistory,HttpStatus.OK);

        }
        catch (Exception e)
        {
            responseEntity=new ResponseEntity<>("Error try save after sometime",HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }



}
