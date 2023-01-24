package com.stackroute.productrecommendationservice.service;

import com.stackroute.productrecommendationservice.exception.ProductAlreadyExistException;
import com.stackroute.productrecommendationservice.exception.ProductNotExistException;
import com.stackroute.productrecommendationservice.model.Product;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface ProductService {

//    public Product saveProduct(Product product, MultipartFile multipartFile) throws ProductAlreadyExistException, IOException;
    public Product saveProduct(Product product) throws ProductAlreadyExistException, IOException;
    public List<Product> getAllProducts() throws ProductNotExistException;
    public Product getProductById(int productId) throws ProductNotExistException;
    public List<Product> getProductByCategory(String category) throws ProductNotExistException;
    public List<Product> getProductByState(String state) throws ProductNotExistException;
    public List<Product> getProductByCity(String city) throws ProductNotExistException;
    public List<Product> getProductByStateAndCity(String state,String city) throws ProductNotExistException;
    public List<Product> getProductByCategoryAndCity(String category,String city) throws ProductNotExistException;
    public List<Product> getProductByCategoryAndState(String category,String state) throws ProductNotExistException;

}
