package com.stackroute.productrecommendationservice.config;

import com.stackroute.productrecommendationservice.exception.ProductAlreadyExistException;
import com.stackroute.productrecommendationservice.model.Product;
import com.stackroute.productrecommendationservice.rabbitmq.model.ProductDTO;
import com.stackroute.productrecommendationservice.service.ProductService;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;

@Component
public class Consumer {

    private ProductService productService;

    @Autowired
    public Consumer(ProductService productService) {
        this.productService = productService;
    }

    @RabbitListener(queues = "product_queue")
    public void getProductDTOFromRabbitMq(ProductDTO product) throws IOException, ProductAlreadyExistException {

        System.out.println(product);
        Product product1=new Product(product.getProductId(),product.getProductName(),product.getDateOfPosting(),product.getProductOwner(),
                product.getModeOfPayment(),product.getProductCategory(),product.getPinCode(),product.getState(),product.getCity(),
                product.getProductDescription(), product.getProductImage());
        productService.saveProduct(product1);
    }
}
