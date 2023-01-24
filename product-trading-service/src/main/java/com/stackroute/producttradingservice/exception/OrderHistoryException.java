package com.stackroute.producttradingservice.exception;

import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus
public class OrderHistoryException extends  Exception{
private String message;
public OrderHistoryException(){
}
    public OrderHistoryException(String message) {
    super();
    this.message= message;
    }
}
