package com.stackroute.productrecommendationservice.service;


import com.stackroute.productrecommendationservice.exception.ProductAlreadyExistException;
import com.stackroute.productrecommendationservice.exception.ProductNotExistException;
import com.stackroute.productrecommendationservice.model.Location;
import com.stackroute.productrecommendationservice.model.Product;
import com.stackroute.productrecommendationservice.model.ProductCategory;
import com.stackroute.productrecommendationservice.repository.CategoryRepository;
import com.stackroute.productrecommendationservice.repository.LocationRepository;
import com.stackroute.productrecommendationservice.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Collections;
import java.util.List;

@Service
public class ProductServiceImpl implements ProductService{

    private ProductRepository productRepository;
    private LocationRepository locationRepository;
    private CategoryRepository categoryRepository;

    @Autowired
    public ProductServiceImpl(ProductRepository productRepository, LocationRepository locationRepository, CategoryRepository categoryRepository) {
        this.productRepository = productRepository;
        this.locationRepository = locationRepository;
        this.categoryRepository = categoryRepository;
    }

    @Override
    public Product saveProduct(Product product) throws ProductAlreadyExistException, IOException {


        if(productRepository.findById(product.getProductId()).isPresent()){
            throw new ProductAlreadyExistException();
        }
        if(locationRepository.findById(product.getPinCode()).isEmpty()){
            locationRepository.save(new Location(product.getPinCode(), product.getState(),product.getCity()));

        }

        if(categoryRepository.findById(product.getProductCategory()).isEmpty()){
            categoryRepository.save(new ProductCategory(product.getProductCategory()));
        }
        productRepository.save(product);
        productRepository.createProductLocationRelationship(product.getProductId(),product.getCity());
        productRepository.createProductCategoryRelationship(product.getProductId(),product.getProductCategory());
        return product;
    }

    @Override
    public List<Product> getAllProducts() throws ProductNotExistException {
        List list=productRepository.findAll();
        if(list.size()==0){
            throw new ProductNotExistException();
        }
        return list;
    }

    @Override
    public Product getProductById(int productId) throws ProductNotExistException {

        if(productRepository.findById(productId).isEmpty()){
            throw new ProductNotExistException();
        }
        return productRepository.findById(productId).get();
    }

    @Override
    public List<Product> getProductByCategory(String category) throws ProductNotExistException {
        List<Product> product=productRepository.getProductByCategory(category);
        if(product.size()==0){
            throw new ProductNotExistException();
        }
        return product;
    }

    @Override
    public List<Product> getProductByState(String state) throws ProductNotExistException {
        List<Product> product=productRepository.getProductByState(state);
        if(product.size()==0){
            throw new ProductNotExistException();
        }
        return product;
    }

    @Override
    public List<Product> getProductByCity(String city) throws ProductNotExistException {
        List<Product> product=productRepository.getAllRecommendationByCity(city);
        if(product.size()==0){
            throw new ProductNotExistException();
        }
        Collections.reverse(product);
        return product;
    }

    @Override
    public List<Product> getProductByStateAndCity(String state, String city) throws ProductNotExistException {
        List<Product> product=productRepository.getProductByStateAndCity(state,city);
        if(product.size()==0){
            throw new ProductNotExistException();
        }
        return product;
    }

    @Override
    public List<Product> getProductByCategoryAndCity(String category, String city) throws ProductNotExistException {
        List<Product> product=productRepository.getProductByCategoryAndCity(category,city);
        if(product.size()==0){
            throw new ProductNotExistException();
        }
        return product;
    }

    @Override
    public List<Product> getProductByCategoryAndState(String category, String state) throws ProductNotExistException {
        List<Product> product=productRepository.getProductByCategoryAndState(category,state);
        if(product.size()==0){
            throw new ProductNotExistException();
        }
        return product;
    }

}
