package com.stackroute.productrecommendationservice.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.CONFLICT,reason = "Product Already Exist")
public class ProductAlreadyExistException extends Exception{
}
