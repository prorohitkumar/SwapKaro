package com.stackroute.productservice.service;


import java.io.IOException;
import java.util.List;
import java.util.Optional;

import com.stackroute.productservice.exception.ProductAlreadyExistException;
import com.stackroute.productservice.exception.ProductNotFoundException;
import com.stackroute.productservice.exception.ProductOwnerNotFound;
import com.stackroute.productservice.model.Product;
import com.stackroute.productservice.model.Reply;
import com.stackroute.productservice.model.Review;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public interface ProductService {
    Product saveProduct(Product product, MultipartFile file) throws IOException, ProductAlreadyExistException;

    List<Product> getAllProducts() throws Exception;

    Optional<Product> getProductById(int productId) throws ProductNotFoundException;
    List<Product> getAvailableProducts() throws Exception;

    List<Integer> getProductIdByProductOwner(String productOwner) throws ProductOwnerNotFound;

    String exchangeItems(int buyerProductId, int sellerProductId) throws ProductNotFoundException;

    String updateProductStatusForBarterCoinMode(int sellerProductId) throws ProductNotFoundException;

    String updateReviews(int productId, Review review) throws ProductNotFoundException;

    List<Product> searchProducts(String keywords) throws IOException;
}
