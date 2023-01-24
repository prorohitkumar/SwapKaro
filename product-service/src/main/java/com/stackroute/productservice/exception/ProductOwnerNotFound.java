package com.stackroute.productservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.NOT_FOUND, reason="Product Owner not found")
public class ProductOwnerNotFound extends Exception{
}
