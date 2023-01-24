package com.stackroute.productservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.CONFLICT,reason="product already exists")
public class ProductAlreadyExistException extends Exception{
}
