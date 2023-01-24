package com.stackroute.productrecommendationservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.CONFLICT,reason = "Product not available")
public class ProductNotExistException extends Exception{
}
