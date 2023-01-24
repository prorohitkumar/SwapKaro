package com.stackroute.productrecommendationservice.controller;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.productrecommendationservice.exception.ProductAlreadyExistException;
import com.stackroute.productrecommendationservice.exception.ProductNotExistException;
import com.stackroute.productrecommendationservice.model.Product;
import com.stackroute.productrecommendationservice.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
//@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v3")
public class ProductController {

    private ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

//    @PostMapping(value = "/product",consumes = {MediaType.APPLICATION_JSON_VALUE,MediaType.MULTIPART_FORM_DATA_VALUE})
//    public ResponseEntity saveProduct(@RequestPart String product, @RequestParam("file") MultipartFile file) throws ProductAlreadyExistException, IOException {
//
//        Product product1=new ObjectMapper().readValue(product,Product.class);
//        return new ResponseEntity(productService.saveProduct(product1,file), HttpStatus.CREATED);
//    }
    @PostMapping(value = "/product")
    public ResponseEntity saveProduct(@RequestPart String product) throws ProductAlreadyExistException, IOException {

        Product product1=new ObjectMapper().readValue(product,Product.class);
        return new ResponseEntity(productService.saveProduct(product1), HttpStatus.CREATED);
    }

    @GetMapping("/allProducts")
    public ResponseEntity getAllProducts() throws ProductNotExistException {
        return new ResponseEntity(productService.getAllProducts(),HttpStatus.OK);
    }

    @GetMapping("/product/{id}")
    public ResponseEntity getProductById(@PathVariable int id) throws ProductNotExistException {
        return new ResponseEntity(productService.getProductById(id),HttpStatus.OK);
    }

    @GetMapping("/productCategory/{category}")
    public ResponseEntity getProductByCategory(@PathVariable String category) throws ProductNotExistException {
        return new ResponseEntity(productService.getProductByCategory(category),HttpStatus.OK);
    }

    @GetMapping("/productState/{state}")
    public ResponseEntity getProductByState(@PathVariable String state) throws ProductNotExistException {
        return new ResponseEntity(productService.getProductByState(state),HttpStatus.OK);
    }

    @GetMapping("/productCity/{city}")
    public ResponseEntity getProductByCity(@PathVariable String city) throws ProductNotExistException {
        return new ResponseEntity(productService.getProductByCity(city),HttpStatus.OK);
    }

    @GetMapping("/productLocation")
    public ResponseEntity getProductByLocation(@RequestParam String state,@RequestParam String city) throws ProductNotExistException {
        System.out.println(state+" "+city);
        return new ResponseEntity(productService.getProductByStateAndCity(state,city),HttpStatus.OK);
    }

    @GetMapping("/productCategoryAndCity")
    public ResponseEntity getProductByCategoryAndCity(@RequestParam String category,@RequestParam String city) throws ProductNotExistException {
        return new ResponseEntity(productService.getProductByCategoryAndCity(category,city),HttpStatus.OK);
    }

    @GetMapping("/productCategoryAndState")
    public ResponseEntity getProductByCategoryAndState(@RequestParam String category,@RequestParam String state) throws ProductNotExistException {
        return new ResponseEntity(productService.getProductByCategoryAndState(category,state),HttpStatus.OK);
    }

}
